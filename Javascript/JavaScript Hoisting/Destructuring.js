

// parent Vehicle class
class Vehicle {
    constructor(manufacturer, model, color) {
        this.manufacturer = manufacturer;
        this.model = model;
        this.color = color;
        this.miles = 0;
    }
    drive() {
        this.miles += 10;
        console.log(`You drove your ${ this.constructor.name } and it now has ${this.miles} miles on it.`);
    }
}




