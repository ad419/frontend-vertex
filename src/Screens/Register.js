import React from "react";
import "./css/LogIn&SignUp&Continue.css";
import oke from "../components/images/sng.png";
import vlogo from "../components/images/logo2.png";

// Icons for the buttons
import { ImFacebook } from "react-icons/im";
import { GrGoogle } from "react-icons/gr";

const Register = () => {
  return (
    <div>
      <div className="container">
        {/* Images */}
        <div className="leftImage">
          <img src={oke} alt="Sorry for that😅" />
        </div>

        {/* Form */}
        <div className="Form">
          <form action="">
            <a href="/" className="logoLink">
              <img src={vlogo} alt="Sorry for that😅" />
            </a>
            <h1>Sign Up</h1>

            {/* Continue with google and facebook buttons */}
            <div className="GFbuttons">
              <button className="googleOrFacebook">
                Continue with Google <GrGoogle />
              </button>
              <br />

              <button className="googleOrFacebook">
                Continue with Facebook
                <ImFacebook />
              </button>
            </div>

            <p>Or</p>

            <div className="inputs">
              <label for="emai">Email</label>
              <input type="text" name="email" placeholder="Email" />
            </div>

            <button
              className="Submit"
              onClick={(e) => {
                e.preventDefault();
                window.location.href = "continue-register";
              }}
            >
              Continue{" "}
            </button>

            <p>Have an account</p>
            <a href="login" className="Ahref">
              Sign In
            </a>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
