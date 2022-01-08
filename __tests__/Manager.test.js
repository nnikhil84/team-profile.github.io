const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

test("Can set number via constructor argument", () => {
  const testValue = 100;
  const testvar = new Manager("Viveca", 1, "viveca@empire.com", testValue);
  expect(testvar.Number).toBe(testValue);
});

test("Understand role via getRole()", () => {
  const testValue = "Manager";
  const testvar = new Manager("Viveca", 1, "viveca@empire.com", 100);
  expect(testvar.getRole()).toBe(testValue);
});

test("Can get number via getOfficeNumber()", () => {
  const testValue = 100;
  const testvar = new Manager("Viveca", 1, "viveca@empire.com", testValue);
  expect(testvar.getOfficeNumber()).toBe(testValue);
});
