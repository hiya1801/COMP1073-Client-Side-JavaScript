// Hiyaben Hareshbhai Jayswal

// EnergyBowl class
class EnergyBowl {
    constructor(base, size, fruits, toppings, proteins) {
        this.base = base;
        this.size = size;
        this.fruits = fruits;
        this.toppings = toppings;
        this.proteins = proteins;
    }

    // Description of selected items
    getDescription() {
        let desc = `Base: ${this.base}<br>`;
        desc += `Size: ${this.size}<br>`;
        desc += `Fruits: ${this.fruits.join(", ") || "None"}<br>`;
        desc += `Toppings: ${this.toppings.join(", ") || "None"}<br>`;
        desc += `Proteins: ${this.proteins.join(", ") || "None"}`;
        return desc;
    }

    // Calculate total price
    calculatePrice() {
        let price = 5; // Base price
        switch(this.size) {
            case "small": price += 0; break;
            case "medium": price += 2; break;
            case "large": price += 4; break;
        }
        price += this.fruits.length * 1;
        price += this.toppings.length * 0.75;
        price += this.proteins.length * 2;
        return price.toFixed(2);
    }
}
