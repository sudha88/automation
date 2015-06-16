# To run script using protractor please follow these steps

Use npm to install Protractor globally with:
npm install -g protractor

Install an instance of selenium server
webdriver-manager update

Start selenium server
webdriver-manager start


In your project directory install node to generate html report
using this command
-npm install protractor-html-screenshot-reporter --save-dev


To run scripts type this on command line.You need to be logged in project directory

protractor config/conf.js


Please find additional documentation to protractor on hwo to run scripts here
http://angular.github.io/protractor/#/


