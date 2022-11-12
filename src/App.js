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
      .then((response) => {
        setLoading(false);
        if (response.status === 200) {
          return response.json();
        }
        if (response.status === 500) {
          setLoc("Nukus");
          return alert("Please, enter correct city name!");
        }
      })
      .then((data) => {
        data && setData(data);
        setLoading(true);
      })
      .catch((err) => {
        console.log(err.statusText);
      });
  }, [location]);

  const setLoc = (location) => {
    setLocation(location);
  };

  return (
    <>
      <Search setLoc={setLoc} />
      <div className="App">
        {isLoaded ? <Content data={data} /> : <h1>Loading...</h1>}
      </div>
    </>
  );
}

export default App;
