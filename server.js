const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    // console.log(req);
    res.send("<h1>Hello world from server.js</h1>");
  });

  app.get("/contact", (req, res) => {
      res.send("Contact me at: henryokonkwo@gmail.com");
  });

  app.get("/about", (req, res) => {
    res.send("My name is Henry Okonkwo, I am a Frontend developer. </br> Versatile Frontend Developer with 3+ years of experience designing and developing interactive user-friendly and cross platform applications in agile environments. Disciplined and hardworking team player with strong critical thinking skills and a solution-driven approach.");
});

app.get("/hobbies", (req, res) => {
    res.send("<ul> <li>Code</li> <li>Game</li> <li>Sleep</li> </ul>")
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  });