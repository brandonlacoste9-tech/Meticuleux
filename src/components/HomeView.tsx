import { existsSync } from "node:fs";
import path from "node:path";
import { shop, TEAM, FEATURED, firstName, type Lang } from "@/lib/shop";
import { ServiceMenu } from "@/components/ServiceMenu";
import { OpenNow } from "@/components/OpenNow";
import { HoursList } from "@/components/HoursList";

const REVIEWS = [
  {
    name: "Saad Kerollos",
    en: "Garvey blessed me with the best haircut of my life you better book an appointment with him as soon as possible!!",
    fr: "Garvey m’a donné la meilleure coupe de ma vie — réservez avec lui.",
  },
  {
    name: "Prithen Sinna",
    en: "Muhammad Daud is an amazing barber! He’s really good at what he does, pays attention to detail, and always makes sure you leave looking fresh. On top of that, he’s got great vibes and makes the whole experience comfortable and enjoyable.",
    fr: "Muhammad Daud est un excellent barbier, précis, et l’expérience est confortable.",
  },
  {
    name: "Bob Needham",
    en: "Excellent haircut. Taha listened to my wishes and made me look good. Very nice atmosphere. Price was right.",
    fr: "Excellente coupe. Taha a écouté ce que je voulais. Belle ambiance. Prix correct.",
  },
  {
    name: "eric boiangiu",
    en: "Experience was a 10/10",
    fr: "Expérience 10/10",
  },
] as const;

export function HomeView({ lang }: { lang: Lang }) {
  const fr = lang === "fr";
  const film = existsSync(path.join(process.cwd(), "public/film/hero.mp4"));

  return (
    <>
      <section className="relative isolate min-h-[88vh] overflow-hidden bg-ink">
        {film ? (
          <video className="absolute inset-0 h-full w-full object-cover" autoPlay muted loop playsInline poster="/photos/hero.jpg">
            <source src="/film/hero.mp4" type="video/mp4" />
          </video>
        ) : (
          <img src="/photos/hero.jpg" alt="" className="absolute inset-0 h-full w-full object-cover" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/20" />
        <div className="relative mx-auto flex min-h-[88vh] max-w-6xl flex-col justify-end px-4 pb-14 pt-28">
          <p className="text-xs font-bold tracking-[0.28em] text-gold uppercase">{shop.addressLine}</p>
          <h1 className="mt-3 flex items-center gap-4 text-5xl text-paper md:gap-6 md:text-7xl">
            <img src="/logo.jpg" alt="" className="h-16 w-16 rounded-full object-cover md:h-24 md:w-24" />
            <span>{shop.name}</span>
          </h1>
          <p className="mt-4 max-w-xl text-lg text-paper/85">
            {fr ? "Coupes, fades, barbe et tresses." : "Cuts, fades, beard, and braids."}
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href={shop.book} className="btn btn-gold">
              {fr ? "Réserver" : "Book now"}
            </a>
            <a href={shop.phoneHref} className="btn btn-ghost text-paper">
              {shop.phone}
            </a>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {FEATURED.map((person) => (
              <a key={person.id} href={person.book} className="btn btn-ghost min-h-11 px-3 text-paper">
                {fr ? `Réserver ${firstName(person.name)}` : `Book ${firstName(person.name)}`}
              </a>
            ))}
          </div>
          <div className="mt-8">
            <OpenNow lang={lang} />
          </div>
        </div>
      </section>

      <ServiceMenu lang={lang} />

      <section id="team" className="border-y border-gold/15 bg-chair px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-bold tracking-[0.2em] text-gold uppercase">{fr ? "Équipe" : "Team"}</p>
          <h2 className="mt-2 text-4xl text-gold">{fr ? "L’équipe" : "Meet the team"}</h2>
          <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {TEAM.map((person) => (
              <li key={person.id} className="flex flex-col overflow-hidden border border-gold/20 bg-ink">
                <img src={person.photo} alt={person.name} className="aspect-[4/5] w-full object-cover object-top" />
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-2xl text-paper">{person.name}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-paper/75">{person.bio[lang]}</p>
                  <a href={person.book} className="btn btn-gold mt-5 w-full">
                    {fr ? `Réserver ${firstName(person.name)}` : `Book ${firstName(person.name)}`}
                  </a>
                  {"instagram" in person && person.instagram ? (
                    <a href={person.instagram} className="mt-3 text-center text-xs font-bold tracking-wide text-gold uppercase underline">
                      Instagram
                    </a>
                  ) : null}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="grid gap-px bg-gold/20 md:grid-cols-3">
        <figure className="min-h-56">
          <img src="/photos/fade.jpg" alt={fr ? "Fade" : "Fade"} className="h-full w-full object-cover" />
        </figure>
        <figure className="min-h-56">
          <img src="/photos/beard.jpg" alt={fr ? "Barbe" : "Beard"} className="h-full w-full object-cover" />
        </figure>
        <figure className="min-h-56">
          <img src="/photos/braids.jpg" alt={fr ? "Tresses" : "Braids"} className="h-full w-full object-cover" />
        </figure>
      </section>

      <section id="hours" className="mx-auto grid max-w-6xl gap-12 px-4 py-16 md:grid-cols-2">
        <div>
          <p className="text-xs font-bold tracking-[0.2em] text-gold uppercase">{fr ? "Heures" : "Hours"}</p>
          <h2 className="mt-2 text-4xl text-gold">{fr ? "Heures d’ouverture" : "Opening hours"}</h2>
          <HoursList lang={lang} />
        </div>
        <div>
          <p className="text-xs font-bold tracking-[0.2em] text-gold uppercase">{fr ? "Adresse" : "Find us"}</p>
          <h2 className="mt-2 text-4xl text-gold">{shop.addressLine}</h2>
          <p className="mt-2 text-paper/80">{shop.cityLine}</p>
          <p className="mt-4 text-sm leading-relaxed text-paper/70">{shop.directions[lang]}</p>
          <iframe
            title={fr ? "Carte" : "Map"}
            src={shop.mapsEmbed}
            className="mt-6 h-56 w-full border border-gold/20"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <a href={shop.maps} className="btn btn-ghost mt-4 text-gold">
            {fr ? "Ouvrir la carte" : "Open map"}
          </a>
        </div>
      </section>

      <section id="about" className="border-y border-gold/15 bg-chair px-4 py-16">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-bold tracking-[0.2em] text-gold uppercase">{fr ? "À propos" : "About"}</p>
          <p className="mt-4 text-2xl leading-relaxed text-paper md:text-3xl">{shop.about[lang]}</p>
          <p className="mt-6 text-sm leading-relaxed text-paper/70">{shop.policy[lang]}</p>
        </div>
      </section>

      <section id="reviews" className="mx-auto max-w-6xl px-4 py-16">
        <p className="text-xs font-bold tracking-[0.2em] text-gold uppercase">{fr ? "Avis" : "Reviews"}</p>
        <h2 className="mt-2 text-4xl text-gold">
          {shop.rating} · {shop.reviewCount} {fr ? "avis" : "reviews"}
        </h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {REVIEWS.map((r) => (
            <blockquote key={r.name} className="border border-gold/20 p-5">
              <p className="text-sm leading-relaxed text-paper/90">“{fr ? r.fr : r.en}”</p>
              <footer className="mt-3 text-xs font-bold tracking-wide text-gold uppercase">{r.name}</footer>
            </blockquote>
          ))}
        </div>
      </section>
    </>
  );
}
