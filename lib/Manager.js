const Employee = require("./employee");

class Manager extends Employee {
  constructor(name, id, email, Number) {
    super(name, id, email);
    this.Number = Number;
    this.title = "Manager";
  }

  getRole() {
    return this.title;
  }

  getOfficeNumber() {
    return this.Number;
  }
}

module.exports = Manager;
