const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const result = document.querySelector("#result");

  if (height === "" || height < 0 || isNaN(height)) {
    result.textContent = `Please enter a valid height ${height}`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    result.textContent = `Please enter a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    result.innerHTML = `<span>${bmi}</span>`;

    if (bmi < 18.5) {
      result.innerHTML += `<span>(Underweight)</span>`;
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      result.innerHTML += `<span>(Normal weight)</span>`;
    } else if (bmi >= 25 && bmi <= 29.9) {
      result.innerHTML += `<span>(Overweight)</span>`;
    } else {
      result.innerHTML += `<span>(Obesity)</span>`;
    }
  }
});
