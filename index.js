// Add your Circle class here
class Circle {
    constructor(radius) {
      this.radius = radius;
    }
  
    get diameter() {
        return this.radius * 2;
    }

    get circumference() {
        return (Math.PI) * (this.radius * 2);
      }

    get area() {
        let radiusSquared = (this.radius * this.radius);
        return Math.PI * radiusSquared;
    }

    set diameter(newDiameter) {
        this.radius = newDiameter / 2
    }

    set circumference(newCircumference) {
        let diameter = newCircumference / (Math.PI);
        this.radius = diameter/2
    }

    set area(newArea) {
        let formula = newArea / (Math.PI);
        this.radius = Math.sqrt(formula)
    }
}