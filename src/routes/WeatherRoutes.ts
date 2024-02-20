import express from "express";
import * as WeatherController from "../controllers/WeatherController";

//create sxpress router instance
const router = express.Router();

//get Current and forecasts weather data
router.get('/current-data', WeatherController.getCurrentData );

export default router;