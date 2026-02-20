import { useEffect } from 'react';
import './App.css';
import axios from 'axios';
import { useState } from 'react';

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/api/jokes')
    .then((response) => setJokes(response.data))
    .catch((error) => {console.log(error)})
})

  return (
    <>
      <h1>Jokes of the day!</h1>
      <p>JOKES: {jokes.length}</p>

      {
        jokes.map((joke) => (
          <div key={joke.id}>
            <h3>{joke.title}</h3>
            <h4>{joke.content}</h4>
          </div>
        ))
      }

    </>
  )
}

export default App
