// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description:
  ${data.description}

  ## Table of Contents
  *[Installation](#installation)
  *[Usage](#usage)
  *[Contributors](#Contributors)
  *[Test](#test)
  *[Questions](#questions)
  *[License](#license)
  

`;
}

module.exports = {
  generateMarkdown
}
