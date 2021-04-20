import React, { useEffect, useState } from 'react'
import axios from 'axios'
// import { getPayloadFromToken, getTokenFromLocalStorage } from '../auth/helpers/auth'
// import Results from './Results'
import { Doughnut } from 'react-chartjs-2'


const UserProfile = () => {

  const token = window.localStorage.getItem('token')

  const getPayloadFromToken = () => {
    if (!token) return false
    const parts = token.split('.')
    if (parts.length < 3) return false
    return JSON.parse(atob(parts[1]))
  }
  const userID = getPayloadFromToken().sub

  const [userData, setUserData] = useState([])


  useEffect(() => {
    const getUser = async () => {
      const { data } = await axios.get(`/api/auth/${userID}/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      // const MyExtroversion = data.filter(item => {
      //   return (item.answers.question === 1)
      // })
      setUserData(data)
    }
    getUser()
  }, [])

  if (!userData) return null
  console.log(userData)

  // console.log(userData.answers[0].question)
  return (
    <>
      {/* <h3>Hello World</h3> */}
      {/* <p>
        {userData.filter(item => {
          return (item.answers[0].question === 1)
        })}
      </p> */}
      <div>
        <Doughnut
          data={{
            labels: ['Extroversion', 'Agreeableness', 'Conscientiousness', 'Neuroticism', 'Openness to Experience'],
            datasets: [
              {
                label: 'Your Personality Trait Scores',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
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
      </div>

    </>
  )
}

export default UserProfile