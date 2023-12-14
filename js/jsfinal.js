var firstBoxChecked = false;
var secondBoxChecked = false;
var thirdBoxChecked = false;
var firstDigits = 0;
var nextDigits = 0;
var lastDigits = 0;

document.addEventListener("DOMContentLoaded", function () {


  var slider = document.getElementById("myRange");
  var sliderSubmit = document
    .querySelector(".slider-submit-button")
    .addEventListener("click", update);

  var sliderOutput = document.querySelector(".slider-output");

  var slider2 = document.getElementById("myRange2");
  var sliderSubmit2 = document
    .querySelector(".slider-submit-button2")
    .addEventListener("click", update2);

  var sliderOutput2 = document.querySelector(".slider-output2");

  var slider3 = document.getElementById("myRange3");
  var sliderSubmit3 = document
    .querySelector(".slider-submit-button3")
    .addEventListener("click", update3);

  var sliderOutput3 = document.querySelector(".slider-output3");

  var finalButton = document.getElementById("final-button");
  finalButton.addEventListener("click", submitFinal);

  var selectedNumbersDiv = document.createElement("div");
  selectedNumbersDiv.classList.add("selected-numbers");
  document.body.appendChild(selectedNumbersDiv);

  function update() {
    console.log("test");
    firstBoxChecked = true;
    firstDigits = slider.value;
    sliderOutput.textContent = `Selected: ${firstDigits}`;
    updateFinalButton();
    updateSelectedNumbers();
  }

  function update2() {
    console.log("test");
    secondBoxChecked = true;
    nextDigits = slider2.value;
    sliderOutput2.textContent = `Selected: ${nextDigits}`;
    updateFinalButton();
    updateSelectedNumbers();
  }

  function update3() {
    console.log("test");
    thirdBoxChecked = true;
    lastDigits = slider3.value;
    sliderOutput3.textContent = `Selected: ${lastDigits}`;
    updateFinalButton();
    updateSelectedNumbers();
  }

  function updateFinalButton() {
    if (firstBoxChecked && secondBoxChecked && thirdBoxChecked) {
      finalButton.textContent = `Submit ${firstDigits}-${nextDigits}-${lastDigits}`;
    }
  }

  function updateSelectedNumbers() {
    selectedNumbersDiv.textContent = `${firstDigits}-${nextDigits}-${lastDigits}`;
  }

  function submitFinal() {
    if (firstBoxChecked && secondBoxChecked && thirdBoxChecked) {
      console.log(selectedNumbersDiv.textContent);
      alert(`Submitted Numbers: ${firstDigits}-${nextDigits}-${lastDigits}`);
      resetNumbers();
    } else {
      alert("Please select all three parts of your phone number first.");
    }
  }

    var finalButton = document.getElementById("final-button");

    var clearButton = document.getElementById("clearButton");
    clearButton.addEventListener("click", () => {
      resetNumbers();
    });

    function resetNumbers() {
      finalButton.textContent = "Submit Number";
      firstBoxChecked = false;
      secondBoxChecked = false;
      thirdBoxChecked = false;
  
      firstDigits = 0;
      nextDigits = 0;
      lastDigits = 0;
  
      slider.value = 0;
      slider2.value = 0;
      slider3.value = 0;
  
      sliderOutput.textContent = "Selected: ";
      sliderOutput2.textContent = "Selected: ";
      sliderOutput3.textContent = "Selected: ";
  
      selectedNumbersDiv.textContent = "";
    }
});
