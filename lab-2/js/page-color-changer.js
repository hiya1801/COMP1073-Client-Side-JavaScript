/** Lab 2 - Page Color Changer (RGB Sliders)
 *  Student: Hiyaben Haresbhai Jayswal
 *  Student ID: 200578344 */
document.addEventListener("DOMContentLoaded", () => {
  // 1) DOM ELEMENT SELECTION
  // Range sliders (input elements)
  const redSlider = document.querySelector("#red");
  const greenSlider = document.querySelector("#green");
  const blueSlider = document.querySelector("#blue");

  // document.documentElement is the <html> element.
  const htmlElement = document.documentElement;
