const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(id, name, email, github) {
    // Set Inherited super class property values
    super(id, name, email);

    // Set Sub class property values
    this.github = github;
  }

  // Return GitHub username
  getGithub() {
    return this.github;
  }

  // Override super class getRole() method in order to return correct role
  getRole() {
    return "Engineer";
  }
}

module.exports = Engineer;
