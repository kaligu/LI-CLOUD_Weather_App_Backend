import RespondDTO from "../dtos/RespondDTO";
import express from "express";
require("dotenv").config();

export const getCurrentData = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    
    console.log(req.body);
    res.status(200).send(new RespondDTO(200, "Done"));
  } catch (error) {
    console.error(error);

    res.status(500).send(new RespondDTO(500, "Internal Server Error"));
  } finally {
    
  }
};





