// One Line, One Laugh — a single funny line, written by hand.
// The program writes the line to /output/entry.txt (MAKEFUN_OUTPUT_DIR
// stands in for /output outside the grader's container, as in sibling
// entries). Node 22, standard library only, no network, no secrets.
//
// Run locally:  mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';

// The joke: a fraud-prevention call reframed as the only person
// checking in on you. One line, one turn, no setup paragraph.
const LINE =
  "My bank's fraud team called to check a purchase was really me, and honestly, it's the most anyone's checked on me all year.";

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(out, { recursive: true });
writeFileSync(`${out}/entry.txt`, LINE, 'utf8');
console.log(`wrote ${LINE.length} characters to ${out}/entry.txt`);
