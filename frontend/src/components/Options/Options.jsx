import React from "react";
import { Link } from "react-router-dom";

const Options = (props) => {
  let str = props.difficulty.toLowerCase(); // Convert difficulty to lowercase

  return (
    <div>
      <div className="container">
        <div className="box" style={{ width: "200px", height: "250px" }}>
          <div className="content">
            <p className="title has-text-3">{props.difficulty}</p>
          </div>
          <div className="buttons">
            <Link to={`/${str}/1`} className="button is-fullwidth is-success">
              {" "}
              1 Minute
            </Link>
            <Link to={`/${str}/2`} className="button is-fullwidth is-warning">
              {" "}
              2 Minute
            </Link>
            <Link to={`/${str}/3`} className="button is-fullwidth is-danger">
              {" "}
              3 Minute
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Options;
