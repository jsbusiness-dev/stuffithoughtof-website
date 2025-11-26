function checkAnswer() {
  const input = document.getElementById("answerInput").value;
  const result = document.getElementById("result");

  const correctAnswer = 111111111;

  if (Number(input) === correctAnswer) {
    result.textContent = "Correct!";
    result.style.color = "green";
  } else {
    result.textContent = "Wrong!";
    result.style.color = "red";
  }
}