import React, { useState, useEffect } from 'react'
import axios from 'axios'


const Questions = () => {

  // const [index, setIndex] = useState(0)

  // const handleSelect = (selectedIndex) => {
  //   setIndex(selectedIndex)
  // }

  const [questions, setQuestions] = useState('')

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get('/api/questions')
      setQuestions(data)
    }
    getData()
  }, [])


  const [currentQuestion, setCurrentQuestion] = useState(0)

  if (!questions) return null

  return (
    <ul>
      {/* {questions.map(question => ( */}
      {/* <li key={question._id}>{question.question}</li> */}
      {/* ))} */}
      <h3>{questions[currentQuestion].question}</h3>

    </ul>
  )
}


export default Questions
