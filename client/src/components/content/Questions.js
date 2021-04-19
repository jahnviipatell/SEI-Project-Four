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
  })

  const [Errors, setErrors] = useState({
    one: '',
    two: '',
    three: '',
    four: '',
    five: '',
    question: '',
  })

  // const [Score, setScore] = useState(0)

  const e = [1, 6, 11, 16, 21, 26, 31, 36, 41, 46]
  // const a = [2, 7, 12, 17, 22, 27, 32, 37, 42, 47]
  // const c = [3, 8, 13, 18, 23, 28, 33, 38, 43, 48]
  // const n = [4, 9, 14, 19, 24, 29, 34, 39, 44, 49]
  // const o = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50]

  const [Extroversion, setExtroversion] = useState(0)
  // const [Agreeableness, setAgreeableness] = useState(0)
  // const [Conscientiousness, setConscientiousness] = useState(0)
  // const [Neuroticism, setNeuroticism] = useState(0)
  // const [OpennessToExperience, setOpennessToExperience] = useState(0)

  const handleAnswer = event => {
    console.log('VALUE', event.target.innerHTML)
    console.log('CurrentQuestion', currentQuestion)
    if (event.target.innerHTML === '1') {
      const newAnswer = {
        one: true,
        two: false,
        three: false,
        four: false,
        five: false,
        question: questions[currentQuestion].question_number,
      }
      // setScore(Score + 1)
      // console.log(Score)
      if (e.includes(currentQuestion + 1)) {
        console.log('e includes this question')
        setExtroversion(Extroversion + 1)
        console.log(Extroversion)
      }
      setAnswerData(newAnswer)
      console.log(answerData)
      // setScore(0)
    } else if (event.target.innerHTML === '2') {
      const newAnswer = {
        one: false,
        two: true,
        three: false,
        four: false,
        five: false,
        question: questions[currentQuestion].question_number,
      }
      setAnswerData(newAnswer)
      console.log(answerData)
    } else if (event.target.innerHTML === '3') {
      const newAnswer = {
        one: false,
        two: false,
        three: true,
        four: false,
        five: false,
        question: questions[currentQuestion].question_number,
      }
      setAnswerData(newAnswer)
      console.log(answerData)
    } else if (event.target.innerHTML === '4') {
      const newAnswer = {
        one: false,
        two: false,
        three: false,
        four: true,
        five: false,
        question: questions[currentQuestion].question_number,
      }
      setAnswerData(newAnswer)
      console.log(answerData)
    } else if (event.target.innerHTML === '5') {
      const newAnswer = {
        one: false,
        two: false,
        three: false,
        four: false,
        five: true,
        question: questions[currentQuestion].question_number,
      }
      setAnswerData(newAnswer)
      console.log(answerData)
    } else {
      console.log('SetAnswer Error')
    }
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

  // const handlePrevious = (event) => {
  //   console.log('PREVIOUS', event.target.value)
  //   setCurrentQuestion(currentQuestion - 1)
  //   setNow(now - 2)
  // }

  const handleResults = () => {
    console.log('set results here')
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
                      <Button
                      // onClick={handlePrevious}
                      >←</Button>
                      : null}
                    <Button onClick={handleAnswer}>1</Button> <Button onClick={handleAnswer}>2</Button> <Button onClick={handleAnswer}>3</Button> <Button onClick={handleAnswer}>4</Button> <Button onClick={handleAnswer}>5</Button>
                    {currentQuestion < 49 ?
                      <Button onClick={handleNext}>→</Button>
                      : <Button onClick={handleResults}>View Results</Button>}
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
