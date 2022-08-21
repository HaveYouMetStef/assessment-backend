const goals = require('../server/db.json')
// console.log(goals);

let id = 5

module.exports = {
  getCompliment: (req, res) => {
    const compliments = [
      "Gee, you're a smart cookie!",
      "Cool shirt!",
      "Your Javascript skills are stellar.",
    ];

    // choose random compliment
    let randomIndex = Math.floor(Math.random() * compliments.length);
    let randomCompliment = compliments[randomIndex];

    res.status(200).send(randomCompliment);
  },
  getFortune: (req, res) => {
    const fortunes = [
      "A beautiful, smart, and loving person will be coming into your life.,",
      "A faithful friend is a strong defense.",
      "A friend asks only for your time not your money.",
      "A friend is a present you give yourself.",
      "A good friendship is often more important than a passionate romance.",
    ];

    // get random fortune
    let randomIndex = Math.floor(Math.random() * fortunes.length);
    let randomFortune = fortunes[randomIndex];

    res.status(200).send(randomFortune);
  },
  getFootball: (req, res) => {
    const teams = [
      "Houston Texans",
      "Dallas Cowboys",
      "Los Angeles Chargers",
      "Las Vegas Raiders",
      "Jacksonville Jaguars",
    ];
    // get random team
    let randomIndex = Math.floor(Math.random() * teams.length);
    let randomTeam = teams[randomIndex];

    res.status(200).send(randomTeam);
  },
  getGoals: (req, res) => {
    const goals = [
      "Become an iOS Developer",
      "Complete the Devmountain Bootcamp",
      "Provide for my family",
      "Solve coding problems",
    ];
    // get random goals
    let randomIndex = Math.floor(Math.random() * goals.length);
    let randomGoal = goals[randomIndex];

    res.status(200).send(randomGoal);
  },
  getInspired: (req, res) => {
    const inspiration = [
      `"When you have a dream, you've got to grab it and never let go."
        — Carol Burnett`,
      `Nothing is impossible. The word itself says 'I'm possible!'"
        — Audrey Hepburn`,
      `"Be courageous. Challenge orthodoxy. Stand up for what you believe in. When you are in your rocking chair talking to your grandchildren many years from now, be sure you have a good story to tell."
        — Amal Clooney`,
      `"You are never too old to set another goal or to dream a new dream."
        — Malala Yousafzai`,
    ];
    let randomIndex = Math.floor(Math.random() * inspiration.length);
    let randomInspiration = inspiration[randomIndex];

    res.status(200).send(randomInspiration);
  },
  postGoals: (req, res) => {
    
    let { goal } = req.body
    // let { goal } = req.body
    req.body.id = id
    req.body.goal = goal
    goals.push(req.body)
    res.status(200).send(goals)
   
    id++ 
  }
};
