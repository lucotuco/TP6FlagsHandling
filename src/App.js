import React, { useState, useEffect } from "react";

const FlagsGame = () => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [score, setScore] = useState(0);
  const [userInput, setUserInput] = useState("");

  useEffect(() => {
    fetch("https://countriesnow.space/api/v0.1/countries/flag/images")
      .then((response) => response.json())
      .then((data) => {
        setCountries(data.data
          );
      })
      .catch((error) => {
        console.log("Error fetching countries:", error);
      });
  }, []);

  const handleRandomCountry = () => {
    const randomIndex = Math.floor(Math.random() * countries.length);
    const randomCountry = countries[randomIndex];
    setSelectedCountry(randomCountry);
    console.log(randomCountry.name);
  };

  const handleGuess = () => {
    if (userInput === selectedCountry.name) {
      setScore(score + 10);
      handleRandomCountry();
      setUserInput("");
    } else {
      setScore(score - 1);
      setUserInput("");
    }
  };

  useEffect(() => {
    if (countries.length > 0 && selectedCountry === null) {
      handleRandomCountry();
    }
  }, [countries, selectedCountry]);

  return (
    <div>
      <h1>Flags Handling Game</h1>
      {selectedCountry && (
        <div>
          <img src={selectedCountry.flag} alt={"nombre Bandera"} />
          <h2>Guess the Country:</h2>
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
          />
          <button onClick={handleGuess}>Guess</button>
          <p>Score: {score}</p>
        </div>
      )}
    </div>
  );
};

export default FlagsGame;
