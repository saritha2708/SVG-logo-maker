const inquirer = require('inquirer');
const { join } = require('path');
const { writeFile } = require('fs/promises');
const createSvgContent = require('./document');

class CLI {
    constructor() {
        this.text = '';
        this.textColor = '';
        this.shape = '';
        this.fillColor = ''; 
    }
    run() {
        return inquirer
        .prompt([
            {
            type: 'input',
            name: 'text',
            message: 'Please enter any three characters to be the text for your logo',
            validate: function(value) {
                if (value.length !== 3) {
                  return 'Text should be 3 characters long';
                }
                return true;
              }
            },
            {
                type: 'input',
                name: 'textColor',
                message: 'Please enter the text color:',
            },
            {
                type: 'list',
                message: 'Choose a shape for your logo:',
                name: 'shape',
                choices: ['Circle', 'Triangle', 'Square'],
            },
            {
                type: 'input',
                name: 'fillColor',
                message: 'Please enter a color to fill your logo: ',
            },
        ])
        .then(({ text, textColor, shape, fillColor }) => {
            this.text = text;
            this.textColor = textColor;
            this.shape = shape;
            this.fillColor = fillColor;
        })
        .then(() => {
            return writeFile(
                join(__dirname, '..', 'examples', 'logo.svg'),
                createSvgContent(this.text, this.textColor, this.shape, this.fillColor)
              );
        })
        .then(() => {
            console.log('Generated logo.svg');
        })
        .catch((err) => {
            console.log(err);
            console.log('Oops. Something went wrong.');
        });
    }
}

module.exports = CLI;
