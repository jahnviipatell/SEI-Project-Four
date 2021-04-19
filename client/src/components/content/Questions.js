import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import { userIsAuthenticated } from '../auth/helpers/auth'
import ProgressBar from 'react-bootstrap/ProgressBar'


const Questions = () => {
  //! Get questions from api
  const [questions, setQuestions] = useState('')

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get('/api/questions')
      setQuestions(data)
    }
    getData()
  }, [])

  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [now, setNow] = useState(0)

  //! Handle Answers
  const [answerData, setAnswerData] = useState({
    one: false,
    two: false,
    three: false,
    four: false,
    five: false,
    question: 0,
    // owner: 1,
  })

  const [Errors, setErrors] = useState({
    one: '',
    two: '',
    three: '',
    four: '',
    five: '',
    question: '',
    // owner: '',
  })

  const handleAnswer = event => {
    console.log('VALUE', event.target.innerHTML)
    // if (event.target.innerHTML === 1) {
    const newAnswer = {
      one: true,
      two: false,
      three: false,
      four: false,
      five: false,
      question: questions[currentQuestion].question_number,
    }
    setAnswerData(newAnswer)
    console.log(answerData)
    // }

  }

  //! Set questions and progress
  const handleNext = async () => {
    setCurrentQuestion(currentQuestion + 1)
    setNow(now + 2)
    try {
      const token = window.localStorage.getItem('token')
      await axios.post('/api/answers/', answerData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      console.log('POSTED ANSWER TO DB')
    } catch (err) {
      setErrors(err.response.data)
      console.log(Errors)
    }
  }

  const handlePrevious = (event) => {
    console.log('PREVIOUS', event.target.value)
    setCurrentQuestion(currentQuestion - 1)
    setNow(now - 2)
  }

  if (!questions) return null

  return (
    <>
      <Accordion>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
              Take Test!
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            {userIsAuthenticated() ?
              <Card.Body>
                <ul>
                  <h3>{questions[currentQuestion].question}</h3>
                </ul>
                <ButtonToolbar aria-label="Toolbar with button groups">
                  <ButtonGroup className="mr-2" aria-label="First group">
                    {currentQuestion >= 1 ?
                      <Button onClick={handlePrevious}>←</Button>
                      : null}
                    <Button onClick={handleAnswer}>1</Button> <Button>2</Button> <Button>3</Button> <Button>4</Button> <Button>5</Button>
                    {currentQuestion < 49 ?
                      <Button onClick={handleNext}>→</Button>
                      : null}
                  </ButtonGroup>
                </ButtonToolbar>
                <ProgressBar variant="warning" now={now} label={`${now}%`} />
              </Card.Body>
              :
              <Card.Body>
                <h3>Please Login to take test!</h3>
              </Card.Body>
            }
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </>
  )
}


export default Questions
