import React, { useEffect, useState } from 'react'
import axios from 'axios'
// import { getPayloadFromToken, getTokenFromLocalStorage } from '../auth/helpers/auth'
// import Results from './Results'

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
      <h3>Hello World</h3>
      <p>
        {userData.filter(item => {
          return (item.answers[0].question === 1)
        })}
      </p>

    </>
  )
}

export default UserProfile