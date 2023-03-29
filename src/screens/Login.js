import React, { useState } from "react";
import logo from "../assets/netflix.png";
import SignUp from "./SignUp";

const Login = () => {
  const [signIn, setSignIn] = useState(false);

  return (
    <div className="login">
      <div className="login__background">
        <img src={logo} alt="Netflix logo" className="login__logo" />

        <button onClick={() => setSignIn(true)} className="login__button">
          Sign in
        </button>

        <div className="login__gradient"></div>
      </div>

      <div className="login__body">
        {signIn ? (
          <SignUp />
        ) : (
          <>
            <h1>Unlimited films, TV programmes and more.</h1>
            <h2>Watch anywhere. Cancel at any time.</h2>
            <h3>
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>

            <div className="login__input">
              <form>
                <input type="email" placeholder="Email address" />
                <button
                  onClick={() => setSignIn(true)}
                  className="login__getStarted"
                >
                  Get Started
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Login;
