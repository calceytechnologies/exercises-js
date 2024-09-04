const { algo } = require("./algo");

test("algorithm return the passed parameter", () => {
  expect(algo("test")).toBe("test");
});
