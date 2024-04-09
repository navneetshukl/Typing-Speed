import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Easy = () => {
  const { level } = useParams();
  const [string, setString] = useState("");
  const [time, setTime] = useState(60 * level);

  const decreaseTime = () => {
    setTime((prevTime) => {
      // Check if time is already 0, if yes, do not decrease further
      if (prevTime <= 0) {
        return prevTime;
      } else {
        return prevTime - 1;
      }
    });
  };

  useEffect(() => {
    const intervalId = setInterval(decreaseTime, 1000);

    return () => clearInterval(intervalId);
  }, []);

  // Function to generate random string
  const generate = () => {
    const str = "ABCDEFGHIJKLMNOPQRTSUVWXYZabcdefghijklmnopqrstuvwxyz.";
    const len = str.length;
    let ans = "";
    let c = 0;
    while (ans.length < 1000) {
      const randomNumber = Math.floor(Math.random() * len);
      ans += str[randomNumber]+"  ";
    }

    console.log(ans.length);
    const formattedString = ans.replace(/(.{50})/g, "$1\n");
    setString(formattedString);
  };

  useEffect(() => {
    generate();
  }, []);

  return (
    <div>
      <div className="title">
        {Math.floor(time / 60)}:{time % 60}
      </div>

      {/* <div>{string}</div> */}

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <textarea
          value={string}
          className="input is-large title is-size-1"
          style={{
            width: "170vh",
            height: "50vh",
            marginTop: "30px",
          }}
          
        />
      </div>
    </div>
  );
};

export default Easy;
