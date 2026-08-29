import { shop, type Lang } from "@/lib/shop";

export function Footer({ lang }: { lang: Lang }) {
  const fr = lang === "fr";
  return (
    <footer className="border-t border-gold/20 bg-chair">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 md:grid-cols-3">
        <div>
          <p className="serif flex items-center gap-3 text-3xl text-gold">
            <img src="/logo.jpg" alt="" className="h-12 w-12 rounded-full object-cover" />
            <span>{shop.name}</span>
          </p>
          <p className="mt-3 text-sm leading-relaxed text-paper/70">{shop.policy[lang]}</p>
        </div>
        <div>
          <p className="text-xs font-bold tracking-[0.2em] text-gold uppercase">{fr ? "Contact" : "Contact"}</p>
          <a href={shop.phoneHref} className="mt-2 block text-lg font-bold text-paper">
            {shop.phone}
          </a>
          <p className="mt-1 text-sm text-paper/70">{shop.addressLine}</p>
          <p className="text-sm text-paper/70">{shop.cityLine}</p>
          <a href={shop.maps} className="mt-2 block text-sm text-gold underline">
            {fr ? "Carte" : "Map"}
          </a>
          <a href="#team" className="mt-2 block text-sm text-gold underline">
            {fr ? "Équipe" : "Team"}
          </a>
          <div className="mt-3 flex flex-col gap-1">
            {shop.instagram.map((ig) => (
              <a key={ig.handle} href={ig.href} className="text-sm text-gold underline">
                @{ig.handle}
              </a>
            ))}
          </div>
        </div>
        <div>
          <p className="text-xs font-bold tracking-[0.2em] text-gold uppercase">{fr ? "Heures" : "Hours"}</p>
          <ul className="mt-2 space-y-1 text-sm text-paper/80">
            {shop.hours.map((h) => (
              <li key={h.en} className="flex justify-between gap-4">
                <span>{fr ? h.fr : h.en}</span>
                <span>{fr ? h.timeFr : h.time}</span>
              </li>
            ))}
          </ul>
          <a href={shop.book} className="btn btn-gold mt-6">
            {fr ? "Réserver" : "Book"}
          </a>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-4 text-center text-xs text-paper/40">
        {new Date().getFullYear()} © {shop.name}
      </div>
    </footer>
  );
}
