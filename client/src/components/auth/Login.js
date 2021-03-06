import React, { useState } from 'react'
// import { useHistory } from 'react-router-dom'
import axios from 'axios'
// import { Link } from 'react-router-dom'

const Login = () => {

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })
  // const history = useHistory()

  const handleChange = event => {
    const newFormData = { ...formData, [event.target.name]: event.target.value }
    setFormData(newFormData)
    console.log(formData)
  }

  const handleSubmit = async event => {
    event.preventDefault()
    console.log('TOKEN>>>>')
    const response = await axios.post('api/auth/login/', formData)
    window.localStorage.setItem('token', response.data.token)

    // history.push('/profile')
    console.log(response)
    window.location.reload()
  }

  return (
    <form>
      <div className="field">
        <label className="label">Email:</label>
        <div className="control">
          <input
            className="input"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={(event) => handleChange(event)}
          />
        </div>
      </div>
      <div className="field">
        <label className="label">Password:</label>
        <div className="control">
          <input
            className="input"
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={(event) => handleChange(event)}
          />
        </div>
      </div>
      <div className="field">
        {/* <Link to={`/${formData.username}`}> */}
        <button onClick={handleSubmit} type="submit" className="button register-button">Log Me In!</button>
        {/* </Link> */}
      </div>
    </form>
  )
}

export default Login
