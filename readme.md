# CMS Migrations

This repository is used to document and share modules and code snippets used by the HubSpot Migrations team when migrating customers' sites from their current CMS into the HubSpot CMS.

## Code Compatibility Guidelines

During a website migration we work to match the original site's code as closely as possible in HubSpot by using the Google Chrome Developer Tools to see what CSS/JavaScript the original site is using and using similar CSS/JavaScript on the HubSpot version of the site. When we need to write new code from scratch for a specific feature that might differ from the original site, we use code that is supported in the major modern web browsers (Edge, Firefox, Chrome, Safari, Opera, iOS Safari, Android Browser) in addition to the most recent version of Internet Explorer (IE11). This includes:

* Using ECMAScript 5 for JavaScript
* Avoiding CSS properties that are completely unsupported in IE11

## Folder and File Structure of the Repository

There are three main folders in the repository which are: Assets, Modules, and Snippets. The Assets folder is used to store any images used in readme.md files throughout the repository. The Modules folder is used to store the code for all modules in the repository. The Snippets folder is used to store the code for all code snippets in the repository.

The code for each individual code snippet and module should be contained within a folder in the parent folder. The folder name for the code snippet/module should use camel case (e.g. camelCase) and should describe what the code snippet/module is in the folder title. Within that folder, you should add all relevant files for the code snippet/module in addition to a readme.md file that describes how to use the code snippet/module.

## Contributing to the Repository

If you would like to contribute to the CMS Migrations repository, you can do so in two ways:

### Reporting Issues or Suggesting Improvements
The first thing you can do to contribute to the CMS Migrations repository is to report issues in the repository. You can do this to either report an issue/bug in the code or to suggest an improvement to a module or code snippet. You can create an issue in GitHub by following along with the directions here: https://help.github.com/en/articles/creating-an-issue.

### Contributing Code
The second thing you can do to contribute to the CMS Migrations repository is to submit new code snippets/modules or submit fixes/improvements on existing code in the repository by creating a pull request. You can create a pull request in GitHub by following along with the directions here: https://help.github.com/en/articles/creating-a-pull-request. A member of the HubSpot Migrations team will review your pull request and determine whether or not to merge the pull request to the base branch.

## Thank You

Thank you to everyone who participates in helping us maintain high-quality standards with HubSpot Migrations!
