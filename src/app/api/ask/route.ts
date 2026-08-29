import { NextResponse } from "next/server";
import { cleanHeard, localAsk, skipGrok, systemPrompt, type ChatMessage } from "@/lib/askAi";
import type { Lang } from "@/lib/shop";

export const dynamic = "force-dynamic";

const MODEL = "grok-4.5";

function asLang(value: unknown): Lang {
  return value === "fr" ? "fr" : "en";
}

async function grokReply(messages: ChatMessage[], lang: Lang) {
  const key = process.env.XAI_API_KEY;
  if (!key) return null;
  const res = await fetch("https://api.x.ai/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: MODEL,
      temperature: 0.3,
      max_tokens: 360,
      messages: [{ role: "system", content: systemPrompt(lang) }, ...messages.slice(-8)],
    }),
  });
  if (!res.ok) throw new Error(`ask model ${res.status}`);
  const data = (await res.json()) as { choices?: { message?: { content?: string } }[] };
  return data.choices?.[0]?.message?.content?.trim() || null;
}

export async function POST(request: Request) {
  let body: { lang?: string; messages?: ChatMessage[] };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Bad JSON" }, { status: 400 });
  }
  const lang = asLang(body.lang);
  const messages = Array.isArray(body.messages) ? body.messages : [];
  const lastRaw = [...messages].reverse().find((msg) => msg.role === "user")?.content?.trim() || "";
  const last = cleanHeard(lastRaw);
  const fallback = localAsk(last || "hello", lang);
  if (skipGrok(last)) return NextResponse.json({ text: fallback, source: "pages" });

  const cleaned = messages.map((msg) =>
    msg.role === "user" ? { ...msg, content: cleanHeard(msg.content) } : msg,
  );
  try {
    const text = await grokReply(cleaned, lang);
    if (text) return NextResponse.json({ text, source: "ask" });
  } catch (err) {
    console.error("[ask]", err instanceof Error ? err.message.slice(0, 180) : "fail");
    return NextResponse.json({ text: fallback, source: "pages" });
  }
  return NextResponse.json({ text: fallback, source: "pages" });
}
