const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
const path = require("path");
//Assignment-1
app.use("/static", express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.end("<h1>Welcome to Aaren's Server");
});
// Assignment-2
app.get("/data", (req, res) => {
  const dataNumber = req.query.number;
  let sum = 0;
  if (!dataNumber) {
    //Condition1
    return res.end("Lack of Parameter");
  } else if (
    //Condition2
    isNaN(dataNumber) ||
    parseInt(dataNumber) < 1 ||
    parseInt(dataNumber) !== parseFloat(dataNumber)
  ) {
    return res.end("Parameter should be positive integer");
  } else {
    //Condition3&4
    const num = parseInt(dataNumber);
    sum = (num * (num + 1)) / 2;
    return res.end(`Result=${sum}`);
  }
});

//Assignment4
app.get("/myName", (req, res) => {
  const userName = req.cookies.userName;
  if (userName) {
    res.send(`<h1>Hello ${userName}</h1>`);
  } else {
    res.send(`<form action="/trackName" method="POST" >
              <label for="userName">請輸入你的名字</label>
            <input type="text" id="name" name="userName"> 
            <input type="submit" value="Submit"> 
            </form>`);
  }
}); //這邊我忘記在input裡面設定name屬性，print出來一直是undefined，不夠熟所以找了超久，我發誓要把html與後端相關的屬性關係搞懂QQ

app.post("/trackName", (req, res) => {
  const userName = req.body.userName;
  res.cookie("userName", userName);
  res.redirect("/myName");
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
