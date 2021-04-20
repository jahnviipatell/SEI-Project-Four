import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    password_confirmation: '',
  })

  const [errors, setErrors] = useState({
    username: '',
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    password_confirmation: '',
  })

  const handleChange = event => {
    //? set state when user types
    /// console.log(event.target.value)
    /// console.log(formData['username'])
    const newFormData = { ...formData, [event.target.name]: event.target.value }
    setFormData(newFormData)
  }

  const handleSubmit = async event => {
    event.preventDefault()
    try {
      const response = await axios.post('/api/auth/register/', formData)
      console.log(response)
    } catch (err) {
      console.log(err)
      setErrors(err)
    }
    window.location.reload()
  }

  return (
    <form className="column is-half is-offset-one-quarter box"
    // onSubmit={handleSubmit}
    >
      <div className="field">
        <label className="label">Username:</label>
        <div className="control">
          <input
            className={`input ${errors.username ? 'is-danger' : ''}`}
            placeholder="e.g. Jahnvi123"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </div>
        {errors.username && <p className="help is-danger">{errors.username}</p>}
      </div>
      <div className="field">
        <label className="label">First Name:</label>
        <div className="control">
          <input
            className={`input ${errors.first_name ? 'is-danger' : ''}`}
            placeholder="e.g. Jahnvi"
            name="first_name"
            value={formData.first_name}
            onChange={handleChange}
          />
        </div>
        {errors.first_name && <p className="help is-danger">{errors.first_name}</p>}
      </div>
      <div className="field">
        <label className="label">Last Name:</label>
        <div className="control">
          <input
            className={`input ${errors.last_name ? 'is-danger' : ''}`}
            placeholder="e.g. Patel"
            name="last_name"
            value={formData.last_name}
            onChange={handleChange}
          />
        </div>
        {errors.last_name && <p className="help is-danger">{errors.last_name}</p>}
      </div>
      <div className="field">
        <label className="label">Email:</label>
        <div className="control">
          <input
            className={`input ${errors.email ? 'is-danger' : ''}`}
            placeholder="e.g. jahnvi@email.com"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        {errors.email && <p className="help is-danger">{errors.email}</p>}
      </div>
      <div className="field">
        <label className="label">Password:</label>
        <div className="control">
          <input
            className={`input ${errors.password ? 'is-danger' : ''}`}
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        {errors.password && <p className="help is-danger">{errors.password}</p>}
      </div>
      <div className="field">
        <label className="label"></label>
        <div className="control">
          <input
            className={`input ${errors.password_confirmation ? 'is-danger' : ''}`}
            type="password"
            placeholder="Password Confirmation"
            name="password_confirmation"
            value={formData.password_confirmation}
            onChange={handleChange}
          />
        </div>
        {errors.password_confirmation && <p className="help is-danger">{errors.password_confirmation}</p>}
      </div>
      <Link to={`/${formData.username}`}>
        <button onClick={handleSubmit} type="submit" className="button register-button">Register Me!</button>
      </Link>
    </form>
  )

}

export default Register