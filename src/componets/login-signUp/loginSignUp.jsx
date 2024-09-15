import "./loginSignUp.css";

const LoginSignUp = () => {
  return (
    <div className="container">
      <div className="header">
        <div className="logo">
          <span className="material-symbols-outlined">cyclone</span>
        </div>
        <h1>Create account</h1>
        <p>please enter your details</p>
      </div>
      <div className="inputs">
        <div className="input">
          <span className="material-symbols-outlined">person</span>
          <input type="text" placeholder="username" />
        </div>
        <div className="input">
          <span className="material-symbols-outlined">mail</span>
          <input type="email" placeholder="email" />
        </div>
        <div className="input">
          <span className="material-symbols-outlined">key</span>
          <input type="password" placeholder="password" />
        </div>
        <div className="forgot-password">
          Forgot password? <span>Click here</span>
        </div>
      </div>
      <div className="button-container">
        <button>Sign Up</button>
        <button>Login</button>
      </div>
    </div>
  );
};

export default LoginSignUp;
