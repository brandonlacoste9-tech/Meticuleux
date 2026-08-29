export type Lang = "en" | "fr";

/** Facts printed on https://meticuleux-1.setmore.com/ (Aug 2026). */
export const shop = {
  name: "Méticuleux",
  phone: "(514) 804-0067",
  phoneHref: "tel:+15148040067",
  book: "https://meticuleux-1.setmore.com/book",
  live: "https://meticuleux-1.setmore.com/",
  rating: "4.9",
  reviewCount: 192,
  addressLine: "940 boulevard Saint-Jean unit 27",
  cityLine: "Montreal, Quebec H9R5N8",
  maps: "https://www.google.com/maps/search/?api=1&query=940+boulevard+Saint-Jean+unit+27%2C+Montreal%2C+Quebec%2C+H9R5N8",
  mapsEmbed:
    "https://maps.google.com/maps?q=940+boulevard+Saint-Jean+unit+27,+Montreal,+Quebec+H9R5N8&z=16&output=embed",
  directions: {
    en: "Shopping centre where TD & Scarolies restaurant is and right next door to Moes restaurant.",
    fr: "Centre commercial où se trouvent la TD et Scarolies, juste à côté du restaurant Moe’s.",
  },
  hours: [
    { en: "Sunday", fr: "Dimanche", time: "10 AM – 5 PM", timeFr: "10 h – 17 h", openMin: 10 * 60, closeMin: 17 * 60 },
    { en: "Monday", fr: "Lundi", time: "Closed", timeFr: "Fermé", openMin: null, closeMin: null },
    { en: "Tuesday", fr: "Mardi", time: "10 AM – 6 PM", timeFr: "10 h – 18 h", openMin: 10 * 60, closeMin: 18 * 60 },
    { en: "Wednesday", fr: "Mercredi", time: "10 AM – 5 PM", timeFr: "10 h – 17 h", openMin: 10 * 60, closeMin: 17 * 60 },
    { en: "Thursday", fr: "Jeudi", time: "9 AM – 9 PM", timeFr: "9 h – 21 h", openMin: 9 * 60, closeMin: 21 * 60 },
    { en: "Friday", fr: "Vendredi", time: "9 AM – 9 PM", timeFr: "9 h – 21 h", openMin: 9 * 60, closeMin: 21 * 60 },
    { en: "Saturday", fr: "Samedi", time: "9 AM – 5 PM", timeFr: "9 h – 17 h", openMin: 9 * 60, closeMin: 17 * 60 },
  ],
  timezone: "America/Toronto",
  instagram: [
    { handle: "kevwe_barber", href: "https://www.instagram.com/kevwe_barber/" },
    { handle: "da_soca_barber", href: "https://www.instagram.com/da_soca_barber/" },
  ],
  about: {
    en: "Méticuleux evokes a sense of precision, care, and refined attention to detail. A barbershop where grooming is treated as a craft, not just a service. Promising sophistication, a high-quality experience, together with a focus on style and perfection.",
    fr: "Méticuleux évoque la précision, le soin et une attention raffinée au détail. Un salon de barbier où le grooming est un métier, pas seulement un service. Une expérience soignée, avec un accent sur le style et la finition.",
  },
  policy: {
    en: "Welcome to Méticuleux. Book your next cut, fade, or shave with us — sharp looks and clean service every time.",
    fr: "Bienvenue chez Méticuleux. Réservez votre prochaine coupe, fade ou rasage — un look net, un service propre.",
  },
} as const;

/** Staff as listed on https://meticuleux-1.setmore.com/book (Aug 2026). Photos are their Setmore avatars. */
export const TEAM = [
  {
    id: "alex-steele",
    name: "Alex Steele",
    photo: "/photos/team/alex-steele.jpg",
    book: "https://meticuleux-1.setmore.com/alex",
    bio: {
      en: "Barber / Educator. 12 years of experience.",
      fr: "Barbier / formateur. 12 ans d’expérience.",
    },
  },
  {
    id: "kevwe-briggs",
    name: "Kevwe Briggs",
    photo: "/photos/team/kevwe-briggs.jpg",
    book: "https://meticuleux-1.setmore.com/book",
    instagram: "https://www.instagram.com/kevwe_barber/",
    bio: {
      en: "Barber / Educator. 8 years of experience.",
      fr: "Barbier / formateur. 8 ans d’expérience.",
    },
  },
  {
    id: "muhammad-daud",
    name: "Muhammad Daud",
    photo: "/photos/team/muhammad-daud.jpg",
    book: "https://meticuleux-1.setmore.com/muhammad-daud",
    featured: true,
    bio: {
      en: "2 years into the barber game and fully ready to elevate your look.",
      fr: "Deux ans dans le métier, prêt à élever votre look.",
    },
  },
  {
    id: "garvey-demosthene",
    name: "Garvey Demosthene",
    photo: "/photos/team/garvey-demosthene.jpg",
    book: "https://meticuleux-1.setmore.com/book",
    featured: true,
    bio: {
      en: "2nd year in the game. The future of grooming, one meticulous cut at a time.",
      fr: "Deuxième année. Le grooming de demain, une coupe méticuleuse à la fois.",
    },
  },
  {
    id: "taha-abueid",
    name: "Taha Abueid",
    photo: "/photos/team/taha-abueid.jpg",
    book: "https://meticuleux-1.setmore.com/book",
    featured: true,
    bio: {
      en: "2 years deep. Clean cuts, calm vibes, and details that don’t go unnoticed.",
      fr: "Deux ans. Coupes nettes, ambiance calme, et des détails qui se voient.",
    },
  },
  {
    id: "mira",
    name: "Mira",
    photo: "/photos/team/mira.jpg",
    book: "https://meticuleux-1.setmore.com/mira",
    bio: {
      en: "Hairstylist of 11 years. Attention to detail. Genuine love for the art that is hairstyling.",
      fr: "Coiffeuse depuis 11 ans. Attention au détail. Un vrai amour pour l’art de la coiffure.",
    },
  },
] as const;

export function pathFor(lang: Lang, path: string) {
  if (lang === "fr") return path === "/" ? "/fr" : `/fr${path}`;
  return path;
}

export function firstName(name: string) {
  return name.split(" ")[0];
}

export const FEATURED = (
  ["garvey-demosthene", "muhammad-daud", "taha-abueid"] as const
).map((id) => TEAM.find((p) => p.id === id)!);

export function shopClock(now = new Date()) {
  const parts = Object.fromEntries(
    new Intl.DateTimeFormat("en-US", {
      timeZone: shop.timezone,
      weekday: "long",
      hour: "numeric",
      minute: "numeric",
      hourCycle: "h23",
    })
      .formatToParts(now)
      .map((p) => [p.type, p.value]),
  );
  const weekday = parts.weekday;
  const hour = Number(parts.hour);
  const minute = Number(parts.minute);
  const row = shop.hours.find((h) => h.en === weekday) ?? shop.hours[0];
  const mins = hour * 60 + minute;
  const open = row.openMin != null && row.closeMin != null && mins >= row.openMin && mins < row.closeMin;
  return { weekday, hour, minute, mins, row, open };
}
