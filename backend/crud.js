const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const port = 8001;
const app = express();
app.use(cors());
app.use(bodyParser.json());

//remember the client has to use the http://localhost:8001/get
let movies = []; //example of keeping storage instead of creating a db

app.get("/get-movie", (req, res) => {
  //what info are we going to send the client
  res.json("placeholder for the crud");
});

// for post request, the client sends the info to what end point? the local host : / post?
app.post("/add-movie", (req, res) => {
  //mhm req.body goes here maybe ?

  const clientsData = req.body;
  // we have it stored in the variable, but where do we send it after
  movies.push(clientsData);
  console.log("Movie added:", clientsData);
  res.status(200).send("Movie added to server memory successfully");
});

// same question for updating.. do i need a database i think its a must in this situation. In react, i just saved in in the state memory
//idk what end point to send this too . and do the post and put request also take arguments of req, res ?
app.put("/update-movie", (req, res) => {
  res.send("Recieved update request"); // using res.send, because i want to send a message to the client's browser console
  res.alert("Update request successful"); // seeing if this works
});

// again, i don't know what end point to send this to. do i make something up ?
app.delete("/delete-movie", (req, res) => {
  res.send("Delete successful");
  res.alert("Delte successful");
});

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
