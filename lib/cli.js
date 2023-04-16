const inquirer = require('inquirer');
const { join } = require('path');
const { writeFile } = require('fs/promises');
const createSvgContent = require('./document');

const setOfColors = new Set(['black', 'silver', 'white', 'gray','maroon', 'red', 'purple',
    'fuchsia', 'green', 'lime', 'olive', 'yellow', 'navy', 'blue', 'teal', 'aqua', 'beige', 
    'brown', 'coral', 'cyan', 'gold', 'indigo', 'pink', 'orange', 'plum', 'violet','grey']);

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
            message: 'Please enter any three characters to be the text for your logo:',
            validate: function(value) {
                if (value.length !== 3) {
                  return 'Text should be 3 characters long!';
                }
                return true;
              }
            },
            {
                type: 'input',
                name: 'textColor',
                message: 'Please enter enter a color keyword (OR a hexadecimal number) for the text color:',
                validate: function(value) {
                    const regex = /^#[0-9A-Fa-f]{6}$/i; // regular expression to match hex color format
                    if (setOfColors.has(value.toLowerCase().trim()) || regex.test(value)) {
                      return true;
                    }
                    return 'Please enter a valid CSS color name or hex code';
                }
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
                message: 'Please enter a color keyword (OR a hexadecimal number) to fill your logo: ',
            },
        ])
        .then(({ text, textColor, shape, fillColor }) => {
            this.text = text;
            this.textColor = textColor.toLowerCase().trim();
            this.shape = shape;
            this.fillColor = fillColor.toLowerCase().trim();
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
