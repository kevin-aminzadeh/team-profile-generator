const Employee = require("./Employee");

class Intern extends Employee {
  constructor({ id, name, email, subProp: school }) {
    // Set Inherited super class property values
    super(id, name, email);

    // Set Sub class property values
    this.school = school;
  }

  // Return name of school
  getSchool() {
    return this.school;
  }

  // Override super class getRole() method in order to return correct role
  getRole() {
    return "Intern";
  }
}

module.exports = Intern;
