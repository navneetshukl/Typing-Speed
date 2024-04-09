import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Easy = () => {
  const { level } = useParams();
  const [string, setString] = useState("");
  const [time, setTime] = useState(60 * level);

  const [index, setIndex] = useState(0);
  const [inputchar, setInputchar] = useState("");
  const [correct, setCorrect] = useState(0);

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
    while (ans.length < 400) {
      const randomNumber = Math.floor(Math.random() * len);
      ans += str[randomNumber];
    }

    console.log(ans.length);
    const formattedString = ans.replace(/(.{35})/g, "$1\n");
    setString(formattedString);
  };

  useEffect(() => {
    generate();
  }, []);

  // input function will match the input which is given by user with the generated string
  const input = (e) => {
    const str = e.target.value;
    setInputchar(str);
    let currentchar = str.charAt(index);
    let originalchar = string.charAt(index);
    if (currentchar === originalchar) {
      setCorrect(correct + 1);
    }
    setIndex(index + 1);
  };
  // Function to prevent backspace and delete key press
  const handleKeyDown = (e) => {
    if (e.key === "Backspace" || e.key === "Delete") {
      e.preventDefault();
    }
  };

  const applyColor = () => {
    const arr = string.split("");
    let color = "black";
    if (inputchar.length === 0) {
      return string;
    }
    const coloured = arr.map((char, i) => {
      if (i >= index) {
        color = "black";
      } else if (char === inputchar.charAt(i)) {
        color = "green";
      } else {
        color = "red";
      }
      return (
        <span key={i} style={{ color }}>
          {char}
        </span>
      );
    });

    return coloured;
  };

  const senPostRequest = async (correct, wrong, time, total) => {
    const request=await fetch("http://localhost:8080/")
  };

  return (
    <div>
      <div className="title">
        {Math.floor(time / 60)}:{time % 60}
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            marginLeft: "10px",
            marginRight: "10px",
            textAlign: "center",
            border: "1px solid",
            borderRadius: "10px",
            borderWidth: "5px",
            padding: "10px",
          }}
          className="title is-size-5"
        >
          {applyColor()}
        </div>
        <textarea
          className="input is-large title is-size-5"
          style={{
            width: "150vh",
            height: "30vh",
            marginTop: "3px",
          }}
          onChange={input}
          onKeyDown={handleKeyDown}
        />
        <div>
          <p className="has-text-weight-bold is-size-5">
            Total correct character is : {correct}
          </p>
          <p className="has-text-weight-bold is-size-5">
            Total wrong character is : {index - correct}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Easy;
