const fs = require('fs')
const inquirer = require('inquirer')

inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?',
        },
        {
            type: 'input',
            name: 'location',
            message: 'Where are you located?',
        },
        {
            type: 'input',
            name: 'bio',
            message: 'Enter a bio about you',
        },
        {
            type: 'input',
            name: 'linkdin',
            message: 'Enter your Linkdin profile link',
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your Github profile link',
        },
    ])





    .then((data) => {
        const filename = `${data.name.toLowerCase().split(' ').join('')}.html`;

        const { name, location, bio, linkdin, github } = data
        const html = ` <!DOCTYPE html>
        <html lang="en">
        
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet"
                integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous">
            <link rel="stylesheet" href="./style.css">
            <title>Document</title>
        </head>
        
        
        <body>
        
       ${name}
        ${location}
        ${bio}
        ${linkdin}
        ${github}
        
        
        </body>
        
        
        </html>`

        console.log(name);
        console.log(location);
        console.log(bio);
        console.log(linkdin);
        console.log(github);

        fs.writeFile(filename, html, (err) =>
            err ? console.log(err) : console.log('Success!')
        );
    });


