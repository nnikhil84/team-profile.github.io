const Employee = require("../lib/Employee");

test("Create Employee Object", () => {
  const e = new Employee();
  expect(typeof e).toBe("object");
});

test("Assign name with constructor arguments", () => {
  const name = "Viveca";
  const person = new Employee(name);
  expect(person.name).toBe(name);
});

test("Assign id with constructor argument", () => {
  const testValue = 123;
  const identification = new Employee("Viveca", testValue);
  expect(identification.id).toBe(testValue);
});

test("Assign email with constructor argument", () => {
  const testValue = "viveca@empire.com";
  const empEmail = new Employee("Viveca", 123, testValue);
  expect(empEmail.email).toBe(testValue);
});

test("Understand name with getName()", () => {
  const testValue = "Viveca";
  const empName = new Employee(testValue);
  expect(empName.getName()).toBe(testValue);
});

test("Understand id with getId()", () => {
  const testValue = 123;
  const empID = new Employee("Viveca", testValue);
  expect(empID.getId()).toBe(testValue);
});

test("Understand email via getEmail()", () => {
  const testValue = "viveca@empire.com";
  const empEmail = new Employee("Viveca", 123, testValue);
  expect(empEmail.getEmail()).toBe(testValue);
});

test("Understand role via getRole()", () => {
  const testValue = "Employee";
  const empRole = new Employee("Viveca", 123, "viveca@empire.com");
  expect(empRole.getRole()).toBe(testValue);
});
