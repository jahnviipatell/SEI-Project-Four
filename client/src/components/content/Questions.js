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

  const [Extroversion, setExtroversion] = useState(0)
  const [Agreeableness, setAgreeableness] = useState(0)
  const [Conscientiousness, setConscientiousness] = useState(0)
  const [Neuroticism, setNeuroticism] = useState(0)
  const [OpennessToExperience, setOpennessToExperience] = useState(0)

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
      setAnswerData(newAnswer)
      console.log(answerData)
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
    }
    if (currentQuestion + 1 === 1 ||
      currentQuestion === 6 ||
      currentQuestion === 11 ||
      currentQuestion === 16 ||
      currentQuestion === 21 ||
      currentQuestion === 26 ||
      currentQuestion === 31 ||
      currentQuestion === 36 ||
      currentQuestion === 41 ||
      currentQuestion === 46) {
      setExtroversion(Extroversion + Number(event.target.HTML))
      console.log(Extroversion)
    } if (currentQuestion === 2 ||
      currentQuestion === 7 ||
      currentQuestion === 12 ||
      currentQuestion === 17 ||
      currentQuestion === 22 ||
      currentQuestion === 27 ||
      currentQuestion === 32 ||
      currentQuestion === 37 ||
      currentQuestion === 42 ||
      currentQuestion === 47) {
      setAgreeableness(Agreeableness + Number(event.target.HTML))
      console.log(Agreeableness)
    } if (currentQuestion === 3 ||
      currentQuestion === 8 ||
      currentQuestion === 13 ||
      currentQuestion === 18 ||
      currentQuestion === 23 ||
      currentQuestion === 28 ||
      currentQuestion === 33 ||
      currentQuestion === 38 ||
      currentQuestion === 43 ||
      currentQuestion === 48) {
      setConscientiousness(Conscientiousness + Number(event.target.HTML))
      console.log(Conscientiousness)
    } if (currentQuestion === 4 ||
      currentQuestion === 9 ||
      currentQuestion === 14 ||
      currentQuestion === 19 ||
      currentQuestion === 24 ||
      currentQuestion === 29 ||
      currentQuestion === 34 ||
      currentQuestion === 39 ||
      currentQuestion === 44 ||
      currentQuestion === 49) {
      setNeuroticism(Neuroticism + Number(event.target.HTML))
      console.log(Neuroticism)
    } if (currentQuestion === 5 ||
      currentQuestion === 10 ||
      currentQuestion === 15 ||
      currentQuestion === 20 ||
      currentQuestion === 25 ||
      currentQuestion === 20 ||
      currentQuestion === 35 ||
      currentQuestion === 40 ||
      currentQuestion === 45 ||
      currentQuestion === 50) {
      setOpennessToExperience(OpennessToExperience + Number(event.target.HTML))
      console.log(OpennessToExperience)
    } else {
      console.log('Scoring Error')
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
