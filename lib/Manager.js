import Employee from "./employee";

class Manager extends Employee {
  constructor(officeNumber) {
    // Super class properties
    this.id = super.id;
    this.name = super.name;
    this.email = super.email;
    // Sub class properties
    this.officeNumber = officeNumber;
  }

  getRole() {}
}

module.exports = Manager;
