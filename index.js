//required packages
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

//array of questions for user input
const questions = [
    {
        type:'input',
        name:'title',
        message: 'What is the title of your project?'

    },
    {
        type:'input',
        name:'description',
        message: 'Please provide a brief description of your project:'

    },
    {
        type:'input',
        name:'installation',
        message: 'Please provide instruction for installing your project'

    },
    {
        type:'input',
        name:'usage',
        message: 'Please provide instructios for using your project:'

    },
    {
        type:'list',
        name:'license',
        message: 'What is the license for your project?',
        choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3', 'ISC', 'None']

    },
    {
        type:'input',
        name:'contributing',
        message: 'Please provide instruction for testing your project:'

    },
    {
        type:'input',
        name:'Contact',
        message: 'What is your Github username?',
        message: 'What is your email address?'

    },
];

//function to write README file
function writeToFile(fileName, data){
    fs.writeFile(fileName, data, err => {
        if(err){
            console.log(err);
            return;
        }
        console.log('Your README file has been generated!');
    });
}

//function to initialize app
function init(){
    inquirer 
    .prompt(questions)
    .thne(data => {
        const markdown = generateMarkdown(data);
        writeToFile('README.md', markdown);
    })
    .catch(error => {
        console.log(error);
    });
}

init();