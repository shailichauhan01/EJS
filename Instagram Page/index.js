const express = require("express");
const app = express();
const port = 8080;
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.listen(port, () => {
  console.log(`Server Listenting at http://localhost:${port}`);
});

//fetching data from data.json
app.get("/ig/:username", (req, res) => {
  let {username}=req.params;
  const instaData = require("./data.json");
  const data=instaData[username]
  if(data){
    res.render("instagram.ejs",{data});
  }
  else{
    res.render("error.ejs")
  }
});