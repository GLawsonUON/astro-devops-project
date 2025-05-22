const { checkAnswer, calculateScore, getNextQuestionIndex } = require('../src/utils/quizLogic');

test('checkAnswer returns true when answer is correct', () => {
  expect(checkAnswer('B', 'B')).toBe(true);
});

test('checkAnswer returns false when answer is incorrect', () => {
  expect(checkAnswer('A', 'C')).toBe(false);
});

test('calculateScore counts correct answers', () => {
  const answers = [
    { correct: true },
    { correct: false },
    { correct: true }
  ];
  expect(calculateScore(answers)).toBe(2);
});

test('getNextQuestionIndex returns next index', () => {
  expect(getNextQuestionIndex(1, 5)).toBe(2);
});

test('getNextQuestionIndex returns -1 at end', () => {
  expect(getNextQuestionIndex(4, 5)).toBe(-1);
});