import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "fix: revert 3am 'harmless' migration; restored prod, re-enabled backups, " +
  "and added a comment telling future me that DROP TABLE users is not a love language";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n");
