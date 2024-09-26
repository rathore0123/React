import React, { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'

export default function Quiz() {
  const [currQuestionIndex, setCurrQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [score, setScore] = useState(0);
  const uniqueId = {
    0: uuidv4(),
    1: uuidv4(),
    2: uuidv4(),
    3: uuidv4(),
  }
  const optCount = {
    0: 'a',
    1: 'b',
    2: 'c',
    3: 'd',
  }

  function showNext() {
    if (currQuestionIndex < quizQuestions.length - 1 && (selectedAnswers[currQuestionIndex] != null)) {
      setCurrQuestionIndex(currQuestionIndex + 1);
    }
  }

  function showPrev() {
    if (currQuestionIndex > 0) {
      setCurrQuestionIndex(currQuestionIndex - 1);
    }
  }

  function selAnswer(index) {
    setScore(0)
    setSelectedAnswers({ ...selectedAnswers, [currQuestionIndex]: index })
  }

  function handleSubmit() {
    if (score === 0) {
      let newScore = 0;
      quizQuestions.forEach((quiz, index) => {
        let isCorrect = quiz.options[selectedAnswers[index]] === quiz.correctAnswer;
        if (isCorrect) {
          newScore += 1
        }
      })
      setScore(score + newScore);
    }
  }

  const quizQuestions = [
    {
      question: "What is the capital of France?",
      options: ["Paris", "Berlin", "Madrid", "Rome"],
      correctAnswer: "Paris"
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Earth", "Mars", "Jupiter", "Venus"],
      correctAnswer: "Mars"
    },
    {
      question: "Who wrote the play 'Romeo and Juliet'?",
      options: ["William Shakespeare", "Charles Dickens", "Jane Austen", "Mark Twain"],
      correctAnswer: "William Shakespeare"
    },
    {
      question: "Which element has the chemical symbol 'O'?",
      options: ["Oxygen", "Gold", "Hydrogen", "Carbon"],
      correctAnswer: "Oxygen"
    },
    {
      question: "What is the largest ocean on Earth?",
      options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
      correctAnswer: "Pacific Ocean"
    },
    {
      question: "Who was the first president of the United States?",
      options: ["George Washington", "Abraham Lincoln", "John Adams", "Thomas Jefferson"],
      correctAnswer: "George Washington"
    },
    {
      question: "What is the square root of 64?",
      options: ["6", "7", "8", "9"],
      correctAnswer: "8"
    },
    {
      question: "Which country hosted the 2016 Summer Olympics?",
      options: ["Brazil", "China", "Russia", "United Kingdom"],
      correctAnswer: "Brazil"
    },
    {
      question: "Which famous scientist developed the theory of general relativity?",
      options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Marie Curie"],
      correctAnswer: "Albert Einstein"
    },
    {
      question: "What is the largest mammal in the world?",
      options: ["Elephant", "Blue Whale", "Giraffe", "Great White Shark"],
      correctAnswer: "Blue Whale"
    }
  ];

  return (
    <div className='w-full h-full bg-slate-700 flex flex-col justify-center items-center'>
      <h1 className='text-4xl text-white font-bold mb-5'>Quiz App</h1>
      <div className="card bg-white rounded-lg p-8 w-1/2">
        <div className="score w-fit p-2 px-4 text-amber-700 font-bold text-2xl my-5">Your Score is: {score}</div>
        <div className="question bg-cyan-200 rounded-lg w-full p-4 text-black text-2xl font-semibold flex gap-5">
          <span>{currQuestionIndex + 1}.</span>{quizQuestions[currQuestionIndex].question}
        </div>
        <div className="options flex flex-col gap-5 my-5">
          {quizQuestions[currQuestionIndex].options.map((option, i) => {
            return <div key={uniqueId[i]} onClick={() => selAnswer(i)} className={`opt cursor-pointer bg-cyan-100 rounded-lg w-full p-2 px-4 text-black text-2xl font-semibold flex gap-5 ${(selectedAnswers[currQuestionIndex] === i) ? (quizQuestions[currQuestionIndex].options[selectedAnswers[currQuestionIndex]] === quizQuestions[currQuestionIndex].correctAnswer) ? 'bg-green-400' : 'bg-red-600' : ''}`}><span>{optCount[i]}.</span>{option}</div>
          })}
        </div>
        <div className="buttons flex justify-between w-full">
          <button onClick={showPrev} type="button" className="btn p-2 px-4 rounded-md bg-blue-500 text-white font-bold text-lg
          ">Prev</button>
          <button disabled={selectedAnswers[currQuestionIndex] == null} onClick={showNext} type="button" className={`btn p-2 px-4 rounded-md bg-blue-500 text-white font-bold text-lg
          ${selectedAnswers[currQuestionIndex] != null ? 'bg-blue-500' : 'bg-gray-400 cursor-not-allowed'}`}>Next</button>
        </div>
        {Object.keys(selectedAnswers).length == 10 ? (<div className="submit w-full flex justify-center">
          <button onClick={handleSubmit} type='button' className='btn p-2 px-4 rounded-md bg-amber-600 text-white font-bold text-lg'>Submit</button>
        </div>) : ''}
      </div>
    </div>
  )
}