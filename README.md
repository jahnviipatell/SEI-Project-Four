# SEI-Project-Four - Traits

My final Software Engineering Immersive project, a complex full-stack application built with Django REST Framework and React. 

# Deployment 
This app has been deployed with Heroku, click to view [Traits](https://traitts.herokuapp.com/).

# Getting Started
1. To install all the dependencies listed in the package.json: `yarn` 
2. Navigate into the shell: `pipenv shell`
3. Run the app on localhost:8000: `python manage.py runserver`
4. Check the console for any issues and if there are any then check the package.json for any dependencies missing. Navigate to http://localhost:8000

# Goal and Timeframe:
- Build a full-stack application by making your own backend and your own front-end
- Use a Python Django API using Django REST Framework to serve your data from a Postgres database
- Consume your API with a separate front-end built with React
- Be a complete product which most likely means multiple relationships and CRUD functionality for at least a couple of models
- Implement thoughtful user stories/wireframes that are significant enough to help you know which features are core MVP and which you can cut
- Have a visually impressive design
- Be deployed online so it's publicly accessible
- Write your code DRY and build your APIs RESTful.
- Timeframe: 8 days

# Technologies Used:
- Django
- Django REST Framework
- PostgreSQL
- PyJWT
- JavaScript (ES6)
- React.js
- HTML, CSS, Sass
- Axios
- Git + GitHub
- react-router-dom
- Chart.js

# Overview
For this project I wanted to try something new and quickly chose to build a personality test. This test was based on the Big 5 traits, using https://openpsychometrics.org/printable/big-five-personality-test.pdf. 
<img width="1436" alt="Screenshot 2021-05-11 at 15 21 27" src="https://user-images.githubusercontent.com/78035012/118381613-741a8c80-b5e4-11eb-9910-b4d8f24c4868.png">

# Process
Using these questions I listed them in order and mapped out which one of the 5 traits each question scores against. 
![Screenshot 2021-05-11 at 15 12 57](https://user-images.githubusercontent.com/78035012/118381623-88f72000-b5e4-11eb-8278-485bddace6ca.png)
I started the development process by building my models, views and serialisers in Django REST Framework to create a SQL database with RESTful features. I spent a good three days building models as I wanted to ascertain that everything was working as I expected and the relationships I had planned were fit for purpose for the functionality I had designed. I used TablePlus to visualise my PostgreSQL database, and Insomnia REST Client to test my backend requests, making sure all relationships between models were correct and that I was receiving the expected JSON responses.

By the start of day four, I was happy with the backend to the point where I was ready to move on to my front-end. I quickly bootstrapped together the main components: Home, Register, Login and the Questionnaire. I used Axios for the data requests from the back-end, creating an API request library that was imported onto each relevant page. I used react-router-dom for page navigation. 

- Once the user has signed up they are able to login and take the personality test. 
<img width="1436" alt="Screenshot 2021-05-11 at 16 12 06" src="https://user-images.githubusercontent.com/78035012/118381632-a4fac180-b5e4-11eb-97ed-580ed2d18cb3.png">
- When the user picks a number and clicks on the → to proceed to the next question the handleAnswer function will post an answer entry to the answer database. 

```
 const handleSubmit = async () => {
    console.log('set results here')
    // setCurrentQuestion(currentQuestion + 1)
    setSubmit(Submit + 1)
    console.log(Submit)
    setNow(now + 2)
    setExtroversion(Extroversion + E)
    console.log('Extroversion', Extroversion)
    setAgreeableness(Agreeableness + A)
    setConscientiousness(Conscientiousness + C)
    setNeuroticism(Neuroticism + N)
    setOpennessToExperience(OpennessToExperience + O)
    try {
      const token = window.localStorage.getItem('token')
      await axios.post('/api/answers/', answerData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      console.log('POSTED ANSWER TO DB')
    } catch (err) {
      setErrors(err.response.data)
      console.log(Errors)
    }
  }
```
- Each handleAnswer will add to the sum total of the corresponding trait total. 
- On submit at the end of the questionnaire the sum total is calculated and the results are displayed using an external package, Chart.js.

![results](https://user-images.githubusercontent.com/78035012/117842376-c6bb1800-b275-11eb-841b-d867e324fa7f.gif)

- A carousel of descriptions of each trait and the user’s results are displayed below the chart. 

# Challenges
- I was keen to improve the user experience by hosting the register and login functionality in the navbar - this was implemented using React-Bootstrap. The only way to close the overlay was to click on the button which triggers the popup action. The user would not usually click on the same button again, instead you’d click away on an empty section of the screen, however this did not trigger the overlay to close. 
<img width="285" alt="Screenshot 2021-05-11 at 17 07 26" src="https://user-images.githubusercontent.com/78035012/118381656-0753c200-b5e5-11eb-9999-9a473473b5fe.png">
This meant it was possible to have an overlap between both popups. I played around with the trigger options given by Bootstrap, specifically ‘Hover’, ‘Focus’ and ‘Click’. With no luck of integrating these, I realised I would need to create a new constant and set state manually.

- My second challenge was populating my questions database, I found myself running commands in the wrong order and accidentally flushing my entire database before converting the data into a json file. 

# Future Features 
- Some added functionality I would have liked to have if I had more time:
- Render user results onto their profile page. 
- A larger database for the results section, so images are displayed alongside the list of traits. 
- Responsive design, so the test can be taken on mobile. 

# Key Learnings 
Going solo for the final project was definitely both a blessing and a curse, as it meant I missed out on some of the perks of collaborative work, such as bouncing ideas off team mates and sorting out any hurdles much sooner. On the flip side I'm happy that 
I decided to trust my ability to build a full-stack app on my own, as all the challenges I faced and was able to overcome in this project helped boost my confidence as a developer.

A big learning experience for me had to do with managing my own workload. I'm afraid I was overly confident about the time and effort that goes into building a full-stack app, and in a state of uninformed optimism, kept on adding new models to the backend to the point where I just couldn't build my front-end fast enough to cope with all the functionality. 
