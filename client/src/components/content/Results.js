import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Results = (props) => {
  const token = window.localStorage.getItem('token')

  const [MyAnswers, setMyAnswers] = useState(null)

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get('/api/answers', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      // const MyAnswers = data.filter(item => {

      // })
      setMyAnswers(data)
    }
    getData()
  }, [])

  console.log(props[0].owner.id)
  console.log(props[1].owner.id)
  console.log(MyAnswers)
  return (
    <div>
      <h3>Helloooo</h3>
      {/* <h3>{props.answers[0].question}</h3> */}
      {/* <h4>{Extroversion}</h4> */}
    </div>
  )
}

export default Results
