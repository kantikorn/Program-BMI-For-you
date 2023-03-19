function calculateBMI() {
	// Get the weight and height input fields
	var weight = parseFloat(document.getElementById("weight").value);
	var height = parseFloat(document.getElementById("height").value);

	// Calculate the BMI
	var bmi = weight / (height * height);
    console.log(bmi)
 

	// Display the result
	var resultDiv = document.getElementById("result");
	resultDiv.innerHTML = "<h3>Your BMI is: " + bmi.toFixed(2) + "</h3>";
}