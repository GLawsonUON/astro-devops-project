const { checkAnswer, calculateScore, getNextQuestionIndex } = require('../src/utils/quizLogic');

//check some induvidual questions

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

//ceck simulated quiz senaeo 

test('checkAnswer works for actual quiz question: capital of France', () => {
  expect(checkAnswer('Paris', 'Paris')).toBe(true);
  expect(checkAnswer('Berlin', 'Paris')).toBe(false);
});

test('simulate full quiz scoring with 10 answers', () => {
  const userAnswers = [
    { correct: true },
    { correct: false },
    { correct: true },
    { correct: true },
    { correct: false },
    { correct: true },
    { correct: true },
    { correct: false },
    { correct: true },
    { correct: true }
  ];
  expect(calculateScore(userAnswers)).toBe(7);
});