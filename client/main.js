const complimentBtn = document.getElementById("complimentButton");

// fortune button
const fortuneBtn = document.getElementById("fortuneButton");

// football button
const footballBtn = document.getElementById("footballButton");

// goals button
const goalsBtn = document.getElementById("goalsButton");

// inspired button
const inspireBtn = document.getElementById("inspireButton");

// new goals button
const newGoalsBtn = document.getElementById("newGoalsButton")

// delete button
const deleteBtn = document.getElementById("deleteButton")

const goalsCallback = ({ data: goals }) => displayGoals(goals)

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

const postGoals = (e) => {
  e.preventDefault()
  
  let goal = document.querySelector('#newGoalsBtn')
  let nextGoal = document.querySelector('#nextGoal')
  // console.log(nextGoal);
  let bodyObj = {
    // id: id.value,
    nextGoal: nextGoal.value,
    // goal: goal.value
  }
  console.log(bodyObj);
  // id.value = ''
  // goal.value = ''
  
  alert(bodyObj.nextGoal)

  axios.post("http://localhost:4000/api/compliment/", bodyObj).then((res) => {
      console.log('find me')
        // id.value = ''
        // goal.value = ''
        const {data} = res.data;
        // alert(data)
    })
}

const deleteGoals = (id) => {
    axios.delete("http://localhost:4000/api/compliment/", id).then ((res) => {
        
    }) 
}

function displayGoals(string) {
  for (let i = 0; i < string.length; i++) {
    return
  }
}

complimentBtn.addEventListener("click", getCompliment);
fortuneBtn.addEventListener("click", getFortune);
footballBtn.addEventListener("mouseover", getFootball);
goalsBtn.addEventListener("click", getGoals);
inspireBtn.addEventListener("click", getInspired);
newGoalsBtn.addEventListener('click', postGoals)