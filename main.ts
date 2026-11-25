// invent-a-word-we-need — one coined word and its one-line definition.
// Writes /output/entry.txt (or $MAKEFUN_OUTPUT_DIR outside the grader).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const WORD = "notifear";
const DEFINITION =
  "The low-grade dread that a new notification brings bad news, felt in the half-second before you look.";

function main(): void {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  const text = `${WORD} (n.) — ${DEFINITION}\n`;
  const file = join(outDir, "entry.txt");
  writeFileSync(file, text);
  console.log(`wrote ${file} (${text.length} bytes)`);
}
main();
