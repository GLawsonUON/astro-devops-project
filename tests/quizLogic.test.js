const { checkAnswer, calculateScore } = require('../../utils/quizLogic');

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
