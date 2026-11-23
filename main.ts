import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One-Line Roast: The Gadget You Use Every Day.
// The line roasts the phone's face unlock: it fails every morning, which
// turns the phone into the only honest critic of the owner's face.
const LINE =
  "My phone's face unlock fails every morning, which is the only honest review of my face I've ever received.";

const chars = [...LINE].length;
if (chars < 1 || chars > 200) {
  throw new Error(`line must be 1-200 characters, got ${chars}`);
}
if (!LINE.trim()) {
  throw new Error("line must not be only whitespace");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
console.log(LINE);
