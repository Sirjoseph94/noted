require("dotenv").config();
import express from "express";

const app = express();
const port = process.env.PORT;

const a = 0
app.get("/", (req, res) => {
	res.send("Group 4 project!");
});

app.listen(port, () => {
	console.log(`listening on port ${port}`);
});
