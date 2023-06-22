import {onRequest} from "firebase-functions/v2/https";
import logger, { log } from "firebase-functions/logger";
import express from "express";
import cors from "cors";
import { addNewCandy, getAllCandy } from "./src/candy";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/test", (req, res) => {
    res.send("It's wokring!")
});

app.get("/candy", getAllCandy);
app.post("/candy", addNewCandy);
// test


export const api = onRequest({maxInstances: 10}, app);




