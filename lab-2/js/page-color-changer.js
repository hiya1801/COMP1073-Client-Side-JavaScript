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
  // 2) FUNCTION: UPDATE BACKGROUND COLOR
  /* Reads the slider values and updates the background-color of the page.
     Background color format: rgb(redValue, greenValue, blueValue) */
  function updateBackgroundColor() {
    // Get slider values (strings) and convert them to numbers
    const r = Number(redSlider.value);
    const g = Number(greenSlider.value);
    const b = Number(blueSlider.value);
     // Apply the RGB color to the <html> element background
    htmlElement.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  }
