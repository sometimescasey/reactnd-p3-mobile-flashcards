export const DECK_DATA = {
  React: {
    title: 'React',
    questions: {
      "bfk839rj3hgq91jw4553": {
        question: 'What is React?',
        answer: 'A library for managing user interfaces',
        timestamp: 1488579767190,
        correct: null,
      },
      "8zicju1qltbvdugrxnb3b": {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event',
        timestamp: 1488579767191,
        correct: null,
      },
      "3qzdufuiqrboy6hq676b1": {
          question: 'Can functional components store state?',
          answer: 'Yes, using hooks!',
          timestamp: 1488579767192,
          correct: null,
      }
    },
    score: 0,
    currentIdx: 0,
  },
  JavaScript: {
    title: 'JavaScript',
    questions: {
      "xz3o4je4yxpp5ec2tx9f3n": {
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.',
        timestamp: 1488579767193,
        correct: null,
      }
    },
    score: 0,
    currentIdx: 0,
  }
};

  export function _getData () {
    return new Promise((res, rej) => {
      setTimeout(() => res({...DECK_DATA}), 1000)
    })
  }