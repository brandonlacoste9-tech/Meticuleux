"use client";

import { useEffect, useState } from "react";
import { shop, shopClock, type Lang } from "@/lib/shop";

export function HoursList({ lang }: { lang: Lang }) {
  const fr = lang === "fr";
  const [today, setToday] = useState<string | null>(null);
  const [open, setOpen] = useState<boolean | null>(null);

  useEffect(() => {
    const clock = shopClock();
    setToday(clock.row.en);
    setOpen(clock.open);
  }, []);

  return (
    <>
      {open != null ? (
        <p className="mt-2 text-sm text-gold">
          {open ? (fr ? "Ouvert maintenant" : "Open now") : fr ? "Fermé maintenant" : "Closed now"}
        </p>
      ) : null}
      <ul className="mt-6 space-y-1 text-sm">
        {shop.hours.map((h) => (
          <li
            key={h.en}
            className={`flex justify-between border-b border-gold/10 py-2.5 ${today === h.en ? "text-gold" : ""}`}
          >
            <span>{fr ? h.fr : h.en}</span>
            <span className={today === h.en ? "text-gold" : "text-gold/90"}>{fr ? h.timeFr : h.time}</span>
          </li>
        ))}
      </ul>
    </>
  );
}
