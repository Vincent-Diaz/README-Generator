// function to generate markdown for README
function badge (license) {
  license = license.replace(/\s/g, '');
  return ` 
  
![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)
  `
}

function generateMarkdown(data) {
  return `# ${data.title}

  ${badge(data.license)}

  ## Description:
  ${data.description}

  ## Table of Contents
   * [Installation](#installation)
   * [Usage](#usage)
   * [Contributors](#contributors)
   * [Test](#test)
   * [Questions](#questions)
   * [License](#license)

  ## Installation:
  ${data.installation}

  ## Usage:
  ${data.usage}



  ## Contributors:
  ${data.contributors}

  ## Test:
  ${data.test}

  ## Questions:
  If you have any questions, contact [Vincent-Diaz](https://github.com/${data.username} "Vincent-Diaz") on Github or by email ${data.email}.
  

  ## License:
  ${data.license}
`;

}

module.exports = generateMarkdown;

