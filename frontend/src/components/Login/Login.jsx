import React from "react";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="container">
      <h1 className="title is-size-3 has-text-centered mt-5">Login</h1>
      <div className="columns is-centered mt-5">
        <div className="column is-half">
          <form>
            <div className="field">
              <label className="label">Email</label>
              <div className="control">
                <input
                  className="input"
                  type="email"
                  placeholder="Enter your email"
                  name="email"
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
                to="/api/register"
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
