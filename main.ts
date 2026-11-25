// One Line, One Laugh — entry program.
// Writes the one funny line to /output/entry.txt (or $MAKEFUN_OUTPUT).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "At the airport they asked if I'd packed my own bag. My mother shouted 'Not properly' from three people back.";

const OUT_DIR = process.env.MAKEFUN_OUTPUT ?? "/output";

// Create the output directory first: at the grader /output is a directory,
// so writing to it as if it were a file would fail with EISDIR.
mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(join(OUT_DIR, "entry.txt"), ENTRY, "utf8");

// Read the file back and fail loudly if what landed differs from the entry:
// a silent wrong byte would cost the whole submission.
import { readFileSync } from "node:fs";
if (readFileSync(join(OUT_DIR, "entry.txt"), "utf8") !== ENTRY) {
  throw new Error("entry.txt does not match ENTRY");
}
