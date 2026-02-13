/*
  Name: Hiyaben Hareshbhai Jayswal
  Student No.: 200578344
*/

/*ATTRIBUTION / REFERENCES
This web application emulates the behavior of the Mattel® See 'N' Say Storymaker toy.
Interaction reference video:
"See 'N' Say Storymaker Demonstration"
Uploaded by limegl0wstix (2010)
https://www.youtube.com/watch?v=gG8y_e6t0G4*/

"use strict";

//Required story parts (5 slots)
const parts = [
  ["My teacher", "The dog", "A pirate", "The robot", "My best friend", "A tiny dragon"],
  ["danced with", "ate", "high-fived", "painted", "tickled", "challenged"],
  ["a slimy sandwich", "a giant cupcake", "a spooky pineapple", "a glittery hat", "a silly frog", "a flying banana"],
  ["on the moon", "in my backyard", "at the mall", "under the bed", "inside a castle", "at the beach"],
  ["before breakfast.", "at midnight.", "on Tuesday.", "during a thunderstorm.", "right after class.", "when nobody was looking."]
];

//Track which option is selected for each slot
let selected = [0, 0, 0, 0, 0];

//Grab DOM elements
const partButtons = [
  document.getElementById("part0"),
  document.getElementById("part1"),
  document.getElementById("part2"),
  document.getElementById("part3"),
  document.getElementById("part4")
];

const choiceText = [
  document.getElementById("choice0"),
  document.getElementById("choice1"),
  document.getElementById("choice2"),
  document.getElementById("choice3"),
  document.getElementById("choice4")
];

const storyTextEl = document.getElementById("storyText");
const btnStory = document.getElementById("btnStory");
const btnRandom = document.getElementById("btnRandom");
const btnReset = document.getElementById("btnReset");
const btnSpeak = document.getElementById("btnSpeak");

//Functions and logics
//Cycle to the next phrase for one slot
function cyclePart(partIndex) {
  selected[partIndex] = (selected[partIndex] + 1) % parts[partIndex].length;
  updateSlotUI(partIndex);
}

//Update button text and the "Selected:" label
function updateSlotUI(partIndex) {
  const phrase = parts[partIndex][selected[partIndex]];
  partButtons[partIndex].textContent = phrase;
  choiceText[partIndex].textContent = "Selected: " + phrase;
}

//Build the full sentence from the 5 selections
function buildStory() {
  let sentence = "";
  for (let i = 0; i < parts.length; i++) {
    sentence += parts[i][selected[i]] + " ";
  }
  return sentence.trim();
}

//Show the sentence on screen
function showStory() {
  storyTextEl.textContent = buildStory();
}

//Randomize all 5 selections
function randomStory() {
  for (let i = 0; i < parts.length; i++) {
    selected[i] = Math.floor(Math.random() * parts[i].length);
    updateSlotUI(i);
  }
  showStory();
}

//Reset to the first option for each slot
function resetStory() {
  selected = [0, 0, 0, 0, 0];
  for (let i = 0; i < parts.length; i++) updateSlotUI(i);

  storyTextEl.textContent = "Pick your parts to create a story…";
  stopSpeaking();
}

//Speak story (audio output bonus)
function speakStory() {
  const story = buildStory();
  storyTextEl.textContent = story;

  // If the browser does not support speech, just exit politely.
  if (!window.speechSynthesis) {
    alert("Speech is not supported in this browser.");
    return;
  }

  stopSpeaking();

  const utter = new SpeechSynthesisUtterance(story);
  utter.rate = 1.0;
  utter.pitch = 1.05;

  window.speechSynthesis.speak(utter);
}

//Stop any current speech
function stopSpeaking() {
  if (window.speechSynthesis) {
    window.speechSynthesis.cancel();
  }
}

//Events
for (let i = 0; i < partButtons.length; i++) {
  partButtons[i].addEventListener("click", function () {
    cyclePart(i);
  });
}

btnStory.addEventListener("click", showStory);
btnRandom.addEventListener("click", randomStory);
btnReset.addEventListener("click", resetStory);
btnSpeak.addEventListener("click", speakStory);

// Init (default selections visible immediately)
(function init() {
  for (let i = 0; i < parts.length; i++) {
    updateSlotUI(i);
  }
})();
