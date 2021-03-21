// Module Imports
const inquirer = require("inquirer");
const fs = require("fs");
const helpers = require("./utils/helpers");
const DynamicClass = require("./lib/DynamicClass");
const generatePage = require("./src/generatePage");

let employees = [];

// Write generated page template to file
function writeToFile(fileName, data) {
  fs.writeFile(`${__dirname + "/dist/" + fileName}.html`, data, (err) =>
    err
      ? console.log(err)
      : console.log(`Team profile page generated successfully!`)
  );
}

// Display "Add Employee" prompts
async function addEmployeePrompt(role, subPropMessage) {
  const employeeData = await inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: `Enter the ${helpers.capitalize(role)}'s name:`,
      },
      {
        type: "input",
        name: "id",
        message: `Enter the ${helpers.capitalize(role)}'s employee ID:`,
      },
      {
        type: "input",
        name: "email",
        message: `Enter the ${helpers.capitalize(role)}'s email address:`,
      },
      {
        type: "input",
        name: `subProp`,
        message: `Enter the ${helpers.capitalize(role)}'s ${helpers.capitalize(
          subPropMessage
        )}:`,
      },
    ])
    .then((res) => {
      return res;
    });
  return employeeData;
}

// Process "Add Employee" prompt responses
async function addEmployee(role) {
  // Initialize a variable to store the sub-class property name in
  let subPropMessage;

  // Determine the correct sub-class property name
  switch (role) {
    case "manager":
      subPropMessage = `office Number`;
      break;
    case "engineer":
      subPropMessage = `GitHub Username`;
      break;
    case "intern":
      subPropMessage = `school`;
      break;
  }

  // Initiate AddEmployeePrompt function and store the resulting data
  const employeeData = await addEmployeePrompt(role, subPropMessage);

  // Use DynamicClass to instantiate the correct employee sub class and store the instance
  const employee = new DynamicClass(helpers.capitalize(role), employeeData);

  // Push employee object to employees array
  employees.push(employee);

  console.log(`${helpers.capitalize(role)} successfully added to the team.`);
  showMenu();
}

// Show Main Menu
function showMenu() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "menuOption",
        message: "What would you like to do?",
        choices: [
          { name: "Add an Engineer", value: "engineer" },
          { name: "Add an Intern", value: "intern" },
          { name: "Finish Building Team", value: "" },
        ],
      },
    ])
    .then((res) => {
      if (!res.menuOption) {
        console.log("Generating team profile template...");
        const pageData = generatePage(employees);

        console.log(`Generating team profile web page... `);
        writeToFile("index", pageData);
      } else {
        addEmployee(res.menuOption);
      }
    });
}

// Initialize the app
async function init() {
  addEmployee("manager");
}

init();
