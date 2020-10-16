const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");
//const generateMarkdown = require("./utils/generateMarkdown");
const generate = require("./utils/generateMarkdown.js")

const writeFileAsync = util.promisify(fs.writeFile);
// array of questions for user

async function promptUser() {
    try {
        const data = await inquirer.prompt([

            {
                type: "input",
                message: "What is your Github username?",
                name: "username",
                default: "Vincent-Diaz"
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
                choices: ["MIT license", "Apache license 2.0", "Mozilla Public License 2.0"],
                name: "license"
            },
            {
                type: "input",
                message: "Enter your email to be contacted.",
                name: "email"
            },

        ]);
        console.log(data)
        writeFileAsync("ExampleREADME.md", generate(data));
    } catch (err) {
        console.log(err);
        console.log("README generated");
    }
    console.log("README generated");
   
}

promptUser();