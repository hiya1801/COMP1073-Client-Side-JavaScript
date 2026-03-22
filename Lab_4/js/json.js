/*
Name: Hiyaben Haresbhai Jayswal
Student ID: 200578344
*/

// Select header and section
const header = document.querySelector('header');
const section = document.querySelector('section');

// Fetch JSON and populate page
async function populate() {
    const requestURL = './js/i-scream.json';
    const request = new Request(requestURL);
    const response = await fetch(request);
    const data = await response.json();

    populateHeader(data);  // header info
    showTopFlavors(data);  // display flavors
}
populate();
// Populate header dynamically
function populateHeader(data) {
    const h1 = document.createElement('h1');
    h1.textContent = ":) Welcome " + data.companyName + " :)";

    const p = document.createElement('p');
    p.textContent = ` ${data.headOffice} |  Since ${data.established}`;

    header.appendChild(h1);
    header.appendChild(p);
}

// Display all flavors
function showTopFlavors(data) {
    const flavors = data.topFlavors;

    for (let i = 0; i < flavors.length; i++) {
        const article = document.createElement('article');

        const h2 = document.createElement('h2');
        h2.textContent = flavors[i].name;

        const img = document.createElement('img');
        img.src = './images/' + flavors[i].image;

        // Calories badge
        const calories = document.createElement('span');
        calories.className = 'badge calories';
        calories.textContent = `Calories: ${flavors[i].calories}`;

        // Type badge
        const type = document.createElement('span');
        type.className = 'badge type';
        type.textContent = flavors[i].type;

        // Ingredients list
        const ul = document.createElement('ul');
        flavors[i].ingredients.forEach(ingredient => {
            const li = document.createElement('li');
            li.textContent = ingredient;
            ul.appendChild(li);
        });

        // Append elements to card
        article.appendChild(h2);
        article.appendChild(img);
        article.appendChild(calories);
        article.appendChild(type);
        article.appendChild(ul);

        // Append card to section
        section.appendChild(article);
    }
}
