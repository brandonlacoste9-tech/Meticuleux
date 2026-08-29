"use client";

import { useEffect, useState } from "react";
import { shop, shopClock, type Lang } from "@/lib/shop";

export function OpenNow({ lang }: { lang: Lang }) {
  const fr = lang === "fr";
  const [label, setLabel] = useState("");

  useEffect(() => {
    function tick() {
      const { open, row } = shopClock();
      if (row.openMin == null) {
        setLabel(fr ? "Fermé aujourd’hui" : "Closed today");
        return;
      }
      setLabel(
        open
          ? fr
            ? `Ouvert · ferme à ${row.timeFr.split("–")[1]?.trim() ?? row.timeFr}`
            : `Open · closes at ${row.time.split("–")[1]?.trim() ?? row.time}`
          : fr
            ? `Fermé · ${row.fr} ${row.timeFr}`
            : `Closed · ${row.en} ${row.time}`,
      );
    }
    tick();
    const id = window.setInterval(tick, 30_000);
    return () => window.clearInterval(id);
  }, [fr]);

  if (!label) return <span className="text-sm text-gold">{shop.rating} · {shop.reviewCount} {fr ? "avis" : "reviews"}</span>;

  return (
    <p className="text-sm text-gold">
      {label}
      <span className="text-paper/50"> · {shop.rating} · {shop.reviewCount} {fr ? "avis" : "reviews"}</span>
    </p>
  );
}
