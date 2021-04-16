const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const Employee = require("./lib/Employee");

let managerArray = [];
let engineerArray = [];
let internArray = [];

function addTeam() {
    const promptArray = [{
        type: "rawlist",
        message: "Would you like to add another employee?",
        choices: ["Manager", "Engineer", "Intern", "No, team is complete!"],
        name: "title"
    }];

    return inquirer.prompt(promptArray).then(data => {
        if (data.title === "Manager") {
            runInquirerManager();
        } else if (data.title === "Engineer") {
            runInquirerEngineer();
        } else if (data.title === "Intern") {
            runInquirerIntern();
        } else {
            createHTML();
        };
    });
};

function runInquirerManager() {
    const promptArray = [{
        type: "input",
        message: "What is the Manager's name?",
        name: "managerName"
    },
    {
        type: "input",
        message: "What is the Manager's ID?",
        name: "managerId"
    },
    {
        type: "input",
        message: "What is the Manager's email?",
        name: "managerEmail"
    },
    {
        type: "input",
        message: "What is the Manager's office number?",
        name: "officeNumber"
    }];

    return inquirer.prompt(promptArray).then(data => {
        const manager = new Manager(
            data.managerName, data.managerId, data.managerEmail, data.officeNumber
        )
        managerArray.push(manager)
        console.log(managerArray)
        addTeam();
    })
}

runInquirerManager();

function runInquirerEngineer() {
    const promptArray = [{
        type: "input",
        message: "What is the Engineer's name?",
        name: "engineerName"
    },
    {
        type: "input",
        message: "What is the Engineer's ID?",
        name: "engineerId"
    },
    {
        type: "input",
        message: "What is the Engineer's email?",
        name: "engineerEmail"
    },
    {
        type: "input",
        message: "What is the Engineer's GitHub?",
        name: "engineerGithub"
    }];
    return inquirer.prompt(promptArray).then(data => {
        const engineer = new Engineer(
            data.engineerName, data.engineerId, data.engineerEmail, data.engineerGithub
        )
        engineerArray.push(engineer)
        console.log(engineerArray)
        addTeam();
    })
}

function runInquirerIntern() {
    const promptArray = [
        {
            type: "input",
            message: "What is the Intern's name?",
            name: "internName"
        },
        {
            type: "input",
            message: "What is the Intern's ID?",
            name: "internId"
        },
        {
            type: "input",
            message: "What is the Intern's email?",
            name: "internEmail"
        },
        {
            type: "input",
            message: "What school did the Intern attend?",
            name: "internSchool"
        }];

    return inquirer.prompt(promptArray).then(data => {
        const intern = new Intern(
            data.internName, data.internId, data.internEmail, data.internSchool
        )
        internArray.push(intern)
        console.log(internArray)
        addTeam();
    })
}

function createManagerCard() {
    let html = "";
    for (let i = 0; i < managerArray.length; i++) {
        html += `
        <div class="card bg-dark justify-content-center align-items-center" style="width: 18rem;">
            <div class="col card-header">
                <h4>${managerArray[i].name}</h4>
            </div>
            <div class="col card-header">
                <h4><i class="fas fa-mug-hot"></i>${managerArray[i].title}</h4>
            </div>
            <ul class="list-group list-group-flush text">
                <li class="list-group-item">ID:${managerArray[i].id}</li>
                <li class="list-group-item">Email:${managerArray[i].email}</li>
                <li class="list-group-item">Office Number: ${managerArray[i].officeNumber}</li>
            </ul>
        </div>`
    }
    return html;
}

function createEngineerCard() {
    let html = ""
    for (let i = 0; i < engineerArray.length; i++) {
        html += `
        <div class="card bg-dark justify-content-center align-items-center" style="width: 18rem;">
            <div class="col card-header">
                <h4>${engineerArray[i].name}</h4>
            </div>
            <div class="col card-header">
                <h4><i class="fas fa-glasses"></i>${engineerArray[i].title}</h4>
            </div>
            <ul class="list-group list-group-flush text">
                <li class="list-group-item">ID:${engineerArray[i].id}</li>
                <li class="list-group-item">Email:${engineerArray[i].email}</li>
                <li class="list-group-item">GitHub: ${engineerArray[i].github}</li>
            </ul>
        </div>`
    }
    return html;
}

function createInternCard() {
    let html = ""
    for (let i = 0; i < internArray.length; i++) {
        html += `
        <div class="card bg-dark justify-content-center align-items-center" style="width: 18rem;">
            <div class="col card-header">
                <h4>${internArray[i].name}</h4>
            </div>
            <div class="col card-header">
                <h4><i class="fas fa-user-graduate"></i>${internArray[i].title}</h4>
            </div>
            <ul class="list-group list-group-flush text">
                <li class="list-group-item">ID:${internArray[i].id}</li>
                <li class="list-group-item">Email:${internArray[i].email}</li>
                <li class="list-group-item">School: ${internArray[i].school}</li>
            </ul>
        </div>`
    }
    return html;
}

function createHTML() {
    fs.writeFile("index.html", `    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
            integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
        <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"/>
        <link rel="preconnect" href="https://fonts.gstatic.com">
        <title>Team Profile Generator</title>

        <style>
            .row {
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;
                margin-top: 20px;
                margin-bottom: 20px;
            }

            .card {
                padding: 20px;
                border-radius: 6px;
                background-color: white;
                color: lightpink;
                margin: 20px;
            }   

            .text {
                padding: 20px;
                border-radius: 6px;
                background-color: white;
                color: black;
                margin: 20px;
            }

            .col {
                flex: 1;
                text-align: center;
            }

            i {
                margin-right: 10px;
            }
        </style>
    </head>
    <body>
        <nav class="navbar navbar-dark bg-dark justify-content-center align-items-center">
            <span class="navbar-brand mb-0 h1">
                <h1>My Team</h1>
            </span>
        </nav>
        <div class="row">
            ${createManagerCard()}
            ${createEngineerCard()}
            ${createInternCard()}
        </div>
    </body>
    </html>`, err => {
        if (err) throw err;
    })
}
// function getCardHtml(cardInfo) {
//     let html = "<div>";
//     return html;
// }