const Intern = require("../lib/Intern");

test("Can set school via constructor", () => {
  const testValue = "Stanford";
  const testvar = new Intern("Viveca", 1, "viveca@empire.com", testValue);
  expect(testvar.school).toBe(testValue);
});

test('getRole() should return "Intern"', () => {
  const testValue = "Intern";
  const testvar = new Intern("Viveca", 1, "viveca@empire.com", "Stanford");
  expect(testvar.getRole()).toBe(testValue);
});

test("Can get school via getSchool()", () => {
  const testValue = "Stanford";
  const testvar = new Intern("Viveca", 1, "viveca@empire.com", testValue);
  expect(testvar.getSchool()).toBe(testValue);
});
