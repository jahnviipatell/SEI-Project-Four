import React from 'react'

const Results = ({ userData }) => {

  return (
    <div>
      <h3>Helloooo</h3>
      <h3>{userData.answers[0].question}</h3>
    </div>
  )
}

export default Results
