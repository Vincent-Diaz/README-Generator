// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description:
  ${data.description}

  ## Table of Contents
  *[Installation](#installation)
  *[Usage](#usage)
  *[Contributors](#contributors)
  *[Test](#test)
  *[Questions](#questions)
  *[License](#license)

  ## Installation:
  ${data.installation}

  ## Usage:
  ${data.usage}

  ## Contributors
  ${data.contributors}

  ## Test:
  ${data.test}

  ## Questions:
  If you have any questions, contact ${data.username} on Github.

  ## License:
  ${data.license}
`;
}

module.exports = generateMarkdown;

