import { useState } from "react";
import "./loginSignUp.css";

const LoginSignUp = () => {
  const [action, setAction] = useState("Sign Up");

  return (
    <div className="container">
      <div className="header">
        <div className="logo">
          <span className="material-symbols-outlined">cyclone</span>
        </div>
        <h1>{action === "Sign Up" ? "Create account" : "Welcome back!"}</h1>
        <p>
          {action === "Sign Up"
            ? "please enter your details"
            : "we've missed you"}
        </p>
      </div>
      <div className="inputs">
        <div className="input">
          <span className="material-symbols-outlined">person</span>
          <input type="text" placeholder="username" />
        </div>

        {action === "Login" ? (
          <div></div>
        ) : (
          <div className="input">
            <span className="material-symbols-outlined">mail</span>
            <input type="email" placeholder="email" />
          </div>
        )}

        <div className="input">
          <span className="material-symbols-outlined">password</span>
          <input type="password" placeholder="password" />
        </div>

        {action === "Sign Up" ? (
          <div></div>
        ) : (
          <div className="forgot-password">
            Forgot password?{" "}
            <span
              onClick={() => {
                alert("you forgot!");
              }}
            >
              Click here
            </span>
          </div>
        )}
      </div>
      <div className="button-container">
        {action === "Login" ? (
          <div></div>
        ) : (
          <button className="submit">Sign Up</button>
        )}

        {action === "Sign Up" ? (
          <div></div>
        ) : (
          <button className="submit">Login</button>
        )}
      </div>
      {action === "Login" ? (
        <div className="no-account">
          Don&apos;t have an account?{" "}
          <span
            onClick={() => {
              setAction("Sign Up");
            }}
          >
            Sign Up
          </span>
        </div>
      ) : (
        <div className="no-account">
          Already have an account?{" "}
          <span
            onClick={() => {
              setAction("Login");
            }}
          >
            Login
          </span>
        </div>
      )}
    </div>
  );
};

export default LoginSignUp;
