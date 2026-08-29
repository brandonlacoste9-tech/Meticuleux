import { shop, type Lang } from "@/lib/shop";

export function StickyBar({ lang }: { lang: Lang }) {
  const fr = lang === "fr";
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-gold/30 bg-ink text-paper md:hidden">
      <div className="grid grid-cols-2">
        <a href={shop.phoneHref} className="flex min-h-14 items-center justify-center text-sm font-bold">
          {fr ? "Appeler" : "Call"}
        </a>
        <a href={shop.book} className="flex min-h-14 items-center justify-center bg-gold text-sm font-bold text-ink">
          {fr ? "Réserver" : "Book"}
        </a>
      </div>
    </div>
  );
}
