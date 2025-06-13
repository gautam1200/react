import React, { useState } from "react";
import axios from "axios";
import { Field, Form, Formik } from "formik";

const WeatherApi = () => {
  const [data, setData] = useState([]);
 const [loction , setLocation] = useState("");
  const ini = { city: "Surat", day: "4" };
  const apiKey = "7ab5239082cc47dcbae50635251306 ";

  const getWeather = (values) => {
    axios
      .get("https://api.weatherapi.com/v1/forecast.json", {
        params: {
          key: apiKey,
          q: values.city,
          days: values.day,
          aqi: "yes",
        },
      })
      .then((res) => {
          console.log(res.data.location.name);
          console.log(res.data.forecast.forecastday);
          setLocation(res.data.location.name);

        setData(res.data.forecast.forecastday);

      })
      .catch((error) => {
        console.error( error);
      });
  };

  return (
    <div className="weather-container">
      <h2>Weather Data</h2>
      
      <Formik initialValues={ini} onSubmit={getWeather}>
        <Form className="weather-form">
          <Field name="city" type='text' placeholder="Enter city" className="input" />
          <Field
            name="day"
            type="number"
            placeholder="Enter days"
            className="input"
          />
          <button type="submit" className="btn">
            Get Data
          </button>
        </Form>
      </Formik>

        <h2>{loction}</h2>
      <div className="forecast-container">
        {data.map((item, index) => (
            <>
            
          <div key={index} className="forecast-card">
            <h3>{item.date}</h3>
            <img src={item.day.condition.icon} alt="weather icon" />
            <p>
              <strong>{item.day.avgtemp_c}°C</strong>
            </p>
            <p>{item.day.condition.text}</p>
            <p>Sunrise: {item.astro.sunrise}</p>
            <p>Sunset: {item.astro.sunset}</p>
            <p>Humidity: {item.day.avghumidity}%</p>
            <p>Wind Speed: {item.day.maxwind_kph} kph</p>
            <p>avg temp: {item.day.avgtemp_c}</p>
            <p>max temp: {item.day.maxtemp_c}</p>
            <p>min temp: {item.day.mintemp_c}</p>
            <p>today rain chance: {item.day.daily_chance_of_rain}%</p>
          </div>
        </>
        ))}
      </div>
    </div>
);
};

export default WeatherApi;