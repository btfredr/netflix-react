import React from "react";

const SignUp = () => {
  return (
    <div className="signup">
      <form>
        <h1>Sign In</h1>
        <input placeholder="Email" type="email" />
        <input placeholder="Password" type="password" />
        <button type="submit">Submit</button>
        <h4></h4>
      </form>
    </div>
  );
};

export default SignUp;
