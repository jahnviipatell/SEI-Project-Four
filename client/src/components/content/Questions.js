import React, { useState, useEffect } from 'react'
import axios from 'axios'
import InputGroup from 'react-bootstrap/InputGroup'


const Questions = () => {

  const [questions, setQuestions] = useState('')

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get('/api/questions')
      setQuestions(data)
    }
    getData()
  }, [])


  const [currentQuestion, setCurrentQuestion] = useState(0)

  console.log(setCurrentQuestion)

  if (!questions) return null

  return (
    <>
      <ul>
        {/* {questions.map(question => ( */}
        {/* <li key={question._id}>{question.question}</li> */}
        {/* ))} */}
        <h3>{questions[currentQuestion].question}</h3>
      </ul>
      <InputGroup>
        <InputGroup.Prepend>
          <InputGroup.Radio aria-label="Radio button for following text input" />
        </InputGroup.Prepend>
        <InputGroup.Prepend>
          <InputGroup.Radio aria-label="Radio button for following text input" />
        </InputGroup.Prepend>
      </InputGroup>
    </>
  )
}


export default Questions
