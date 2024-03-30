import React from "react";


const Signup = () => {
    return (
      <div>
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-half">
              <h1 className="title is-3 has-text-centered">Register</h1>
              <div className="box">
                <form>
                  <div className="field">
                    <label className="label">Name</label>
                    <div className="control">
                      <input
                        className="input"
                        type="text"
                        placeholder="Enter your name"
                        name="name"
                        required
                      />
                    </div>
                  </div>

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

                  <div className="field is-grouped is-grouped-centered">
                    <div className="control">
                      <button className="button is-primary" type="submit">
                        Submit
                      </button>
                    </div>
                    <div className="control">
                      <button className="button is-link is-light" type="reset">
                        Reset
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Signup;
