import { useState } from "react";
import "./loginSignUp.css";

const LoginSignUp = () => {
  const [action, setAction] = useState("Sign Up");

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    const validationErrors = {};

    if (!formData.username.trim()) {
      validationErrors.username = "username is required";
    } else if (formData.username.length < 5) {
      validationErrors.username = "username needs to be more than 4 characters";
    }

    if (!formData.email.trim()) {
      validationErrors.email = "an email address is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      validationErrors.email = "a valid email address is required";
    }

    if (!formData.password.trim()) {
      validationErrors.password = "password is required";
    } else if (formData.password.length < 6) {
      validationErrors.password = "password should be 6 or more characters";
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      alert("it worked");
    }
  };

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
      <form className="inputs">
        <div className={errors.username ? "error" : "input"}>
          <span className="material-symbols-outlined">person</span>
          <input
            type="text"
            name="username"
            placeholder="username"
            onChange={handleChange}
          />
        </div>
        {errors.username && (
          <span className="error-msg">{errors.username}</span>
        )}

        {action === "Login" ? (
          <div></div>
        ) : (
          <>
            <div className={errors.email ? "error" : "input"}>
              <span className="material-symbols-outlined">mail</span>
              <input
                type="email"
                name="email"
                placeholder="email"
                onChange={handleChange}
              />
            </div>
            {errors.email && <span className="error-msg">{errors.email}</span>}
          </>
        )}

        <div className={errors.password ? "error" : "input"}>
          <span className="material-symbols-outlined">password</span>
          <input
            type="password"
            name="password"
            placeholder="password"
            onChange={handleChange}
          />
        </div>
        {errors.password && (
          <span className="error-msg">{errors.password}</span>
        )}

        {action === "Sign Up" ? (
          <div></div>
        ) : (
          <div className="forgot-password">
            Forgot password?{" "}
            <span
              onClick={() => {
                alert("Check your mail");
              }}
            >
              Click here
            </span>
          </div>
        )}
      </form>
      <div className="button-container">
        {action === "Login" ? (
          <div></div>
        ) : (
          <button
            className="submit"
            type="submit"
            onClick={() => {
              handleSubmit(formData);
            }}
          >
            Sign Up
          </button>
        )}

        {action === "Sign Up" ? (
          <div></div>
        ) : (
          <button
            className="submit"
            type="submit"
            onClick={() => {
              handleSubmit(formData);
            }}
          >
            Login
          </button>
        )}
      </div>
      {action === "Login" ? (
        <div className="no-account">
          Don&apos;t have an account?{" "}
          <span
            onClick={() => {
              setAction("Sign Up");
              setErrors({});
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
              setErrors({});
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
