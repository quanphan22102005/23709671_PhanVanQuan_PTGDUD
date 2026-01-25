import "./LoginForm.css";

const LoginForm = ({ show, onClose }) => {
  return (
    <div className={`overlay ${show ? "show" : ""}`}>
      <div className="login-form">
        <button className="close-btn" onClick={onClose}>
          ×
        </button>

        <h2>Login</h2>

        <input
          type="text"
          placeholder="Username"
        />

        <input
          type="password"
          placeholder="Password"
        />

        <button className="login-btn">
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginForm;