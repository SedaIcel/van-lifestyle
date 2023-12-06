import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { loginUser } from "../api";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);

  const location = useLocation();
  const navigate = useNavigate();
  console.log(location);
  let from = location.state?.from?.pathname || "/host";

  function handleSubmit(event) {
    event.preventDefault();
    setStatus("submitting");

    async function getUser() {
      try {
        const data = await loginUser(formData);
        setError(null);
        localStorage.setItem("loggedin", true);
        navigate(from, { replace: true });
      } catch (err) {
        setError(err);
      } finally {
        setStatus("idle");
      }
    }
    getUser();
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }
  return (
    <div className="login-container">
      {location.state?.message && (
        <h3 className="login-first">{location.state.message}</h3>
      )}
      <h1>Sign in to your account</h1>
      {error?.message && <h3 className="login-first">{error.message}</h3>}
      <form onSubmit={handleSubmit} className="login-form">
        <input
          type="email"
          name="email"
          onChange={handleChange}
          placeholder="Email address"
          value={formData.email}
        />
        <input
          type="password"
          name="password"
          onChange={handleChange}
          placeholder="Password"
          value={formData.password}
        />
        <button disabled={status === "submitting"}>
          {status === "submitting" ? "Logging in..." : "Log in"}
        </button>
      </form>
    </div>
  );
};

export default Login;
