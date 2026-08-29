import { shop, TEAM, type Lang } from "./shop";
import { SERVICES, formatMins } from "./services";

export type ChatMessage = { role: "user" | "assistant"; content: string };

function norm(value: string) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export function cleanHeard(text: string) {
  return text.replace(/\s+/g, " ").trim().slice(0, 400);
}

export function buildBrief() {
  const hours = shop.hours.map((h) => `${h.en}: ${h.time}`).join("; ");
  const services = SERVICES.map(
    (s) => `• ${s.name.en} — ${formatMins(s.minutes, "en")} — $${s.price}${s.note ? ` — ${s.note.en}` : ""}`,
  ).join("\n");
  return `SHOP: ${shop.name}
PHONE: ${shop.phone}
NO EMAIL is printed.
BOOKING: ${shop.book} (Setmore). This chat does not book or take a deposit.
ADDRESS THEY PRINT: ${shop.addressLine}, ${shop.cityLine}
DIRECTIONS THEY PRINT: ${shop.directions.en}
HOURS (Eastern): ${hours}
RATING THEY PRINT: ${shop.rating} · ${shop.reviewCount} reviews on Setmore
ABOUT: ${shop.about.en}
POLICY: ${shop.policy.en}
STAFF (as listed on Setmore book page): ${TEAM.map((p) => `${p.name} — ${p.bio.en}`).join(" | ")}
Do not invent other staff, titles, or emails.
Instagram on their Setmore profile: ${shop.instagram.map((ig) => `@${ig.handle} ${ig.href}`).join(" · ")}

SERVICES (CAD, as printed):
${services}`;
}

export function systemPrompt(lang: Lang) {
  const speak = lang === "fr" ? "French" : "English";
  return `You are the printed-facts helper labeled “Ask the barber” on the Méticuleux site. Speak ${speak}. Short, 2–5 sentences. You are not a specific barber and you do not take bookings.

FACTS only from the brief. If it is not there, say you don't know and tell them to call ${shop.phone} or book on Setmore.

You may quote printed prices. Do not invent a price that is not listed. Do not take a booking here — send them to ${shop.book}. Do not impersonate a barber.

FACTS:
${buildBrief()}`;
}

function hitHours(q: string) {
  return /\b(hour|hours|open|opening|close|closed|monday|sunday|heures|ouvert|ferme|horaire)\b/.test(q);
}
function hitWhere(q: string) {
  return /\b(address|where|located|pointe|claire|saint-jean|st-jean|parking|moe|scarol|adresse|ou etes)\b/.test(q);
}
function hitContact(q: string) {
  return /\b(phone|call|email|contact|number|telephone|courriel|appel|instagram|insta)\b/.test(q);
}
function hitBook(q: string) {
  return /\b(book|booking|appoint|schedule|rdv|rendez|disponible|setmore)\b/.test(q);
}
function hitPrice(q: string) {
  return /\b(price|prices|cost|how much|quote|fee|prix|cout|combien)\b/.test(q);
}
function hitHi(q: string) {
  return /^(hi|hey|hello|yo|bonjour|salut|allo|merci|thanks|thank you)[\s!?.]*$/.test(q);
}
function hitTeam(q: string) {
  return /\b(team|staff|who cuts|who works|equipe|barbers|alex|kevwe|garvey|taha|mira|daud|muhammad)\b/.test(q);
}

export function skipGrok(question: string) {
  const q = norm(cleanHeard(question));
  if (!q || hitHi(q)) return true;
  return hitHours(q) || hitWhere(q) || hitContact(q) || hitBook(q) || hitTeam(q);
}

export function localAsk(question: string, lang: Lang) {
  const fr = lang === "fr";
  const q = norm(cleanHeard(question));
  if (!q || hitHi(q)) {
    return fr
      ? `Demandez les coupes, les tresses, les heures ou l’adresse. Les prix imprimés sont sur la page Services. Je ne réserve pas ici — ${shop.book}. ${shop.phone}.`
      : `Ask about cuts, braids, hours, or the address. Printed prices are on Services. This chat doesn’t book — ${shop.book}. ${shop.phone}.`;
  }
  if (hitHours(q)) {
    const line = shop.hours.map((h) => `${fr ? h.fr : h.en} ${fr ? h.timeFr : h.time}`).join(" · ");
    return fr
      ? `Heures (heure de l’Est) : ${line}.`
      : `Hours (Eastern): Sunday 10 AM–5 PM · Monday closed · Tuesday 10 AM–6 PM · Wednesday 10 AM–5 PM · Thursday 9 AM–9 PM · Friday 9 AM–9 PM · Saturday 9 AM–5 PM.`;
  }
  if (hitWhere(q)) {
    return fr
      ? `${shop.addressLine}, ${shop.cityLine}. ${shop.directions.fr} ${shop.phone}.`
      : `${shop.addressLine}, ${shop.cityLine}. ${shop.directions.en} ${shop.phone}.`;
  }
  if (hitContact(q) && !hitBook(q)) {
    const ig = shop.instagram.map((i) => `@${i.handle}`).join(" · ");
    return fr
      ? `${shop.phone}. Instagram : ${ig}. Réservation : ${shop.book}.`
      : `${shop.phone}. Instagram: ${ig}. Book: ${shop.book}.`;
  }
  if (hitBook(q) && !hitTeam(q)) {
    return fr
      ? `Réservez sur Setmore : ${shop.book}. Ce clavardage ne prend pas de rendez-vous.`
      : `Book on Setmore: ${shop.book}. This chat does not take appointments.`;
  }
  if (hitTeam(q)) {
    const named = TEAM.find((p) => {
      const hay = norm(p.name);
      return hay.split(" ").some((w) => w.length > 2 && q.includes(w));
    });
    if (named) {
      return fr
        ? `${named.name} — ${named.bio.fr} Réservez sur Setmore : ${named.book}.`
        : `${named.name} — ${named.bio.en} Book on Setmore: ${named.book}.`;
    }
    const list = TEAM.map((p) => p.name).join(", ");
    return fr
      ? `Équipe imprimée sur Setmore : ${list}. Bios et photos sur la page Équipe. Réservation : ${shop.book}.`
      : `Staff listed on Setmore: ${list}. Bios and photos are on the Team section. Book: ${shop.book}.`;
  }
  if (hitPrice(q)) {
    const cheap = SERVICES.filter((s) => s.group === "cuts")
      .map((s) => `${s.name[lang]} $${s.price}`)
      .slice(0, 6)
      .join("; ");
    return fr
      ? `Prix imprimés (extraits coupes) : ${cheap}. Liste complète sur Services. Je n’invente pas d’autre tarif.`
      : `Printed cut prices include: ${cheap}. Full list on Services. I won’t invent another price.`;
  }
  const svc = SERVICES.find((s) => {
    const hay = norm(`${s.name.en} ${s.name.fr} ${s.note?.en || ""} ${s.id}`);
    return q.split(" ").filter((w) => w.length > 3).some((w) => hay.includes(w));
  });
  if (svc) {
    return `${svc.name[lang]} — ${formatMins(svc.minutes, lang)} — $${svc.price}. ${svc.note?.[lang] || ""} Book: ${svc.book}`;
  }
  return fr
    ? `Coupes, barbe, tresses et poses de perruque sont imprimées avec prix. ${shop.phone} ou ${shop.book}.`
    : `Cuts, beard, braids, and wig installs are printed with prices. ${shop.phone} or ${shop.book}.`;
}
