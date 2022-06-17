module.exports = READMEdata => {
    const {badge, title, description, install_instructions, usage_info, contrib_guide, test_instructions, license, github, email} = READMEdata;


    return`${badge}
    
# ${title}

## Description
${description}

## Table of Contents 
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Test](#tests)
- [Questions](#questions)

## Installation
${install_instructions}

## Usage
${usage_info}

## License
This project holds the ${license} license.

## Contribution
${contrib_guide}

## Testing
${test_instructions}

## Questions
- Github: ${github} - https://github.com/${github}
- If you would like to ask further questions that are not answered on my Github or this README, you can reach me through email at ${email}
    `;
}