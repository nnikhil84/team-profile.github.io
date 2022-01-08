const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require("./lib/engineer");
const Manager = require("./lib/manager");
const Intern = require("./lib/intern");

let finalTeamArray = [];

function start() {
  inquirer
    .prompt([
      {
        message: "Please enter your team name:",
        name: "teamname",
      },
    ])
    .then((data) => {
      const teamName = data.teamname;
      finalTeamArray.push(teamName);
      addManager();
    });
}

function addManager() {
  inquirer
    .prompt([
      {
        message: "What is your team manager's name? (Required)",
        name: "name",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            return "Please enter your manager's name";
          }
        },
      },
      {
        message: "What is your team manager's employee id?",
        name: "id",
        validate: (empId) => {
          const valid = /^[0-9]+$/.test(empId);

          if (valid) {
            return true;
          } else {
            return "Please enter a number";
          }
        },
      },
      {
        message: "What is your team manager's email address? (Required)",
        name: "email",
        validate: (email) => {
          const valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
            email
          );

          if (valid) {
            return true;
          } else {
            return "Please enter a valid email address";
          }
        },
      },

      {
        type: "number",
        message: "What is your team manager's office number?",
        name: "officeNumber",
      },
    ])

    .then((data) => {
      const name = data.name;
      const id = data.id;
      const email = data.email;
      const officeNumber = data.officeNumber;
      const teamMember = new Manager(name, id, email, officeNumber);
      finalTeamArray.push(teamMember);
      addTeamMembers();
    });
}

function addTeamMembers() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "Would you like to add more team members?",
        choices: [
          "Yes, add an engineer",
          "Yes, add an intern",
          "No, my team is complete",
        ],
        name: "addMemberData",
      },
    ])

    .then((data) => {
      switch (data.addMemberData) {
        case "Yes, add an engineer":
          addEngineer();
          break;

        case "Yes, add an intern":
          addIntern();
          break;
        case "No, my team is complete":
          compileTeam();
          break;
      }
    });
}

function addEngineer() {
  inquirer
    .prompt([
      {
        message: "What is this engineer's name? (Required)",
        name: "name",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            return "Please enter the engineer's name";
          }
        },
      },
      {
        message: "What is your engineer's employee id?",
        name: "id",
        validate: (empId) => {
          const valid = /^[0-9]+$/.test(empId);

          if (valid) {
            return true;
          } else {
            return "Please enter a number";
          }
        },
      },
      {
        message: "What is this engineer's email address? (Required)",
        name: "email",
        validate: (email) => {
          const valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
            email
          );

          if (valid) {
            return true;
          } else {
            return "Please enter a valid email address";
          }
        },
      },
      {
        message: "What is this engineer's Github profile?",
        name: "github",
      },
    ])

    .then((data) => {
      const name = data.name;
      // const id = finalTeamArray.length;
      const id = data.id;
      const email = data.email;
      const github = data.github;
      const teamMember = new Engineer(name, id, email, github);
      finalTeamArray.push(teamMember);
      addTeamMembers();
    });
}

function addIntern() {
  inquirer
    .prompt([
      {
        message: "What is this intern's name? (Required)",
        name: "name",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            return "Please enter the intern's name";
          }
        },
      },
      {
        message: "What is your intern's employee id?",
        name: "id",
        validate: (empId) => {
          const valid = /^[0-9]+$/.test(empId);

          if (valid) {
            return true;
          } else {
            return "Please enter a number";
          }
        },
      },
      {
        message: "What is this intern's email address? (Required)",
        name: "email",
        validate: (email) => {
          const valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
            email
          );

          if (valid) {
            return true;
          } else {
            return "Please enter a valid email address";
          }
        },
      },
      {
        message: "What is this intern's school?",
        name: "school",
      },
    ])

    .then((data) => {
      const name = data.name;
      const id = data.id;
      const email = data.email;
      const school = data.school;
      const teamMember = new Intern(name, id, email, school);
      finalTeamArray.push(teamMember);
      addTeamMembers();
    });
}

function generateHtml(finalTeamArray) {
  return `./dist/${finalTeamArray[0].toLowerCase().split(" ").join("-")}.html`;
}

function generateTitle(finalTeamArray) {
  return finalTeamArray[0].replace(/\w\S*/g, (txt) => {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

function compileTeam() {
  console.log(
    "Wonderful! You have now successfully created your team's profile"
  );

  const htmlArray = [];
  const htmlBeginning = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0"/>
    <title>${generateTitle(
      finalTeamArray
    )} My Team Project - using JEST for test, inquirer prompts and fs </title>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
  </head>
  <body>
    <nav class="light-blue lighten-1" role="navigation">
      <div class="nav-wrapper container">
        <a id="logo-container" href="#" class="brand-logo"><i class="material-icons large">group</i></a>
        <ul class="right hide-on-med-and-down">
          <li><a href="#">My Team</a></li>
        </ul>
        <ul id="nav-mobile" class="sidenav">
          <li><a href="#">My Team</a></li>
        </ul>
        <a href="#" data-target="nav-mobile" class="sidenav-trigger"><i class="material-icons">menu</i></a>
      </div>
    </nav>

    <div class="section no-pad-bot" id="index-banner">
      <div class="container">
        <br><br>
        <h1 class="header center orange-text">Team Profile Information - ${
          finalTeamArray[0]
        }</h1>
        <div class="row center">
          <h5 class="header col s12 light"> A quick way to look at all my team members</h5>
        </div>
        <br><br>
      </div>
    </div>


    <div class="container">
      <div class="section">
        <div class="row">`;

  htmlArray.push(htmlBeginning);

  for (let i = 1; i < finalTeamArray.length; i++) {
    let object = `
        <div class="col s12 m4">
              <div class="card-panel">
                <div class="nav-wrapper light-blue lighten-1">
                <h4>${finalTeamArray[i].name}</h4>
                <h5>${finalTeamArray[i].title}</h5>
              </div>
              <p class="grey-text">ID: ${finalTeamArray[i].id}</p>
              <p class="grey-text">Email: <a href="mailto:${finalTeamArray[i].email}">${finalTeamArray[i].email}</a></p>
            `;
    if (finalTeamArray[i].officeNumber) {
      object += `
              <p class="grey-text">Office Number: ${finalTeamArray[i].officeNumber}</p>
              `;
    }

    if (finalTeamArray[i].github) {
      object += `
              <p class="grey-text">GitHub: <a href="https://github.com/${finalTeamArray[i].github}">${finalTeamArray[i].github}</a></p>
              `;
    }

    if (finalTeamArray[i].school) {
      object += `
              <p class="grey-text"> Education: ${finalTeamArray[i].school}</p>
              `;
    }

    object += `
            </div>
            </div>
        `;

    htmlArray.push(object);
  }
  const htmlEnd = `
    </div>

    </div>
    <br><br>
  </div>

  <footer class="page-footer light-blue">
    <div class="container">
      <div class="row">
        <div class="col l6 s12">
          <h5 class="white-text">${finalTeamArray[0]}</h5>
          <p class="grey-text text-lighten-4">We are a bunch of coders working on some awesome projects!</p>
        </div>
      </div>
    </div>
    <div class="footer-copyright">
      <div class="container">
      Made with ❤️ by Nikhil Nikhil
      </div>
    </div>
  </footer>
 
  <script src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
</body>
</html>
`;

  htmlArray.push(htmlEnd);

  fs.writeFile(
    generateHtml(finalTeamArray),
    htmlArray.join(""),
    function (err) {
      if (err) {
        throw err;
      }
    }
  );
}

start();
