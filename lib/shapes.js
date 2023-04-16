// Creating parent class for different shapes
class Shapes {
    
    setTextColor(color) {
        this.textColor = color;
    }
    setText(text) {
        this.text = text;
    } 
    setFillColor(color) {
        this.fillColor = color;
    }
    renderText() {
        return `<text x="150" y="150" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`
    }
    render() {

    }

}

// Circle class inheriting from Shapes
class Circle extends Shapes {
    renderText() {
        return `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`
    }
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.fillColor}" />`;
    }
}

// Square class inheriting from Shapes
class Square extends Shapes {
   
    render() {
        return `<polygon points="90,75 210,75 210,195 90,195" fill="${this.fillColor}" />`;

    }
}

// Triangle class inheriting from Shapes
class Triangle extends Shapes {
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.fillColor}" />`;

    }

}

module.exports = {Circle, Square, Triangle};

