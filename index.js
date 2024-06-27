function convertTemperature() {
    var temperatureInput = document.getElementById("temperatureInput").value;
    var unitSelect = document.getElementById("unitSelect").value;
    var result = document.getElementById("result");
  
    if (isNaN(temperatureInput)) {
      result.innerHTML = "Please enter a valid number.";
      return;
    }
  
    temperatureInput = parseFloat(temperatureInput);
  
    if (unitSelect === "celsius") {
      var fahrenheit = (temperatureInput * 9/5) + 32;
      result.innerHTML = temperatureInput + "°C is " + fahrenheit.toFixed(2) + "°F";
    } else {
      var celsius = (temperatureInput - 32) * 5/9;
      result.innerHTML = temperatureInput + "°F is " + celsius.toFixed(2) + "°C";
    }
  }
  