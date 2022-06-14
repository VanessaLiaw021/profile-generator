const inquirer = require("inquirer");
const generatePage = require("./generateMarkup");

//Array of objects Question to ask user 
const promptUser = () => {
    const questions = [
        {
            type: "input",
            name: "name",
            message: "What is your name?"
        }, 
        {
            type: "input", 
            name: "location",
            message: "Where are you located?"
        },
        {
            type: "input",
            name: "bio",
            message: "Describe a little about yourself?"
        },
        {
            type: "input",
            name: "linkedin",
            message: "What is your LinkedIn URL?"
        },
        {
            type: "input",
            name: "github",
            message: "What is your GitHub URL?"
        },
        {
            type: "rawlist",
            name: "license",
            message: "What license was this created with?",
            choices: ["MPL", "GPL", "Apache", "MIT", "CC", "BSD"]
        }
    ];

    //Prompt user, then generate an html page based on user input
    inquirer.prompt(questions).then(response => {
        generatePage.generateMarkup(response);
    });
}

promptUser();