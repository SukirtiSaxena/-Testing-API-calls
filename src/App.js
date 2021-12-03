import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Title from './Components/Title';

function App() {

  const [title, setTitle] = useState('');
  const [errMsg, setErrorMsg] = useState('');

  const getFilms = async () => {
    try {
      const apiResponse = await axios.get("https://ghibliapi.herokuapp.com/films");
      const apiData = apiResponse.data;
      setTitle(apiData[0].title);
      setErrorMsg(null);
    }
    catch (error) {
      if (error.response.status === 500)
        setErrorMsg('Oops… something went wrong, try again 🤕');
      else if (error.response.status === 418)
        setErrorMsg("418 I'm a tea pot 🫖, silly");
      else
        setErrorMsg("Got some Error. check back your code");
    }
  };

  useEffect(() => {
    getFilms()
  }, []);

  return (
    <div className="App">
      <Title title={title} />
      <p> {errMsg} </p>
    </div>
  );
}


export default App;