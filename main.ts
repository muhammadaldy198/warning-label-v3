// warning-label-v3 — entry program (Node 22, deterministic, no network).
// Writes the one-line warning label to entry.txt in the output directory.
import { writeFileSync, chmodSync } from "node:fs";
import { join } from "node:path";

const PICK =
  "WARNING: This human snores in surround sound and wakes up convinced it slept in total silence.";

// Pick: care-label-free snore lane (0 entries in field census) — one idea, turn lands in the last words.
// Gate: UTF-8, 1-160 chars, single line, not only whitespace.
if (PICK.length < 1 || PICK.length > 160) {
  throw new Error(`pick length ${PICK.length} outside 1-160`);
}
if (PICK.includes("\n") || PICK.trim().length === 0) {
  throw new Error("pick must be a single non-blank line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || process.cwd();
const target = join(outDir, "entry.txt");
writeFileSync(target, PICK, "utf8");
chmodSync(target, 0o644);
console.log(`wrote ${target} (${PICK.length} chars)`);
