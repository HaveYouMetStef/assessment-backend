const complimentBtn = document.getElementById("complimentButton");

// fortune button
const fortuneBtn = document.getElementById("fortuneButton");

// football button
const footballBtn = document.getElementById("footballButton");

// goals button
const goalsBtn = document.getElementById("goalsButton");

// inspired button
const inspireBtn = document.getElementById("inspireButton");

const getCompliment = () => {
  axios.get("http://localhost:4000/api/compliment/").then((res) => {
    const data = res.data;
    alert(data);
  });
};
const getFortune = () => {
  axios.get("http://localhost:4000/api/compliment/:id").then((res) => {
    const data = res.data;
    alert(data);
  });
};

const getFootball = () => {
  axios.get("http://localhost:4000/api/compliment/:id/team").then((res) => {
    const data = res.data;
    alert(data);
  });
};

const getGoals = () => {
  axios.get("http://localhost:4000/api/compliment/:id/goals").then((res) => {
    const data = res.data;
    console.log(data);
  });
};

const getInspired = () => {
  axios.get("http://localhost:4000/api/compliment/:id/inspire").then((res) => {
    const data = res.data;
    alert(data);
  });
};

complimentBtn.addEventListener("click", getCompliment);
fortuneBtn.addEventListener("click", getFortune);
footballBtn.addEventListener("mouseover", getFootball);
goalsBtn.addEventListener("click", getGoals);
inspireBtn.addEventListener("click", getInspired);
