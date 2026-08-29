import { Header } from "./Header";
import { Footer } from "./Footer";
import { StickyBar } from "./StickyBar";
import { AskAi } from "./AskAi";
import type { Lang } from "@/lib/shop";

export function SiteShell({ lang, children }: { lang: Lang; children: React.ReactNode }) {
  return (
    <>
      <Header lang={lang} />
      <main className="pb-20 md:pb-0">{children}</main>
      <Footer lang={lang} />
      <StickyBar lang={lang} />
      <AskAi lang={lang} />
    </>
  );
}
