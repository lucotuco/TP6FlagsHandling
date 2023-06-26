import './App.css';
import React, {useState, useEffect} from 'react';

function App() {
  const [randomContent, setRandomContent] = useState({});

  useEffect(() => {
    fetch("https://countriesnow.space/api/v0.1/countries/flag/images")
      .then((response) => response.json())
      .then((data) =>{
        const randomIndex = Math.floor(Math.random() * data.data.length); // Generate a random index
        const randomContent = data.data[randomIndex];
        setRandomContent(randomContent);
      } )
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
        <img src={randomContent.flag}></img>
          {console.log(randomContent)}
    </div>
  );
}

export default App;
