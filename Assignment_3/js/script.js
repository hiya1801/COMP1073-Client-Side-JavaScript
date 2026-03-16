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

// Form submission
document.getElementById("bowlForm").addEventListener("submit", function(e){
    e.preventDefault();

    const base = document.getElementById("base").value;
    const size = document.querySelector("input[name='size']:checked")?.value;
    const fruits = Array.from(document.querySelectorAll("input[name='fruits']:checked")).map(f=>f.value);
    const toppings = Array.from(document.querySelectorAll("input[name='toppings']:checked")).map(t=>t.value);
    const proteins = Array.from(document.querySelectorAll("input[name='proteins']:checked")).map(p=>p.value);

    // Validation
    if(!base){ alert("Please select a base!"); return; }
    if(!size){ alert("Please select a size!"); return; }
    if(fruits.length===0){ alert("Please select at least one fruit!"); return; }

    const myBowl = new EnergyBowl(base,size,fruits,toppings,proteins);

    document.getElementById("bowlDescription").innerHTML =
        myBowl.getDescription() + `<br>Price: $${myBowl.calculatePrice()}`;

    const bowlImagesDiv = document.getElementById("bowlImages");
    bowlImagesDiv.innerHTML = "";

    let delay = 0;

    // Add base
    addImage("bases", base, prices.base + prices[size], bowlImagesDiv, delay);
    delay += 200;

    // Fruits
    fruits.forEach(fruit => { addImage("fruits", fruit, prices.fruits, bowlImagesDiv, delay); delay += 200; });

    // Toppings
    toppings.forEach(topping => { addImage("toppings", topping, prices.toppings, bowlImagesDiv, delay); delay += 200; });

    // Proteins
    proteins.forEach(protein => { addImage("proteins", protein, prices.proteins, bowlImagesDiv, delay); delay += 200; });
});

// Add image with animation and tooltip
function addImage(category, name, price, container, delay){
    const box = document.createElement("div");
    box.classList.add("image-box","animate-drop");
    box.style.animationDelay = delay + "ms";
    box.setAttribute("data-price", `$${price}`);
    const img = document.createElement("img");
    img.src = getImage(category,name);
    img.alt = name;
    box.appendChild(img);
    container.appendChild(box);
}
