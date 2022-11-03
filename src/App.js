import React, { useState, useEffect } from "react";
import Content from "./components/Content";
import Search from "./components/Search";

function App() {
  const [data, setData] = useState([]);
  const [location, setLocation] = useState("Nukus");
  const [isLoaded, setLoading] = useState(false);
  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "14788c386cmsh641ead1665cfb4cp1f8c58jsne3d924249208",
        "X-RapidAPI-Host": "yahoo-weather5.p.rapidapi.com",
      },
    };

    fetch(
      `https://yahoo-weather5.p.rapidapi.com/weather?location=${location}&format=json&u=c`,
      options
    )
      .then((response) => response.json())
      .then((data) => {
        data && setData(data);
        setLoading(true);
      })
      .catch((err) => console.error(err));
  }, [location]);
  console.log(data);
  const setLoc = (location) => {
    setLocation(location);
  };

  return (
    <div className="App">
      {isLoaded ? <Content data={data} /> : <h1>Loading...</h1>}
    </div>
  );
}

export default App;
