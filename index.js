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
        name:'tableOfContents',
        message: 'Please provide a table of contents for your project:'
    },
    {
        type:'input',
        name:'installation',
        message: 'Please provide instructions for installing your project'
    },
    {
        type:'input',
        name:'usage',
        message: 'Please provide instructions for using your project:'
    },
    {
        type:'input',
        name:'contributing',
        message: 'Please provide guidelines for how others can contribute to your project:'
    },  
    {
        type:'list',
        name:'license',
        message: 'What is the license for your project?',
        choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3', 'ISC', 'None']
    },
    {
        type:'input',
        name:'tests',
        message: 'Please provide instructions for testing your project:'
    },
    {
        type:'input',
        name:'email',
        message: 'Enter your email address:'
    },
    {
        type:'input',
        name:'username',
        message: 'Enter your Github username:'
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
    .then(data => {
        const markdown = generateMarkdown(data);
        writeToFile('README.md', markdown);
    })
    .catch(error => {
        console.log(error);
    });
}

init();