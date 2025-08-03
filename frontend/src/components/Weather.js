import React, { useState } from "react";

function Weather() {
  const [city, setCity] = useState("");
  const [data, setData] = useState(null);

const getWeather = async () => {
  try {
    const token = localStorage.getItem("token");
    const res = await fetch("https:/weather-app1-wev9.onrender.com//api/weather", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": Bearer `${token}`
      },
      body: JSON.stringify({ city })  // ← important!
    });
    const json = await res.json();
    if (json.error) alert(json.error);
    else setData(json);
  } catch (err) {
    alert("Error fetching weather.");
  }
}

  return (
    <div>
      <h2>Weather App</h2>
      <input value={city} onChange={(e) => setCity(e.target.value)} placeholder="Enter city..." />
      <button onClick={getWeather}>Search</button>
      {data && (
        <div>
          <h3>{data.name}, {data.sys.country}</h3>
          <p>{data.weather[0].description}</p>
          <p>{data.main.temp}°C</p>
        </div>
      )}
    </div>
  );
}

export default Weather;
