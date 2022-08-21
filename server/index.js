const express = require("express");
const cors = require("cors");
const { getCompliment, getFortune } = require("./controller");
// const { getFortune } = require('./controller')
const { getFootball } = require("./controller");
const { getGoals } = require("./controller");
const { getInspired } = require("./controller");

const app = express();

// middleware
app.use(cors());

app.use(express.json());

// const { getFortune } = require('./controller')

// endpoints
app.get("/api/compliment", getCompliment);
app.get("/api/compliment/:id", getFortune);
app.get("/api/compliment/:id/team", getFootball);
app.get("/api/compliment/:id/goals", getGoals);
app.get("/api/compliment/:id/inspire", getInspired);

app.listen(4000, () => console.log("Server running on 4000"));
