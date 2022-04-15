import React from "react";
import "./css/LogIn&SignUp&Continue.css";
import oke from "../components/images/Image.png";
import vlogo from "../components/images/logo2.png";

const Login = () => {
  return (
    <div>
      <div className="container">
        <div className="leftImage">
          <img src={oke} alt="" />
        </div>

        <div className="Form">
          <form action="">
            <a href="/" class="logoLink">
              <img src={vlogo} alt="" />
            </a>
            <h1>Sign In</h1>

            <div className="inputs">
              <label for="Email">Username or Email</label>
              <br />
              <input type="text" placeholder="Username or Email" name="Email" />
              <br />
              <label for="password">Password</label>
              <br />
              <input type="password" placeholder="Password" name="paswword" />
            </div>

            <button className="Submit">Continue</button>
            <br />

            <p>Don't have an account</p>

            <a href="/Register" className="Ahref">
              <u>Create an account</u>
            </a>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
