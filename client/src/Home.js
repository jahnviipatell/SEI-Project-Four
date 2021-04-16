import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Carousel from 'react-bootstrap/Carousel'
import Button from 'react-bootstrap/Button'

const App = () => {

  const [questions, setQuestions] = useState([])

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get('/api/questions')
      setQuestions(data)
    }
    getData()
    console.log(questions)
  }, [])

  if (!questions) return null

  return (
    <>
      <Button variant="primary">Primary</Button>{' '}
      <Carousel className="carousel-slide">
        {questions.map(question => (
          // <>
          <Carousel.Item key={question._id}>
            <Carousel.Caption key={question._id}>
              <h3 key={question._id}>{question.question}</h3>
            </Carousel.Caption>
          </Carousel.Item>
          // </>
        ))}
      </Carousel >
      <ul>
        {questions.map(question => (
          <li key={question._id}>
            {question.question}
          </li>
        ))}
      </ul>
    </>
  )
}

export default App