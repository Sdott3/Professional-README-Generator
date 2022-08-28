// TODO: Include packages needed for this application
const fs = require('inquirer');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    // Title of project
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of the project? (Required)',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter a title of your project!');
                return false;
            }
        }
    },
    // Project Description
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a description of the project (Required)',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('Please enter a project description!');
                return false;
            }
        }
    },
    // Installation Instructions
    {
        type: 'input',
        name: 'installation',
        message: 'How is your project installed? (Required)',
        validate: instillationInput => {
            if (instillationInput) {
                return true;
            } else {
                console.log('Please provide installation info!');
                return false;
            }
        }
    },
    // Usage Information 
    {
        type: 'input',
        name: 'usage',
        message: 'How do you use this project? (Required)',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('Please provide information on how the project is used!');
                return false;
            }
        }
    },
    //Contribution Guidelines
    {
        type: 'input',
        name: 'contribution',
        message: 'How can contributions be added to this project (Required)',
        validate: contributionInput => {
            if (contributionInput) {
                return true;
            } else {
                console.log('Please provide information on contributions added to this project is used!');
                return false;
            }
        }
    },
    // Test Instructions
    {
        type: 'input',
        name: 'test', 
        message: 'What should be run to run tests?',
        validate: testInput => {
            if (testInput) {
                return true;
            } else {
                console.log('Please provide information on testing your project!');
                return false;
        }
    },
    // License Options
    {
        type: 'checkbox',
        name: 'license',
        message: 'What kind of license does your project have?',
        choices: ['Apache', 'MIT', 'Mozilla-Public', 'GNU-General-Public', 'Common-Development-and Distribution', 'None'],
        validate: licenseInput => {
            if (licenseInput) {
                return true;
            } else {
                console.log('Please choose a license!');
                return false; 
        }
    },
        //Github Username
    {
        type: 'input',
        name: 'github',
        message: 'Please enter your Github username! (Required)',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('Please provide your Github username!');
                return false;
            }
        }
    },
    // Email Address
    {
        type: 'input',
        name: 'email',
        message: 'Enter you email address (Required)',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please provide your email address!');
                return false;
            }
        }
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeToFile(fileName, data, (err) => {
        if (err)
            throw err;
        console.log('Information transferred to README!')
    });
}; 

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(userInput){
        console.log(userInput)
        writeToFile("README.md", generateMarkdown(userInput));
    });
};

// Function call to initialize app
init();
