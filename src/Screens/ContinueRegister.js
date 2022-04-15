import React from "react";
import oke from "../components/images/goca.png";
import vlogo from "../components/images/logo1.png";
import "./css/LogIn&SignUp&Continue.css";

const ContinueRegister = () => {
  return (
    <div>
      <div className="container">
        <div className="leftImage">
          <img src={oke} alt="Sorry for that😅" />
        </div>

        <div className="Form">
          <form action="">
            <a href="/" className="logoLink">
              <img src={vlogo} alt="Sorry for that😅" />
            </a>
            <h1>Registration</h1>
            {/* First Name and Last Name*/}
            <div className="inputs">
              <label for="">First Name</label>
              <input type="text" placeholder="First Name" />
              <label className="rlabel">Last Name</label>
              <input type="text" placeholder="Last Name" />
              <label for="phoneNumber">Phone Number</label>
              <input
                type="number"
                placeholder="Phone Number"
                name="phoneNumber"
              />

              <label for="region">Region</label>
              <input type="text" placeholder="Region" name="region" />
              <label for="password">Password</label>
              <input type="password" placeholder="Password" name="password" />
            </div>
            <button className="Submit">Continue</button>
          </form>

          {/* <Input/> */}
        </div>
      </div>
    </div>
  );
};

export default ContinueRegister;
