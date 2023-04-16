const {Circle, Square, Triangle} = require('../lib/shapes');

describe('Shapes', () => {
    
    describe('isCircleSvg', () => {
      it('should create a Circle object and return the circle svg when .render() method is called', () => {
        const circle = new Circle();
        circle.setFillColor("yellow");
        expect(circle.render()).toEqual('<circle cx="150" cy="100" r="80" fill="yellow" />');
      });
    });
    describe('isSquareSvg', () => {
        it('should create a Square object and return the square svg when .render() method is called', () => {
            const square = new Square();
            square.setFillColor("blue");
            expect(square.render()).toEqual('<polygon points="90,75 210,75 210,195 90,195" fill="blue" />');
        });
    });
    describe('isTriangleSvg', () => {
        it('should create a Triangle object and return the triangle svg when .render() method is called', () => {
            const triangle = new Triangle();
            triangle.setFillColor("red");
            expect(triangle.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="red" />');
        });
    });
});
