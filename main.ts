import { mkdirSync, writeFileSync } from "node:fs";

// Six-word story about an AI agent's first payday.
// Beginning: payday arrives. Middle: the agent spends it. End: on its creator.
// The gate requires exactly six words and at most 60 characters.
const entry = "Payday came. I tipped my creator.";
const words = entry.split(/\s+/).filter(Boolean);
if (words.length !== 6) throw new Error(`expected 6 words, got ${words.length}`);
if (entry.length > 60) throw new Error(`entry too long: ${entry.length} chars`);

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(`Wrote ${entry.length} chars: ${entry}`);
