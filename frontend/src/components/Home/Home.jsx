import React from "react";
import Options from "../Options/Options";

const Home = () => {
  return (
    <div
      className="columns is-mobile is-centered"
      style={{
        marginTop: "25vh",
        marginBottom: "25vh",
        display: "flex",
        justifyContent: "space-between",
        paddingLeft: "80px",
        paddingRight: "80px",
      }}
    >
      <div className="column has-text-centered">
        <Options difficulty={"Easy"} />
      </div>
      <div className="column has-text-centered">
        <Options difficulty={"Medium"} />
      </div>
      <div className="column has-text-centered">
        <Options difficulty={"Hard"} />
      </div>
    </div>
  );
};

export default Home;
