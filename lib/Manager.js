const Employee = require("./Employee");

class Manager extends Employee {
  constructor(id, name, email, officeNumber) {
    // Set Inherited super class property values
    super(id, name, email);

    // Set Sub class property values
    this.officeNumber = officeNumber;
  }

  // Override super class getRole() method in order to return correct role
  getRole() {
    return "Manager";
  }
}

module.exports = Manager;
