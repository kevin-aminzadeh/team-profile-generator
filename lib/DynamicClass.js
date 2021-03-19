const Engineer = require("./Engineer");
const Intern = require("./Intern");
const Manager = require("./Manager");

// Map employee sub-classes to an object
const classes = {
  Engineer,
  Intern,
  Manager,
};

class DynamicClass {
  constructor(className, args) {
    // Return an instance of the appropriate employee class based on the value of the "className" parameter
    //

    return new classes[className](args);
  }
}

module.exports = DynamicClass;
