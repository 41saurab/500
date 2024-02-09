const total = document.getElementById("total");
const charge = document.getElementById("charge");
const btn = document.getElementById("btn");


// Add event listener to the input field for "keydown" event
charge.addEventListener("keydown", function (event) {
    // Check if the pressed key is Enter (key code 13)
    if (event.key === "Enter") {
      // Trigger the button click
      event.preventDefault();
      btn.click();
    }
  });

  
btn.addEventListener("click", function () {
  // Get the current total value and convert it to a number
  let currentTotal = parseFloat(total.innerHTML) || 0;

  // Get the value from the charge input and convert it to a number
  const chargeValue = parseFloat(charge.value) || 0;

  // Update the total by adding the charge value
  currentTotal += chargeValue;

  total.innerHTML = currentTotal.toFixed(2) + " Rs"; // Ensure two decimal places

  // Clear the input field after adding the charge
  charge.value = "";

  // Check if the total is greater than or equal to 500
  if (currentTotal >= 500) {
    alert("Total has reached Rs. 500");
  }
});
