import Employee from "./Employee";

class Intern extends Employee {
  constructor(school) {
    // Super class properties
    this.id = super.id;
    this.name = super.name;
    this.email = super.email;
    // Sub class properties
    this.school = school;
  }

  getSchool() {}

  getRole() {}
}

module.exports = Intern;
