import express from "express";
import { createAccount, logIn } from "./database.js";
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true })); //有提交表單時使用
//Home page that you can choose to sign in or sign up
app.get("/", (req, res) => {
  res.send(`<h1>Please choose whether you want to sign in or sign up.</h1>
  <a href="/sign_in" style="display: inline-block; padding: 10px 20px; background-color: #0074D9; color: #FFF; text-decoration: none; border-radius: 5px;">Sign In</a>
  <a href="/sign_up" style="display: inline-block; padding: 10px 20px; background-color: #0074D9; color: #FFF; text-decoration: none; border-radius: 5px;">Sign Up</a>
  `);
});
//request the sign up setting from client
app.get("/sign_up", (req, res) => {
  res.send(`<label>Please set your email and password</label>
    <form method="POST">
    <div>email:<input type="text" name="Email" placeholder="please enter your email" /></div>
    <div>password:<input type="password" name="Password" placeholder="please enter your password" /></div>
    <input type="submit" / >
    </form>`);
});
//handle the sign up post request from client
app.post("/sign_up", async (req, res) => {
  const { Email, Password } = req.body;
  try {
    const account = await createAccount(Email, Password); //insert value into database
    res.redirect("/member");
    res.send(account);
  } catch (err) {
    res.send(`<h1>${Email} This email has been registered before!!</h1>`);
  }
});
//request the sign in information from client
app.get("/sign_in", (req, res) => {
  res.send(`<label>Please enter your email and password</label>
      <form method="POST">
      <div>email:<input type="text" name="Email" placeholder="please enter your email" /></div>
      <div>password:<input type="password" name="Password" placeholder="please enter your password" /></div>
      <input type="submit" / >
      </form>`);
});
//handle the sign in post request from client and check the login information is correct or not.
app.post("/sign_in", async (req, res) => {
  const { Email, Password } = req.body;
  try {
    const loginMessage = await logIn(Email, Password); //if sql return the message means login successful otherwise it can't find the correct information in database and return not defined
    if (loginMessage.length > 0) {
      res.redirect("/member");
    }
  } catch (err) {
    res.send("Your Account or Password is wrong please try it again");
  }
});
//if client sign in or sign up successfully it will redirect client to member page !
app.get("/member", (req, res) => {
  res.send(`<h1>Welcome to member's page!!!</h1>`);
});

const port = 3003;
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
