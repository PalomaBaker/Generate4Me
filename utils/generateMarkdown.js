//creating object to store license info 
const licenseInfo = {
    'MIT': {
      badge: 'MIT-yellow',
      link: 'MIT'
    },
    'Apache 2.0': {
      badge: 'Apache%202.0-blue',
      link: 'Apache-2.0'
    },
    'GPL 3.0': {
      badge: 'GPLv3-blue',
      link: 'GPL-3.0'
    },
    'BSD 3': {
      badge: 'BSD--3--Clause-blue',
      link: 'BSD-3-Clause'
    },
    'ISC': {
      badge: 'ISC-blue',
      link: 'ISC'
    }
  };
  //function that returns a license badge based on which license is passed in
  function renderLicenseBadge(license) {
    if (!license) {
      return '';
    }
  
    const licenseInfoItem = licenseInfo[license];
    return licenseInfoItem ? licenseInfoItem.badge : '';
  }
  
  //function that returns a license link
  function renderLicenseLink(license) {
    if (!license) {
      return '';
    }
  
    const licenseInfoItem = licenseInfo[license];
    return licenseInfoItem ? licenseInfoItem.link : '';
  }

  //returns the license section of README
  function renderLicenseSection(license) {
    if (!license) {
      return '';
    }
  
    const licenseInfoItem = licenseInfo[license];
    return `
      This project is licensed under the ${license} license. Click [here](https://opensource.org/licenses/${licenseInfoItem.link}) for more information.
    `;
  }
  //function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}
  
  ${renderLicenseBadge(data.license)}
  
  ## Description
  
  ${data.description}
  
  ## Table of Contents
  
  ${data.tableOfContents}
  
  ## Installation
  
  ${data.installation}
  
  ## Usage
  
  ${data.usage}
  
  ${renderLicenseSection(data.license)}
  ${renderLicenseLink(data.license)}
  
  ## Contributing
  
  ${data.contributing}
  
  ## Tests
  
  ${data.tests}
  
  
  ## Questions
  
  If you have any questions about the repo, open an issue or contact me directly at ${data.email}. You can find more of my work at [${data.username}](https://github.com/${data.username}/).
  `;
  };
  
  module.exports = generateMarkdown;