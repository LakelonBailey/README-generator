const fs = require('fs');
const inquirer = require('inquirer')
const generateREADME = require('./src/README')

// Matches a chosen license to its badge link. 
const licenseBadges = {
    'ISC': '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)',
    'MIT': '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    'APACHE 2.0': '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
    'GPL v3': '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
    'BSD 3-Clause': '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)',
    'None': ''
}

// Gathers all necessary data from the command line. 
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
            type: 'list',
            name: 'license',
            message: 'Please select your licenses from the following choices:',
            choices: ['ISC','MIT', 'APACHE 2.0', 'GPL v3', 'BSD 3-Clause', 'None']
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
// Initiates the command line prompts, then sends the data to the imported generateREADME module

promptUser()
    .then(data => {
        data.badge = licenseBadges[data.license]
        const readmeText = generateREADME(data)
        fs.writeFile('./dist/README.md', readmeText, err => {
            if (err) throw new Error(err)
        })
    })