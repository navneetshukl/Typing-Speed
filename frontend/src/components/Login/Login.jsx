import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
const Login = () => {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  let navigate = useNavigate();

  const formSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch("http://localhost:8080/user/login", {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    console.log(await response.json());

    if (response.ok) {
      navigate("/home");
    }

    setEmail("");
    setPassword("");
  };

  return (
    <div className="container">
      <h1 className="title is-size-3 has-text-centered mt-5">Login</h1>
      <div className="columns is-centered mt-5">
        <div className="column is-half">
          <form onSubmit={formSubmit}>
            <div className="field">
              <label className="label">Email</label>
              <div className="control">
                <input
                  className="input"
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  required
                />
              </div>
            </div>

            <div className="field">
              <label className="label">Password</label>
              <div className="control">
                <input
                  className="input"
                  type="password"
                  placeholder="Enter your password"
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  required
                />
              </div>
            </div>

            <div className="field">
              <div className="control">
                <button className="button is-primary" type="submit">
                  Submit
                </button>
              </div>
            </div>
          </form>
          <div className="field " style={{ margin: "30px" }}>
            <p>
              Not registered?{" "}
              <Link
                to="/user/signup"
                className="button is-danger is-text is-default is-responsive is-rounded is-link is-focused "
              >
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
