// 1. Variable Declarations
let petName = "Bonnie";          // string
let petType = "";               // string
let petAge = 0;                 // number
let isHungry = false;           // boolean
let favoriteActivities = [];    // array
let mood = "";                  // string

// Random Data Arrays
const petTypes = ["dog", "cat", "dragon", "hamster"];
const moods = ["happy", "sleepy", "excited", "grumpy"];
const activities = ["playing", "sleeping", "running", "flying"];

// 2. Random Pet Generator
function generateRandomPet() {
    petType = petTypes[Math.floor(Math.random() * petTypes.length)];
    petAge = Math.floor(Math.random() * 10); // age 0-9
    mood = moods[Math.floor(Math.random() * moods.length)];
    favoriteActivities = [
        activities[Math.floor(Math.random() * activities.length)]
    ];

    updatePetDescription();
}

// 3. User Interaction Functions
function updateName() {
    const newName = document.getElementById("nameInput").value;
    if (newName !== "") {
        petName = newName;
        updatePetDescription();
    }
}

function increaseAge() {
    petAge++;
    updatePetDescription();
}

function decreaseAge() {
    if (petAge > 0) {
        petAge--;
        updatePetDescription();
    }
}

function toggleHunger() {
    isHungry = !isHungry; // switch true/false
    updatePetDescription();
}

// 4. DOM Update Function
function updatePetDescription() {
    const hungerStatus = isHungry ? "hungry" : "not hungry";

    const description = `Meet ${petName}, a ${petAge}-year-old ${petType} 
who loves ${favoriteActivities[0]} and is currently feeling ${mood}! 
${petName} is ${hungerStatus}.`;

    document.getElementById("petDescription").textContent = description;
}

// Generate a random pet when page loads
generateRandomPet();