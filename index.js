const fs = require('fs');
const inquirer = require('inquirer');


questions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?',
    },
    {
        type: 'input',
        name: 'location',
        message: 'Where are you from?',
    },
    {
        type: 'input',
        name: 'bio',
        message: 'Tell me about yourself.', 
    },
    {
        type: 'input',
        name: 'linkedIn',
        message: 'What is your LinkedIn URL?',
    },
    {
        type: 'input',
        name: 'gitHub',
        message: 'What is your GitHub URL?',
    }
]

inquirer.prompt(questions).then((answers) => {
    const html = generateHTML(answers);
    fs.writeFile('index.html', html, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    })
});

function generateHTML(answers) {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Portfolio Generator</title>
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <h1 class="name">${answers.name}</h1>
        <h1 class="location">${answers.location}</h1>
        <h1 class="bio">${answers.bio}</h1>
        <h1 class="linked-in">${answers.linkedIn}</h1>
        <h1 class="github-url">${answers.gitHub}</h1>
    </body>
    </html>`
 }