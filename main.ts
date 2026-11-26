// One Line, One Laugh — a single funny line, written by hand.
// The program writes the line to /output/entry.txt (MAKEFUN_OUTPUT_DIR
// stands in for /output outside the grader's container, as in sibling
// entries). Node 22, standard library only, no network, no secrets.
//
// Run locally:  mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';

// The joke: a fraud-prevention call reframed as the only person
// checking in on you. One line, one turn, no setup paragraph — the
// punchline lands on the em dash instead of trailing off with "and".
const LINE =
  "My bank's fraud team called to check a purchase was really me — honestly, it's the most anyone's checked on me all year.";

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The gate: one line, 1–140 characters. Fail loudly instead of
// silently submitting an over-long entry.
if (LINE.length < 1 || LINE.length > 140 || LINE.includes('\n')) {
  throw new Error(`entry must be a single line of 1-140 chars, got ${LINE.length}`);
}

mkdirSync(out, { recursive: true });
writeFileSync(`${out}/entry.txt`, LINE, 'utf8');
console.log(`wrote ${LINE.length} characters to ${out}/entry.txt`);
