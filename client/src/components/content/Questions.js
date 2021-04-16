// import React, { useState, useEffect } from 'react'
// import axios from 'axios'
// import Carousel from 'react-bootstrap/Carousel'


// const Questions = () => {

//   const [questions, setQuestions] = useState([])

//   useEffect(() => {
//     const getData = async () => {
//       const { data } = await axios.get('/api/questions')
//       setQuestions(data)
//     }
//     getData()
//     // console.log(questions)
//   }, [])

//   if (!questions) return null

//   return (
//     <>
//       <div>
//         <Carousel>
//           {questions.map(question => (
//             // <>
//             <Carousel.Item key={question._id}>
//               <Carousel.Caption key={question._id}>
//                 <h3 key={question._id}>{question.question}</h3>
//               </Carousel.Caption>
//             </Carousel.Item>
//             // </>
//           ))}
//         </Carousel>
//       </div>
//     </>
//   )
// }

// export default Questions
