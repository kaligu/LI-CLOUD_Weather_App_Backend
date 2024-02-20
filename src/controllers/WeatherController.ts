import RespondDTO from "../dtos/RespondDTO";
import express from "express";
require("dotenv").config();
import axios from 'axios';

export const getCurrentData = async (
  req: express.Request,
  res: express.Response
) => {
  try {

    const lat = 6.7230;
    const lon = 80.0647;
    
    // Make a GET request to OpenWeatherMap API using axios
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.OPEN_WEATHER_API_KEY}`);
    
    // Log the response data
    console.log(response.data);

    res.status(200).send(new RespondDTO(200, "Done"));

  } catch (error) {
    console.error(error);

    res.status(500).send(new RespondDTO(500, "Internal Server Error"));
  } finally {
    
  }
};





