import fs from "node:fs";

export const moduleUrl = import.meta.url;

export function readFixture() {
  return fs.readFileSync(new URL("./fixture.txt", import.meta.url), "utf8");
}
