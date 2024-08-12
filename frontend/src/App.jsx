import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import FlashcardList from './components/FlashcardList'
import axios from 'axios'

const App = () => {
  const [flashCards, setFlashcards] = useState([]);

  const fetchList = async () => {
    const response = await axios.get("http://localhost:3000/getcard")
    if (response.data) {
      setFlashcards(response.data)
    } else {
      console.log("Error !!!")
    }
  }

  useEffect(() => {
    fetchList();
  }, [])

  return (
    <>
      <Navbar />
      <FlashcardList flashCard={flashCards} />
    </>
  )
}

// const FLASHCONTENT = [
//   {
//     id: 1,
//     question: "What is DSA?",
//     answer: "answer",
//     option: [
//       "2",
//       "3",
//       "4",
//       "5"
//     ]
//   },
//   {
//     id: 2,
//     question: "What is DSA?",
//     answer: "answer",
//     option: [
//       "2",
//       "3",
//       "4",
//       "5"
//     ]
//   },
//   {
//     id: 3,
//     question: "What is DSA?",
//     answer: "answer",
//     option: [
//       "2",
//       "3",
//       "4",
//       "5"
//     ]
//   },
//   {
//     id: 4,
//     question: "What is DSA?",
//     answer: "answer",
//     option: [
//       "2",
//       "3",
//       "4",
//       "5"
//     ]
//   },
//   {
//     id: 5,
//     question: "What is DSA?",
//     answer: "answer",
//     option: [
//       "2",
//       "3",
//       "4",
//       "5"
//     ]
//   },
// ]

export default App