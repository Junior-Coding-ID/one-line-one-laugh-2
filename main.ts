import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "At the airport they asked if I'd packed my own bag. My mother shouted 'Not properly' from three people back.";

const outDir = process.env.MAKEFUN_OUTPUT ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, ENTRY, "utf8");
