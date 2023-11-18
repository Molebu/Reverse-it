function reverseString() {
  const inputString = document.getElementById("inputString").value;
  const resultElement = document.getElementById("result");

  // Use the built-in JavaScript function to reverse the string
  const reversedString = inputString.split("").reverse().join("");

  resultElement.textContent = reversedString;
}
