const userInput = document.getElementById("text-input");
const checkPalindromeBtn = document.getElementById("check-btn");
const resultDiv = document.getElementById("result");

function isPalindromeCheck(input) {
  const sanitizedInput = input.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  const reversedInput = sanitizedInput.split("").reverse().join("");
  return sanitizedInput === reversedInput;
}

function checkAndDisplayPalindrome() {
  const inputValue = userInput.value.trim();

  if (!inputValue) {
    resultDiv.innerHTML = "Please input a value";
    return;
  }

  if (isPalindromeCheck(inputValue)) {
    resultDiv.innerHTML = `${inputValue} is a palindrome`;
  } else {
    resultDiv.innerHTML = `${inputValue} is not a palindrome`;
  }
}

checkPalindromeBtn.addEventListener("click", checkAndDisplayPalindrome);
