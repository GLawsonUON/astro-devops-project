function checkAnswer(selectedAnswer, correctAnswer) {
  return selectedAnswer === correctAnswer;
}

function calculateScore(answers) {
  return answers.filter(a => a.correct).length;
}

function getNextQuestionIndex(currentIndex, totalQuestions) {
  return currentIndex + 1 < totalQuestions ? currentIndex + 1 : -1;
}

module.exports = {
  checkAnswer,
  calculateScore,
  getNextQuestionIndex
};

