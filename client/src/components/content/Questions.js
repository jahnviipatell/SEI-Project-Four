import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import { userIsAuthenticated } from '../auth/helpers/auth'


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

  const handleNext = (event) => {
    console.log('NEXT', event.target.value)
    setCurrentQuestion(currentQuestion + 1)
  }

  const handlePrevious = (event) => {
    console.log('PREVIOUS', event.target.value)
    setCurrentQuestion(currentQuestion - 1)
  }

  console.log(setCurrentQuestion)

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
                    <Button>1</Button> <Button>2</Button> <Button>3</Button> <Button>4</Button> <Button>5</Button>
                    {currentQuestion < 49 ?
                      <Button onClick={handleNext}>→</Button>
                      : null}
                  </ButtonGroup>
                </ButtonToolbar>
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
