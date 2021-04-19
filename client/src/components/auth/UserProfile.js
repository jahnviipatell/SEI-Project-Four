import React, { useEffect, useState } from 'react'
import axios from 'axios'

const UserProfile = () => {


  const [userData, setUserData] = useState(null)

  useEffect(() => {
    const getUser = async () => {
      const token = window.localStorage.getItem('token')
      const response = await axios.get('/api/profile/', {
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


  return (
    <h3>Hello World</h3>
  )
}

export default UserProfile