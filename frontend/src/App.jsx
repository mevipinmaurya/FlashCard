import React, { useState } from 'react'
import Navbar from './components/Navbar'
import FlashcardList from './components/FlashcardList'

const App = () => {
  const [flashCards, setFlashcards] = useState(FLASHCONTENT);
  return (
    <>
      <Navbar />
      <FlashcardList flashCard={flashCards} />
    </>
  )
}

const FLASHCONTENT = [
  {
    id: 1,
    question: "What is DSA?",
    answer: "answer",
    option: [
      "2",
      "3",
      "4",
      "5"
    ]
  },
  {
    id: 2,
    question: "What is DSA?",
    answer: "answer",
    option: [
      "2",
      "3",
      "4",
      "5"
    ]
  },
  {
    id: 3,
    question: "What is DSA?",
    answer: "answer",
    option: [
      "2",
      "3",
      "4",
      "5"
    ]
  },
  {
    id: 4,
    question: "What is DSA?",
    answer: "answer",
    option: [
      "2",
      "3",
      "4",
      "5"
    ]
  },
  {
    id: 5,
    question: "What is DSA?",
    answer: "answer",
    option: [
      "2",
      "3",
      "4",
      "5"
    ]
  },
]

export default App