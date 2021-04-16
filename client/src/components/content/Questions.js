import React, { useState, useEffect } from 'react'
import axios from 'axios'


const Questions = () => {

  const [questions, setQuestions] = useState([])

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get('/api/questions')
      setQuestions(data)
    }
    getData()
  }, [])

  if (!questions) return null
  console.log(questions[0].question)

  return (
    <>
      <div>
        <ul>
          {questions.map(question => {
            <li key={question._id}>
              {question.question}
            </li>
          })}
        </ul>
      </div>
    </>
  )
}

export default Questions
