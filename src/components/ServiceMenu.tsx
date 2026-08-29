"use client";

import { useState } from "react";
import { type Lang } from "@/lib/shop";
import { GROUPS, SERVICES, formatMins, type Service } from "@/lib/services";

const TABS: { id: string; groups: Service["group"][]; en: string; fr: string }[] = [
  { id: "cuts", groups: ["cuts", "other"], en: "Cuts", fr: "Coupes" },
  { id: "womens", groups: ["womens"], en: "Women’s", fr: "Femmes" },
  { id: "mens-braids", groups: ["mens-braids"], en: "Men’s braids", fr: "Tresses" },
];

export function ServiceMenu({ lang }: { lang: Lang }) {
  const fr = lang === "fr";
  const [tab, setTab] = useState(TABS[0].id);
  const active = TABS.find((t) => t.id === tab) ?? TABS[0];
  const groups = GROUPS.filter((g) => active.groups.includes(g.id));

  return (
    <section id="services" className="mx-auto max-w-6xl px-4 py-16">
      <p className="text-xs font-bold tracking-[0.2em] text-gold uppercase">{fr ? "Menu" : "Menu"}</p>
      <h2 className="mt-2 text-4xl text-gold">{fr ? "Services" : "Services"}</h2>
      <div className="mt-6 flex flex-wrap gap-2">
        {TABS.map((t) => (
          <button
            key={t.id}
            type="button"
            onClick={() => setTab(t.id)}
            className={
              t.id === tab
                ? "btn btn-gold min-h-11 px-4"
                : "btn btn-ghost min-h-11 px-4 text-gold"
            }
          >
            {fr ? t.fr : t.en}
          </button>
        ))}
      </div>
      {groups.map((g) => (
        <div key={g.id} className="mt-10">
          <h3 className="text-2xl text-paper">{fr ? g.fr : g.en}</h3>
          <ul className="mt-4 divide-y divide-gold/15 border-y border-gold/15">
            {SERVICES.filter((s) => s.group === g.id).map((s) => (
              <li key={s.id} className="flex flex-col gap-2 py-4 md:flex-row md:items-start md:justify-between">
                <div className="max-w-xl">
                  <p className="font-semibold text-paper">{s.name[lang]}</p>
                  <p className="text-xs text-paper/55">
                    {formatMins(s.minutes, lang)}
                    {s.note ? ` · ${s.note[lang]}` : ""}
                  </p>
                </div>
                <div className="flex shrink-0 items-center gap-4">
                  <p className="text-lg text-gold">${s.price}</p>
                  <a href={s.book} className="text-xs font-bold tracking-wide text-gold uppercase underline">
                    {fr ? "Réserver" : "Book"}
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
