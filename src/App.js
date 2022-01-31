import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

function App() {
  const questions = [
    {
      questionText: "What is the capital of Croatia?",
      anwserOptions: [
        { anwserText: "Dubrovnik", isCorrect: false },
        { anwserText: "Warsaw", isCorrect: false },
        { anwserText: "London", isCorrect: false },
        { anwserText: "Zagreb", isCorrect: true },
      ],
    },
    {
      questionText: "Who is the CEO of Tesla?",
      anwserOptions: [
        { anwserText: "Jeff Bezof", isCorrect: false },
        { anwserText: "Elon Musk", isCorrect: true },
        { anwserText: "Bill Gates", isCorrect: false },
        { anwserText: "Mark Zuckerberg", isCorrect: true },
      ],
    },
    {
      questionText: "What is the biggest animal on planet?",
      anwserOptions: [
        { anwserText: "Whale", isCorrect: true },
        { anwserText: "Elephant", isCorrect: false },
        { anwserText: "Hippo", isCorrect: false },
        { anwserText: "Shark", isCorrect: false },
      ],
    },
    {
      questionText: "When did Poland join the EU?",
      anwserOptions: [
        { anwserText: "2001", isCorrect: false },
        { anwserText: "2002", isCorrect: false },
        { anwserText: "2003", isCorrect: false },
        { anwserText: "2004", isCorrect: true },
      ],
    },
    {
      questionText: "Who is the current president of the USA",
      anwserOptions: [
        { anwserText: "Bill Clinton", isCorrect: false },
        { anwserText: "Donald Trump", isCorrect: false },
        { anwserText: "Barack Obama", isCorrect: false },
        { anwserText: "Joe Biden", isCorrect: true },
      ],
    },
  ];




  const anotherQuestions = [
    {
      questionText: "Which mountain is the highest in the world?",
      anwserOptions: [
        { anwserText: "Rysy", isCorrect: false },
        { anwserText: "Mont Blanc", isCorrect: false },
        { anwserText: "Kilimandzaro", isCorrect: false },
        { anwserText: "Mount Everest", isCorrect: true },
      ],
    },
    // {
    //   questionText: "Who is the CEO of Facebook?",
    //   anwserOptions: [
    //     { anwserText: "Jeff Bezof", isCorrect: false },
    //     { anwserText: "Elon Musk", isCorrect: false },
    //     { anwserText: "Bill Gates", isCorrect: false },
    //     { anwserText: "Mark Zuckerberg", isCorrect: true },
    //   ],
    // },
    // {
    //   questionText: "Which animal of the following is the most dangerous?",
    //   anwserOptions: [
    //     { anwserText: "Whale", isCorrect: false },
    //     { anwserText: "Elephant", isCorrect: false },
    //     { anwserText: "Hippo", isCorrect: false },
    //     { anwserText: "Shark", isCorrect: true },
    //   ],
    // },
    // {
    //   questionText: "Who was the first king of Poland?",
    //   anwserOptions: [
    //     { anwserText: "Mieszko I", isCorrect: false },
    //     { anwserText: "Boleslaw Chrobry", isCorrect: true },
    //     { anwserText: "Kazimierz Wielki", isCorrect: false },
    //     { anwserText: "Wladyslaw Jagiello", isCorrect: false },
    //   ],
    // },
    // {
    //   questionText: "Which actor plays Harry Potter?",
    //   anwserOptions: [
    //     { anwserText: "Tom Holland", isCorrect: false },
    //     { anwserText: "Brad Pitt", isCorrect: false },
    //     { anwserText: "Daniel Rupert", isCorrect: false },
    //     { anwserText: "Daniel Radcliffe", isCorrect: true },
    //   ],
    // },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  // const [anotherCurrentQuestion, setAnotherCurrentQuestion] = useState(0);
  

  const handleAnwserOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;

    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  

  const lastQuestion = () => {
    console.log('last question')
    setCurrentQuestion(0)
    setScore(0)
    setShowScore(false)
  }

  // const [secondCurrentQuestion, setSecondCurrentQuestion] = useState(0);
  // const [secondShowScore, setSecondShowScore] = useState(false);
  // const [secondScore, set ]

  const secondQuiz = () => {
    console.log('another quiz')
    setCurrentQuestion(5)
    setScore(0)
    setShowScore(false)
  }

  return (
    <div className="app">
      {showScore ? (
        <div className="score-section">
          You scored {score} out of {questions.length}
          <br />
          <br />
          <br />
          <button onClick={() => lastQuestion()}>Try again </button>
          {/* or 
          <button onClick={() => secondQuiz() }> Another quiz</button> */}
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question {[currentQuestion + 1]} </span> out of{" "}
              {questions.length}
            </div>
            <div className="question-text">
              {" "}
              {questions[currentQuestion].questionText}{" "}
            </div>
          </div>
          <div>
            {questions[currentQuestion].anwserOptions.map((anwserOptions, index) => (
              <button key={Date.now()+index}
                onClick={() => handleAnwserOptionClick(anwserOptions.isCorrect)}
              >
                {" "}
                {anwserOptions.anwserText}{" "}
              </button>
            ))}
          </div>



        </>
      )}
    </div>
  );
}

export default App;
