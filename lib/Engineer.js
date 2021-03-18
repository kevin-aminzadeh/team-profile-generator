import Employee from "./Employee";

class Engineer extends Employee {
  constructor(github) {
    // Super class properties
    this.id = super.id;
    this.name = super.name;
    this.email = super.email;
    // Sub class properties
    this.github = github;
  }

  getGithub() {}

  getRole() {}
}

module.exports = Engineer;
