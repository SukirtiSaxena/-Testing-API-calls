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
    // console.log("apiData",apiData);
    console.log("title", apiData[0].title);
    setTitle(apiData[0].title);
  };

  return (
    <div className="App">
      <div >
        <h3 className="App-header">
          Title of the movies is :{title}
          {/*         {console.log("Retrun title", title)}
           <Title title={title} /> */}
        </h3>
      </div>
    </div>
  );
}


export default App;
