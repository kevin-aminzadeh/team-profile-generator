# Team Profile Generator ![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

<p align="center">
  <img src="./assets/demo.gif" alt="Team Profile Generator Demo">
</p>
<p align="center">

  <p align="center">
    <br />
    <a href="https://youtu.be/sM8Wofb2D-g">Watch Demo Video</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#overview">Overview</a>
      <ul>
        <li><a href="#technologies-used">Technologies Used</a></li>
        <li><a href="#acceptance-criteria">Acceptance Criteria</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#future-improvements">Future Improvements</a></li>
    <li><a href="#license">License</a></li>
  </ol>
</details>
<br>

## Overview

This Node.js based CLI application takes in information about employees on a software engineering team and uses this information to generate a HTML page which displays summaries for each team member. The purpose behind the development of this project was to showcase an understanding of test driven development and Object Oriented Programming concepts, while also reenforce existing knowledge of the Node.js runtime environment.

### Technologies Used

Team Profile Generator uses the following packages:

- [Node.js](https://nodejs.org/en/)
- [Inquirer.js](https://github.com/SBoudrias/Inquirer.js#readme)
- [Jest](https://jestjs.io/)

### Acceptance Criteria

```
GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated
```

## Getting Started

To get a local copy of this project up and running follow these simple steps.

### Prerequisites

First you must install [Node.js](https://nodejs.org/en/) and [NPM](https://www.npmjs.com/get-npm) if you haven't done so already. Once this is done, follow the installation instructions below to run the application locally.

### Installation

1. Clone the repository.
   ```sh
   git clone https://github.com/kevin-aminzadeh/team-profile-generator
   ```
2. Navigate to the repository directory and run the following command to install the necessary NPM packages.
   ```sh
   npm install
   ```
3. Run the app start script.
   ```sh
   npm start
   ```

## Future Improvements

Due to the relative simplicity of this project, there are plenty of available avenues for improvement.

Some noteworthy improvements which could be made include:

- Implementing input an input validation mechanism
- Providing a more text editor-esque input for sections where a large text input is expected. This would also allow the user to include paragraph formatting naturally.**\***
- Implementing multiple HTML templates with varying styles for the user to choose from.

**\*** The implementation of a more natural "_text editor-esque_" input prompt for larger sections was attempted using Inquirer's `{type: 'editor'}` inputs. However, this input type presented strange, inconsistent and unexpected behaviors, and as such was decided against in the end.

## License

This project is licensed under the terms of the [MIT license](https://opensource.org/licenses/MIT).
