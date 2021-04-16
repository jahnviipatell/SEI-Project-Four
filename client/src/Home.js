import React, { useEffect } from 'react'
import Questions from './components/content/Questions'

const App = () => {

  useEffect(() => {
    const getData = async () => {
      const res = await fetch('/api/questions')
      console.log(await res.json())
    }
    getData()
  }, [])


  return (
    <Questions />
  )
}

export default App