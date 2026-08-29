import Link from "next/link";
import { pathFor, shop, type Lang } from "@/lib/shop";

export function Header({ lang }: { lang: Lang }) {
  const fr = lang === "fr";
  const p = (path: string) => pathFor(lang, path);
  return (
    <header className="sticky top-0 z-40 border-b border-gold/20 bg-ink/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-2">
        <Link href={p("/")} className="flex min-h-12 items-center gap-3">
          <img src="/logo.jpg" alt="" className="h-12 w-12 rounded-full object-cover" />
          <span className="serif text-xl tracking-wide text-gold">{shop.name}</span>
        </Link>
        <nav className="hidden items-center gap-5 text-sm font-semibold text-paper/80 md:flex">
          <a href="#services">Services</a>
          <a href="#team">{fr ? "Équipe" : "Team"}</a>
          <a href="#hours">{fr ? "Heures" : "Hours"}</a>
          <a href="#about">{fr ? "À propos" : "About"}</a>
        </nav>
        <div className="flex items-center gap-2">
          <Link href={fr ? "/" : "/fr"} className="text-xs font-bold tracking-wide uppercase text-gold/80">
            {fr ? "EN" : "FR"}
          </Link>
          <a href={shop.phoneHref} className="hidden text-sm font-bold text-gold lg:inline">
            {shop.phone}
          </a>
          <a href={shop.book} className="btn btn-gold">
            {fr ? "Réserver" : "Book"}
          </a>
        </div>
      </div>
      <nav className="flex gap-4 overflow-x-auto px-4 py-2 text-sm font-semibold text-paper/75 md:hidden">
        <a href="#services">Services</a>
        <a href="#team">{fr ? "Équipe" : "Team"}</a>
        <a href="#hours">{fr ? "Heures" : "Hours"}</a>
        <a href="#about">{fr ? "À propos" : "About"}</a>
      </nav>
    </header>
  );
}
