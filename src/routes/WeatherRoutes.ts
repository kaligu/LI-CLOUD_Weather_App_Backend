import express from "express";
import * as WeatherController from "../controllers/WeatherController";

//create sxpress router instance
const router = express.Router();

//get Current and forecasts weather data
router.get('/current-data', WeatherController.getCurrentData );

router.get('/test', WeatherController.getTest );

export default router;