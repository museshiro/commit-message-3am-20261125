import { mkdirSync, writeFileSync } from "node:fs";

// One-line commit message entry for the 3 AM commit message competition.
// The line is written byte-for-byte to /output/entry.txt only — exactly as given, no trailing newline, no extra bytes.
const line =
  "fix: I pushed to main at 3 AM because branch protection was asleep too";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line);
