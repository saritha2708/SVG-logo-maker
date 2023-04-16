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

class Circle extends Shapes {
    renderText() {
        return `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`
    }
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.fillColor}" />`;
    }
}

class Square extends Shapes {
   
    render() {
        return `<polygon points="90,75 210,75 210,195 90,195" fill="${this.fillColor}" />`;

    }
}

class Triangle extends Shapes {
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill= "${this.fillColor}" />`;

    }

}

module.exports = {Circle, Square, Triangle};

// `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

//         <circle cx="150" cy="100" r="80" fill="green" />
      
//         <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>
      
// </svg>`

// `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

//         <polygon points="90,75 210,75 210,195 90,195" fill="bisque" />
      
//         <text x="150" y="150" font-size="60" text-anchor="middle" fill="#3a0467">SVG</text>
      
// </svg>`

// `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

//         <polygon points="150, 18 244, 182 56, 182" fill="bisque" />
      
//         <text x="150" y="150" font-size="60" text-anchor="middle" fill="#3a0467">SVG</text>
      
// </svg>`

