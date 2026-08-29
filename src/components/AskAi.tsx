"use client";

import { useEffect, useRef, useState } from "react";
import { shop, type Lang } from "@/lib/shop";
import type { ChatMessage } from "@/lib/askAi";

const LABEL = {
  en: "Ask the barber",
  fr: "Demander au barbier",
};

const HELLO = {
  en: "Ask about hours, the address, cuts, or prices. This chat doesn’t take bookings.",
  fr: "Demandez les heures, l’adresse, les coupes ou les prix. Ce clavardage ne prend pas de rendez-vous.",
};

const CHIPS = {
  en: ["Hours?", "Where are you?", "Who is on the team?", "Haircut + beard?", "How do I book?"],
  fr: ["Heures?", "Adresse?", "L’équipe?", "Coupe + barbe?", "Comment réserver?"],
};

type Bubble = ChatMessage & { id: string };

export function AskAi({ lang }: { lang: Lang }) {
  const fr = lang === "fr";
  const [open, setOpen] = useState(false);
  const [pending, setPending] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Bubble[]>([{ id: "hello", role: "assistant", content: HELLO[lang] }]);
  const scroller = useRef<HTMLDivElement>(null);
  const field = useRef<HTMLInputElement>(null);
  const messagesRef = useRef(messages);
  messagesRef.current = messages;

  useEffect(() => {
    scroller.current?.scrollTo({ top: scroller.current.scrollHeight, behavior: "smooth" });
  }, [messages, open]);

  useEffect(() => {
    if (open) field.current?.focus();
  }, [open]);

  async function send(text: string) {
    const trimmed = text.trim();
    if (!trimmed || pending) return;
    const user: Bubble = { id: crypto.randomUUID(), role: "user", content: trimmed };
    const next = [...messagesRef.current, user];
    setMessages(next);
    setInput("");
    setPending(true);
    try {
      const res = await fetch("/api/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          lang,
          messages: next.map(({ role, content }) => ({ role, content })),
        }),
      });
      const data = (await res.json()) as { text?: string };
      const reply = data.text?.trim() || (fr ? `Appelez ${shop.phone}.` : `Call ${shop.phone}.`);
      setMessages((cur) => [...cur, { id: crypto.randomUUID(), role: "assistant", content: reply }]);
    } catch {
      setMessages((cur) => [
        ...cur,
        { id: crypto.randomUUID(), role: "assistant", content: fr ? `Appelez ${shop.phone}.` : `Call ${shop.phone}.` },
      ]);
    } finally {
      setPending(false);
    }
  }

  return (
    <>
      {open ? (
        <div className="fixed inset-x-3 bottom-20 z-[60] mx-auto flex max-h-[min(32rem,70vh)] w-[min(24rem,calc(100%-1.5rem))] flex-col border border-gold/30 bg-chair shadow-2xl md:inset-x-auto md:right-6 md:bottom-6 md:max-h-[32rem]">
          <div className="flex items-center justify-between bg-gold px-4 py-3 text-ink">
            <div>
              <p className="text-[0.65rem] font-bold tracking-[0.18em] uppercase">{shop.name}</p>
              <p className="text-sm font-bold">{LABEL[lang]}</p>
            </div>
            <button type="button" className="min-h-10 min-w-10 text-lg" onClick={() => setOpen(false)} aria-label="Close">
              ×
            </button>
          </div>
          <div ref={scroller} className="flex-1 space-y-2 overflow-y-auto px-3 py-3 text-sm">
            {messages.map((m) => (
              <p
                key={m.id}
                className={
                  m.role === "user" ? "ml-8 rounded bg-gold/15 px-3 py-2" : "mr-6 rounded bg-paper/5 px-3 py-2 text-paper/90"
                }
              >
                {m.content}
              </p>
            ))}
            {pending ? <p className="text-xs text-gold">{fr ? "Un instant…" : "One moment…"}</p> : null}
          </div>
          <div className="flex flex-wrap gap-1 px-3 pb-2">
            {CHIPS[lang].map((c) => (
              <button
                key={c}
                type="button"
                className="rounded-full border border-gold/30 px-2 py-1 text-[11px]"
                onClick={() => void send(c)}
              >
                {c}
              </button>
            ))}
          </div>
          <form
            className="flex gap-2 border-t border-gold/20 p-2"
            onSubmit={(e) => {
              e.preventDefault();
              void send(input);
            }}
          >
            <input
              ref={field}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="min-h-11 min-w-0 flex-1 bg-ink px-3 text-sm outline-none"
              placeholder={fr ? "Votre question" : "Your question"}
            />
            <button type="submit" className="btn btn-gold min-h-11 px-3" disabled={pending}>
              {fr ? "Envoyer" : "Send"}
            </button>
          </form>
        </div>
      ) : null}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-20 right-4 z-[55] min-h-12 rounded-full bg-gold px-4 text-xs font-bold tracking-wide text-ink uppercase shadow-lg md:bottom-6"
      >
        {LABEL[lang]}
      </button>
    </>
  );
}
