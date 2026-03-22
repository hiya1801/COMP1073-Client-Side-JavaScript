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
