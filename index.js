const fs = require('fs');
const inquirer = require('inquirer');

const questions =  [
  {type: 'input', name: 'title', message: `What is the project's title?`,},
  {type: 'input', name: 'description', message: 'Provide a short description', },
  {type: 'input', name: 'install',message: 'Enter your Installation tips', },
  { type: 'input', name: 'usage', message: 'Enter your Usage information',},
  { type: 'input', name: 'credits', message: 'Enter your Credits',},
  { type: 'input', name: 'license', message: 'Provide a license',},
  { type: 'input',name: 'contribute', message: 'List how you can contribute' ,},
  { type: 'input',name: 'githubName', message: 'Enter your GitHub Username' ,},
  { type: 'input',name: 'githubLink', message: 'Enter the link to your GitHub' ,},
  { type: 'input',name: 'email', message: 'Enter your email' ,},]

inquirer
.prompt(questions)
.then(answers => {
  const formattedAnswers = `
# Project Title: ${answers.title}

## Description
${answers.description}

## Table of Contents

## Installation
${answers.install}

## Usage
${answers.usage}

## License
${answers.license}

## Credits
${answers.credits} 

## Contribute
${answers.contribute}

## Questions
For further questions you can visit ${answers.githubName} on GitHub at ${answers.githubLink}.
Or email me at ${answers.email}
`
;

  fs.writeFile('readme.md', formattedAnswers, err => {
    if (err) {
      console.error(err);
      return;
    }
    console.log('README file created successfully!');
  });
});
