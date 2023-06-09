const { Circle, Square, Triangle} = require('./shapes');

// Function to return svg file content based on user input
function createSvgContent(text, textColor, shape, fillColor) {
    const shapeObj = createShapeObject(shape);
    shapeObj.setFillColor(fillColor);
    shapeObj.setText(text);
    shapeObj.setTextColor(textColor);
    return `
    <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    ${shapeObj.render()}

    ${shapeObj.renderText()}

    </svg>
    `;
}

// Function to create a shape object based on what shape is passed as argument
function createShapeObject(shape) {
    switch(shape) {
        case 'Circle' :
            return new Circle();
        case 'Square' :
            return new Square();
        case 'Triangle' :
            return new Triangle();   
        default :
            return null;                
    } 
}

module.exports = createSvgContent;
