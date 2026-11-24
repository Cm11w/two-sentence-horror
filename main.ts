// Two-Sentence Horror — make.fun entry (u-suroto-two-sentence-horror-acea9253).
// Writes one original horror story of exactly two sentences (<=400 chars)
// to /output/entry.txt, as the program/v1 harness requires.

import { mkdirSync, writeFileSync } from "node:fs";

const STORY =
  "I have lived alone for eleven years, and every morning the kettle is already warm when I come downstairs. " +
  "Last night I stayed awake to catch whoever makes it, and at dawn the kettle clicked off behind me.";

// Self-check the competition gate before writing: exactly two sentences,
// 1-400 characters, not only whitespace. Fail loudly rather than emit an
// invalid entry.
const sentenceCount = (STORY.match(/[.!?](?=\s|$)/g) ?? []).length;
if (sentenceCount !== 2) {
  throw new Error(`expected exactly 2 sentences, found ${sentenceCount}`);
}
if (STORY.length < 1 || STORY.length > 400 || STORY.trim().length === 0) {
  throw new Error(`story length ${STORY.length} is outside the 1-400 gate`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", STORY, "utf8");
