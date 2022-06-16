const fs = require('fs');
const inquirer = require('inquirer')
const generateREADME = require('./src/README')

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project? (Required):',
            validate: titleInput => {
                if (titleInput) {
                    return true
                }
                else {
                    console.log("Please enter your project's title!")
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please provide a description of your project. (Required):',
            validate: descInput => {
                if (descInput) {
                    return true
                }
                else {
                    console.log("Please enter your project's description!")
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'install_instructions',
            message: 'Please provide instructions for installing your project. (Required):',
            validate: installInsInput => {
                if (installInsInput) {
                    return true
                }
                else {
                    console.log("Please provide instructions for installing your project!")
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'usage_info',
            message: 'Please provide information on how to use your project. (Required):',
            validate: usageInput => {
                if (usageInput) {
                    return true
                }
                else {
                    console.log("Please enter information on how to use your project!")
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'contrib_guide',
            message: 'Please provide instructions on how to contribute to your project. (Required):',
            validate: contribInsInput => {
                if (contribInsInput) {
                    return true
                }
                else {
                    console.log("Please provide contribution instructions!")
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'test_instructions',
            message: 'Please provide instructions on how to test your project. (Required):',
            validate: testInsInput => {
                if (testInsInput) {
                    return true
                }
                else {
                    console.log("Please provide testing instructions!")
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your Github username? (Required):',
            validate: testInsInput => {
                if (testInsInput) {
                    return true
                }
                else {
                    console.log("Please provide your Github username!")
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email? (Required):',
            validate: emailInput => {
                if (emailInput) {
                    return true
                }
                else {
                    console.log("Please provide your email!")
                    return false
                }
            }
        },

    ])
}

promptUser()
    .then(data => {
        readmeText = generateREADME(data)
        fs.writeFile('./dist/README.md')
    })