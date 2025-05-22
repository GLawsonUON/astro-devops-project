function checkAnswer(selectedAnswer, correctAnswer) {
  return selectedAnswer === correctAnswer;
}

function calculateScore(answers) {
  return answers.filter(a => a.correct).length;
}

module.exports = {
  checkAnswer,
  calculateScore,
};

