import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import { userIsAuthenticated } from '../auth/helpers/auth'
import ProgressBar from 'react-bootstrap/ProgressBar'
import { defaults, Doughnut } from 'react-chartjs-2'
defaults.global.legend.position = 'bottom'

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


  const e = [1, 6, 11, 16, 21, 26, 31, 36, 41, 46]
  const a = [2, 7, 12, 17, 22, 27, 32, 37, 42, 47]
  const c = [3, 8, 13, 18, 23, 28, 33, 38, 43, 48]
  const n = [4, 9, 14, 19, 24, 29, 34, 39, 44, 49]
  const o = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50]

  const [Extroversion, setExtroversion] = useState(0)
  const [Agreeableness, setAgreeableness] = useState(0)
  const [Conscientiousness, setConscientiousness] = useState(0)
  const [Neuroticism, setNeuroticism] = useState(0)
  const [OpennessToExperience, setOpennessToExperience] = useState(0)

  const [E, setE] = useState(0)
  const [A, setA] = useState(0)
  const [C, setC] = useState(0)
  const [N, setN] = useState(0)
  const [O, setO] = useState(0)


  let scoreE = 0
  let scoreA = 0
  let scoreC = 0
  let scoreN = 0
  let scoreO = 0

  const [Submit, setSubmit] = useState(0)


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
      if (e.includes(currentQuestion + 1)) {
        console.log('e includes this question')
        scoreE = 1
        console.log('ScoreE', scoreE)
      } else if (a.includes(currentQuestion + 1)) {
        console.log('a includes this questions')
        scoreA = 1
        console.log('ScoreA', scoreA)
      } else if (c.includes(currentQuestion + 1)) {
        console.log('c includes this questions')
        scoreC = 1
        console.log('ScoreC', scoreC)
      } else if (n.includes(currentQuestion + 1)) {
        console.log('n includes this questions')
        scoreN = 1
        console.log('ScoreN', scoreN)
      } else if (o.includes(currentQuestion + 1)) {
        console.log('o includes this questions')
        scoreO = 1
        console.log('ScoreO', scoreO)
      }
      setAnswerData(newAnswer)
      console.log(answerData)
      setE(scoreE)
      setA(scoreA)
      setC(scoreC)
      setN(scoreN)
      setO(scoreO)
    } else if (event.target.innerHTML === '2') {
      const newAnswer = {
        one: false,
        two: true,
        three: false,
        four: false,
        five: false,
        question: questions[currentQuestion].question_number,
      }
      if (e.includes(currentQuestion + 1)) {
        console.log('e includes this question')
        scoreE = 2
        console.log('ScoreE', scoreE)
      } else if (a.includes(currentQuestion + 1)) {
        console.log('a includes this questions')
        scoreA = 2
      } else if (c.includes(currentQuestion + 1)) {
        console.log('c includes this questions')
        scoreC = 2
      } else if (n.includes(currentQuestion + 1)) {
        console.log('n includes this questions')
        scoreN = 2
      } else if (o.includes(currentQuestion + 1)) {
        console.log('o includes this questions')
        scoreO = 2
      }
      setAnswerData(newAnswer)
      console.log(answerData)
      setE(scoreE)
      setA(scoreA)
      setC(scoreC)
      setN(scoreN)
      setO(scoreO)
    } else if (event.target.innerHTML === '3') {
      const newAnswer = {
        one: false,
        two: false,
        three: true,
        four: false,
        five: false,
        question: questions[currentQuestion].question_number,
      }
      if (e.includes(currentQuestion + 1)) {
        console.log('e includes this question')
        scoreE = 3
        console.log('ScoreE', scoreE)
      } else if (a.includes(currentQuestion + 1)) {
        console.log('a includes this questions')
        scoreA = 3
      } else if (c.includes(currentQuestion + 1)) {
        console.log('c includes this questions')
        scoreC = 3
      } else if (n.includes(currentQuestion + 1)) {
        console.log('n includes this questions')
        scoreN = 3
      } else if (o.includes(currentQuestion + 1)) {
        console.log('o includes this questions')
        scoreO = 3
      }
      setAnswerData(newAnswer)
      console.log(answerData)
      setE(scoreE)
      setA(scoreA)
      setC(scoreC)
      setN(scoreN)
      setO(scoreO)
    } else if (event.target.innerHTML === '4') {
      const newAnswer = {
        one: false,
        two: false,
        three: false,
        four: true,
        five: false,
        question: questions[currentQuestion].question_number,
      }
      if (e.includes(currentQuestion + 1)) {
        console.log('e includes this question')
        scoreE = 4
        console.log('ScoreE', scoreE)
      } else if (a.includes(currentQuestion + 1)) {
        console.log('a includes this questions')
        scoreA = 4
      } else if (c.includes(currentQuestion + 1)) {
        console.log('c includes this questions')
        scoreC = 4
      } else if (n.includes(currentQuestion + 1)) {
        console.log('n includes this questions')
        scoreN = 4
      } else if (o.includes(currentQuestion + 1)) {
        console.log('o includes this questions')
        scoreO = 4
      }
      setAnswerData(newAnswer)
      console.log(answerData)
      setE(scoreE)
      setA(scoreA)
      setC(scoreC)
      setN(scoreN)
      setO(scoreO)
    } else if (event.target.innerHTML === '5') {
      const newAnswer = {
        one: false,
        two: false,
        three: false,
        four: false,
        five: true,
        question: questions[currentQuestion].question_number,
      }
      if (e.includes(currentQuestion + 1)) {
        console.log('e includes this question')
        scoreE = 5
        console.log('ScoreE', scoreE)
      } else if (a.includes(currentQuestion + 1)) {
        console.log('a includes this questions')
        scoreA = 5
      } else if (c.includes(currentQuestion + 1)) {
        console.log('c includes this questions')
        scoreC = 5
      } else if (n.includes(currentQuestion + 1)) {
        console.log('n includes this questions')
        scoreN = 5
      } else if (o.includes(currentQuestion + 1)) {
        console.log('o includes this questions')
        scoreO = 5
      }
      setAnswerData(newAnswer)
      console.log(answerData)
      setE(scoreE)
      setA(scoreA)
      setC(scoreC)
      setN(scoreN)
      setO(scoreO)
    } else {
      console.log('SetAnswer Error')
    }
  }

  //! Set questions and progress
  const handleNext = async () => {
    setCurrentQuestion(currentQuestion + 1)
    setNow(now + 2)
    setExtroversion(Extroversion + E)
    console.log('Extroversion', Extroversion)
    setAgreeableness(Agreeableness + A)
    setConscientiousness(Conscientiousness + C)
    setNeuroticism(Neuroticism + N)
    setOpennessToExperience(OpennessToExperience + O)
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

  const handleSubmit = async () => {
    console.log('set results here')
    // setCurrentQuestion(currentQuestion + 1)
    setSubmit(Submit + 1)
    console.log(Submit)
    setNow(now + 2)
    setExtroversion(Extroversion + E)
    console.log('Extroversion', Extroversion)
    setAgreeableness(Agreeableness + A)
    setConscientiousness(Conscientiousness + C)
    setNeuroticism(Neuroticism + N)
    setOpennessToExperience(OpennessToExperience + O)
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

  const [results, setResults] = useState(false)
  console.log(results)

  const handleResults = () => {
    console.log('Handle Results here')
    setResults(true)
  }

  if (!questions) return null

  return (
    <>
      <ul className='circles'>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <div className="app-description">
        <img className="large-logo" src="/assets/50c1610064e14d1aa26e5c7cf69b67a5.png" />
        <p className="description">﹒The Big 5 Personality Test﹒</p>
      </div>
      <div className="steps">
        <div className="step-container">
          <h4 className="step-header">﹒Complete the Test﹒</h4>
          <p className="step-paragraph"><br /><br />Be yourself and answer honestly to find out your personality type.</p>
        </div>
        <div className="step-container">
          <h4 className="step-header">﹒Submit your Answers﹒</h4>
          <p className="step-paragraph"><br /><br />Your results will be calculated and stored on your profile
          </p>
        </div>
        <div className="step-container">
          <h4 className="step-header">﹒View your Results﹒</h4>
          <p className="step-paragraph"><br /><br />Click on the results button to view your personalised report.</p>
        </div>
      </div>
      <div className="indicator">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <Accordion>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} className="take-test" variant="outline-light" eventKey="0">
              Click to Take Test!
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            {userIsAuthenticated() ?
              <Card.Body>
                <ul>
                  <h3 className="question">{questions[currentQuestion].question}</h3>
                </ul>
                <ButtonToolbar aria-label="Toolbar with button groups">
                  <ButtonGroup className="mr-2" aria-label="First group">
                    <h6>Strongly Disagree</h6>
                    {/* {currentQuestion >= 1 ?
                      <Button className="test-button"
                      onClick={handlePrevious}
                      >←</Button>
                      : null} */}
                    <Button variant="dark" className="test-button" onClick={handleAnswer}>1</Button> <Button variant="dark" className="test-button" onClick={handleAnswer}>2</Button> <Button variant="dark" className="test-button" onClick={handleAnswer}>3</Button> <Button variant="dark" className="test-button" onClick={handleAnswer}>4</Button> <Button variant="dark" className="test-button" onClick={handleAnswer}>5</Button>
                    <h6>Strongly Agree</h6>
                  </ButtonGroup>
                </ButtonToolbar>
                {currentQuestion < 49 ?
                  <Button variant="dark" className="test-button" onClick={handleNext}>→</Button>
                  :
                  <Button onClick={handleSubmit}>Submit</Button>
                }
                <ProgressBar variant="warning" now={now} label={`${now}%`} />
              </Card.Body>
              :
              <Card.Body>
                <h3>Oops...Please login first!</h3>
              </Card.Body>
            }
          </Accordion.Collapse>
        </Card>
      </Accordion >
      {Submit >= 1 ?
        // <Link to={'/profile'} >
        <Button onClick={handleResults}>Results</Button>
        // </Link>
        :
        null
      }
      {
        results ?
          <>
            <div>
              <Doughnut
                data={{
                  labels: ['Extroversion', 'Agreeableness', 'Conscientiousness', 'Neuroticism', 'Openness to Experience'],
                  datasets: [
                    {
                      label: 'Your Personality Trait Scores',
                      data: [Extroversion, Agreeableness, Conscientiousness, Neuroticism, OpennessToExperience],
                      backgroundColor: [
                        'rgba(0, 230, 184, 0.9)',
                        'rgba(255, 51, 119, 0.9)',
                        'rgba(0, 184, 230, 0.9)',
                        'rgba(255, 117, 26, 0.9)',
                        'rgba(196, 77, 255, 0.9)'
                      ],
                      hoverBorderWidth: 5,
                      borderColor: [
                        'rgba(0, 230, 184, 1)',
                        'rgba(255, 51, 119, 1)',
                        'rgba(0, 184, 230, 1)',
                        'rgba(255, 117, 26, 1)',
                        'rgba(196, 77, 255, 1)'
                      ],
                      borderWidth: 1,
                    }
                  ],
                }}
                height={400}
                width={400}
                options={{
                  maintainAspectRatio: false,
                  scales: {
                    yAxes: {
                      ticks: {
                        beginAtZero: true,
                      },
                    },
                  },
                }}
              />
            </div >
          </>
          :
          null
      }
    </>
  )
}


export default Questions
