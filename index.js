const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");
const axios = require("axios");
const generate = require("./utils/generateMarkdown.js");

const writeFileAsync = util.promisify(fs.writeFile);
// array of questions for user

function promptUser() {
    return inquirer.prompt([

        {
            type: "input",
            message: "What is your Github username?",
            name: "username"
        },
        {
            type: "input",
            message: "What is the title of this project?",
            name: "title"
        },
        {
            type: "input",
            message: "What is the desription of this project?",
            name: "description"
        },
        {
            type: "input",
            message: "Provide instructions for the installation.",
            name: "installation"
        },
        {
            type: "input",
            message: "What will this project be used for?",
            name: "usage"
        },
        {
            type: "input",
            message: "Who contributed to this project?",
            name: "contributors"
        },
        {
            type: "input",
            message: "Provide instructions on how to test project.",
            name: "test"
        },
        {
            type: "list",
            message: "Choose a license for your project.",
            choices: [],
            name: "license"
        },
    ]);
    // console.log(data);
    // generate(data)
}

// function to write README file
function writeToFile(data) {
    fs.writeFile("README.md", data, err => {
        if (err) {
            throw err;
        }
        console.log("README.md file has been generated!")
    });
}

// function to initialize program
// async function init() {
   
// }

// function call to initialize program
init();
