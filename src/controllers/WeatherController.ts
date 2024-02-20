import RespondDTO from "../dtos/RespondDTO";
import express from "express";
require("dotenv").config();
import axios from 'axios';
import UserWeatherDTO from "../dtos/UserWeatherDTO";

export const getCurrentData = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { lat, lon } = req.query; // Extract latitude and longitude from request query parameters
    console.log("dddddddd")
    console.log(lat,lon);
    if (!lat || !lon) {
      throw new Error("Latitude and longitude are required.");
    }

    // Make a GET request to OpenWeatherMap API using axios
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.OPEN_WEATHER_API_KEY}`);
    
    const userWeatherDTO = new UserWeatherDTO(
      response.data.weather[0].description,
      response.data.main.temp,
      response.data.main.feels_like,
      response.data.main.temp_min,
      response.data.main.temp_max,
      response.data.wind.speed,
      response.data.clouds.all,
      response.data.main.pressure,
      response.data.main.humidity,
      response.data.main.sea_level,
      response.data.weather[0].icon, 
      response.data.name,
      response.data.weather[0].main
    );
 
    console.log(userWeatherDTO.toString());
  
    res.status(200).send(new RespondDTO(200, "Success", userWeatherDTO));
  } catch (error) {
    console.error(error);

    res.status(500).send(new RespondDTO(500, "Internal Server Error"));
  }
};
