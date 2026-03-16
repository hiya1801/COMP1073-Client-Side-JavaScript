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

// Helper to get image path
function getImage(category, name) {
    return `images/${category}/${name}.jpg`;
}

// Price map
const prices = { base: 5, fruits:1, toppings:0.75, proteins:2, small:0, medium:2, large:4 };
