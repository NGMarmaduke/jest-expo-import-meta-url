import { moduleUrl, readFixture } from "./module-url";

test("import.meta.url is a file URL under jest", () => {
  expect(moduleUrl).toEqual(expect.stringMatching(/^file:\/\//));
});

test("a sibling file can be resolved against import.meta.url", () => {
  expect(readFixture()).toBe("hello\n");
});
