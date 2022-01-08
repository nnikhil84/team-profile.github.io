const Engineer = require("../lib/Engineer");

test("Can set GitHUb account with a constructor", () => {
  const testValue = "GitHub";
  const empGithub = new Engineer("Viveca", 123, "viveca@empire.com", testValue);
  expect(empGithub.github).toBe(testValue);
})

test("Understand role via getRole()", () => {
  const testValue = "Engineer";
  const testvar = new Engineer("Viveca", 1, "viveca@empire.com", "GitHub");
  expect(testvar.getRole()).toBe(testValue);
})

test("Can get GitHub username via getGithub()", () => {
  const testValue = "GitHub";
  const testvar = new Engineer("Viveca", 1, "viveca@empire.com", testValue);
  expect(testvar.getGithub()).toBe(testValue);
})
