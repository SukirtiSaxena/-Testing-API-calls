import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Title from './Components/Title';

function App() {

  const [title, setTitle] = useState('');

  useEffect(() => {
    getFilms()
  }, []);

  const getFilms = async () => {
    const apiResponse = await axios.get("https://ghibliapi.herokuapp.com/films");
    const apiData = apiResponse.data;
    setTitle(apiData[0].title);
  };

  return (
    <div className="App">
           <Title title={title} /> 
    </div>
  );
}


export default App;
