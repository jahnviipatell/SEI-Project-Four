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
import Carousel from 'react-bootstrap/Carousel'
import largeLogo from '../../assets/50c1610064e14d1aa26e5c7cf69b67a5.png'

const Questions = () => {
  //! Get questions from api
  const [questions, setQuestions] = useState('')

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get('/api/questions/')
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

  const handleResults = () => {
    window.scrollTo(0, 1250)
    console.log('Handle Results here')
    setResults(true)
  }

  // const handleScroll = () => {
  //   window.scrollTo(0, 70)
  // }
  const handleMoreScroll = () => {
    window.scrollTo(0, 600)
  }

  if (!questions) return null

  return (
    <>
      <div className="app-description">
        <img className="large-logo" src={largeLogo} />
        <p className="description">﹒The Big 5 Personality Test﹒</p>
      </div>
      <div className="steps">
        <div className="step-container one">
          <h4 className="step-header">﹒Complete the Test﹒</h4>
          <p className="step-paragraph"><br /><br />Be yourself and answer honestly to find out your personality type.</p>
        </div>
        <div className="step-container two">
          <h4 className="step-header">﹒Submit your Answers﹒</h4>
          <p className="step-paragraph"><br /><br />Your results will be calculated and stored on your profile
          </p>
        </div>
        <div className="step-container three">
          <h4 className="step-header">﹒View your Results﹒</h4>
          <p className="step-paragraph"><br /><br />Click on the results button to view your personalised report.</p>
        </div>
      </div>
      {/* <div className="indicator" onClick={handleScroll}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div> */}
      <div className="second-page">
        <Accordion>
          <Card>
            <Card.Header>
              <Accordion.Toggle onClick={handleMoreScroll} as={Button} className="take-test" variant="outline-light" eventKey="0">
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
                    <Button variant="dark" className="test-button next-button" onClick={handleNext}>→</Button>
                    :
                    <Button className="test-button next-button" onClick={handleSubmit}>Submit</Button>
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
      </div>
      <div className="third-page">
        {Submit >= 1 ?
          // <Link to={'/profile'} >
          <>
            <Button className="test-button next-button results-button" onClick={handleResults}>View Results</Button>
          </>
          // </Link>
          :
          null
        }
        {
          results ?
            <>
              <div className="doughnut">
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
                  height={350}
                  width={350}
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
              <ul className="result-data">
                <Carousel>
                  <Carousel.Item>
                    <br />
                    <br />
                    <li className="E all-li">
                      <h5 className="E-title all-titles">Extroversion</h5>
                      <div className="info-container">
                        <p className="p-one">Extroversion reflects the tendency and intensity to which someone seeks interaction with their environment, particularly socially. It encompasses the comfort and assertiveness levels of people in social situations.<br />Additionally, it also reflects the sources from which someone draws energy.</p>
                        <p className="p-two">
                          <h5 className="title-two">You are the type of person who...</h5>
                          {Extroversion > 20 ?
                            <ul className="bullet-points">
                              <li className="bullet">Thrives on socialising with others.</li>
                              <li className="bullet">Prefers being with others and meeting new people.</li>
                              <li className="bullet">Likes to start conversations and talking to others.</li>
                              <li className="bullet">Has a wide social circle of friends and acquaintances.</li>
                              <li className="bullet">Finds it easy to make new friends.</li>
                              <li className="bullet">Sometimes says things before thinking about them.</li>
                              <li className="bullet">Enjoys being the center of attention.</li>
                            </ul>
                            :
                            <ul className="bullet-points">
                              <li className="bullet">Feels exhausted after socializing.</li>
                              <li className="bullet">Prefers being alone or by themselves.</li>
                              <li className="bullet">Dislikes making small talk or starting conversations.</li>
                              <li className="bullet">Generally thinks things through before speaking.</li>
                              <li className="bullet">Dislikes being the center of attention.</li>
                            </ul>
                          }
                        </p>
                      </div>
                    </li>
                  </Carousel.Item>
                  <Carousel.Item>
                    <br />
                    <br />
                    <li className="A">
                      <h5 className="A-title all-titles">Agreeableness</h5>
                      <div className="info-container">
                        <p className="p-one">Agreeableness refers to how people tend to treat relationships with others. Unlike extroversion which consists of the pursuit of relationships, agreeableness focuses on people’s orientation and interactions with others.</p>
                        <p className="p-two">
                          <h5 className="title-two">You are the type of person who...</h5>
                          {Agreeableness > 20 ?
                            <ul className="bullet-points">
                              <li className="bullet-A">Kind and compassionate toward others.</li>
                              <li className="bullet-A">Has a great deal of interest in and wants to help others.</li>
                              <li className="bullet-A">Feels empathy and concern for other people.</li>
                              <li className="bullet-A">Prefers to cooperate and be helpful.</li>
                            </ul>
                            :
                            <ul className="bullet-points">
                              <li className="bullet-A">Doesn’t care about other people’s feelings or problems.</li>
                              <li className="bullet-A">Takes little interest in others.</li>
                              <li className="bullet-A">Can be seen as insulting or dismissive of others.</li>
                              <li className="bullet-A">Can be manipulative.</li>
                              <li className="bullet-A">Prefers to be competitive and stubborn.</li>
                            </ul>
                          }
                        </p>
                      </div>
                    </li>
                  </Carousel.Item>
                  <Carousel.Item>
                    <br />
                    <br />
                    <li className="C">
                      <h5 className="C-title all-titles">Conscientiousness</h5>
                      <div className="info-container">
                        <p className="p-one">Conscientiousness describes a person’s ability to regulate their impulse control in order to engage in goal-directed behaviors. It measures elements such as control, inhibition, and persistency of behavior.</p>
                        <p className="p-two">
                          <h5 className="title-two">You are the type of person who...</h5>
                          {Conscientiousness > 20 ?
                            <ul className="bullet-points">
                              <li className="bullet-C">Goal- and detail-oriented and are well organized.</li>
                              <li className="bullet-C">Doesn’t give in to impulses.</li>
                              <li className="bullet-C">Finishes important tasks on time.</li>
                              <li className="bullet-C">Enjoys adhering to a schedule.</li>
                              <li className="bullet-C">Is on time when meeting others.</li>
                            </ul>
                            :
                            <ul className="bullet-points">
                              <li className="bullet-C">Dislikes structure and schedules.</li>
                              <li className="bullet-C">Messy and less detail-oriented.</li>
                              <li className="bullet-C">Fails to return things or put them back where they belong.</li>
                              <li className="bullet-C">Procrastinates about important tasks and rarely finishes them on time.</li>
                              <li className="bullet-C">Fails to stick to a schedule.</li>
                              <li className="bullet-C">Is always late when meeting others.</li>
                            </ul>
                          }
                        </p>
                      </div>
                    </li>
                  </Carousel.Item>
                  <Carousel.Item>
                    <br />
                    <br />
                    <li className="N">
                      <h5 className="N-title all-titles">Neuroticism</h5>
                      <div className="info-container">
                        <p className="p-one">Neuroticism describes the overall emotional stability of an individual through how they perceive the world. It takes into account how likely a person is to interpret events as threatening or difficult.

                          It also includes one’s propensity to experience negative emotions.</p>
                        <p className="p-two">
                          <h5 className="title-two">You are the type of person who...</h5>
                          {Neuroticism > 20 ?
                            <ul className="bullet-points">
                              <li className="bullet-N">Gets upset more easily.</li>
                              <li className="bullet-N">Appears anxious, irritable, or moody.</li>
                              <li className="bullet-N">Appears to always be stressed.</li>
                              <li className="bullet-N">Worries constantly.</li>
                              <li className="bullet-N">Experiences visible mood swings.</li>
                              <li className="bullet-N">Struggles to bounce back after troubles in life.</li>
                            </ul>
                            :
                            <ul className="bullet-points">
                              <li className="bullet-N">Emotionally stable and resilient.</li>
                              <li className="bullet-N">Deals well with stress.</li>
                              <li className="bullet-N">Rarely feels sad, moody, or depressed.</li>
                              <li className="bullet-N">Relaxed and doesn’t worry much.</li>
                            </ul>
                          }
                        </p>
                      </div>
                    </li>
                  </Carousel.Item>
                  <Carousel.Item>
                    <br />
                    <br />
                    <li className="O">
                      <h5 className="O-title all-titles">Openness to Experience</h5>
                      <div className="info-container">
                        <p className="p-one">Openness to experience refers to one’s willingness to try new things as well as engage in imaginative and intellectual activities. It includes the ability to “think outside of the box.”</p>
                        <p className="p-two">
                          <h5 className="title-two">You are the type of person who...</h5>
                          {OpennessToExperience > 20 ?
                            <ul className="bullet-points">
                              <li className="bullet-O">More creative or intellectual in focus.</li>
                              <li className="bullet-O">Embraces trying new things or visiting new places.</li>
                              <li className="bullet-O">Enjoys taking on new challenges.</li>
                              <li className="bullet-O">Abstract ideas come more easily.</li>
                            </ul>
                            :
                            <ul className="bullet-points">
                              <li className="bullet-O">More traditional in thinking and less creative.</li>
                              <li className="bullet-O">Avoids change or new ideas.</li>
                              <li className="bullet-O">Does not enjoy new things or visiting new places.</li>
                              <li className="bullet-O">Has trouble with abstract or theoretical concepts.</li>
                            </ul>
                          }
                        </p>
                      </div>
                    </li>
                  </Carousel.Item>
                </Carousel>
              </ul>
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
            </>
            :
            null
        }
      </div>
    </>
  )
}


export default Questions
