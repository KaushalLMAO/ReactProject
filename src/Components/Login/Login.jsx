import React from "react";
import "./Login.css";
import { useState } from "react";
import Home from "../Home/Home";
const Login = () => {
  const [logindet, setlogindet] = useState(false);
  const [gamedev, setGamedev] = useState(false);
  const [webdev, setWebdev] = useState(false);
  const [video, setVideo] = useState(false);
  const [datasci, setDatasci] = useState(false);
  const [logindata, setLogindata] = useState({});
  const login = (loggedon) => {
    loggedon.preventDefault();
    const formData = new FormData(loggedon.target);
    const data = Object.fromEntries(formData);
    setLogindata(data);
    if (data.House === "GameDevelopment") {
      setlogindet(true);
      setGamedev(true);
    } else {
      alert("This is only abvailable for GameDevelopment House atm");
      setInterval(() => {
        location.reload();
      }, 100);
    }
  };

  return (
    <>
      <div className="main">
        <div id="formdiv">
          {!logindet && (
            <>
              <p id="intro">SX3C</p>
              <form onSubmit={login} id="form">
                <br /> <br />
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  placeholder="    Enter Your College mail"
                  name="email"
                  required
                />{" "}
                <br /> <br />
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  placeholder="   Enter your Name"
                  name="name"
                  id="name"
                  required
                />{" "}
                <br /> <br /> <br />
                <select name="House" id="HouseSelect" required>
                  <option value="" disabled selected>
                    Select Your House
                  </option>
                  <option value="GameDevelopment">Game Development</option>
                  <option value="WebDevelopment">Web Development</option>
                  <option value="DataScience">Data Science</option>
                  <option value="VideoEditing">Video Editing</option>
                </select>
                {} <br /> <br />
                <button type="submit" id="submit">
                  Submit
                </button>{" "}
                <br /> <br />
              </form>
            </>
          )}
          {logindet && gamedev ? <Home datareq={logindata} /> : ""}
        </div>
      </div>
    </>
  );
};

export default Login;
