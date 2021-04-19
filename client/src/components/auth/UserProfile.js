import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { getPayloadFromToken, getTokenFromLocalStorage } from './helpers/auth'
import Results from './Results'

const UserProfile = () => {

  const token = getTokenFromLocalStorage()
  const userID = getPayloadFromToken().sub

  const [userData, setUserData] = useState(null)

  useEffect(() => {
    const getUser = async () => {
      const response = await axios.get(`/api/auth/${userID}/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      setUserData(response.data)
    }
    getUser()
  }, [])

  if (!userData) return null
  console.log(userData)

  // console.log(userData.answers[0].question)
  return (
    <>
      <h3>Hello World</h3>
      <Results />
    </>
  )
}

export default UserProfile