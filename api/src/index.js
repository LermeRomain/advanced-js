import openingHours from "./openingHours.js";
import express from "express";
const app = express();
const port = 4000;
 
app.get("/openingHours", (req, res) => {
 res.send(openingHours);
});
 
app.listen(port, () => {
 console.log(`api listening at http://localhost:${port}`);
});
