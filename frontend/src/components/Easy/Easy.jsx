import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Easy = () => {
  const { level } = useParams();
  const [string, setString] = useState("");
  const [time, setTime] = useState(60 * level); // Initialize time with initial value

  // Function to decrease time by 1 second
  const decreaseTime = () => {
    setTime((prevTime) => {
      // Check if time is already 0, if yes, do not decrease further
      if (prevTime <= 0) {
        return prevTime;
      } else {
        return prevTime - 1; // Decrease time by 1 second
      }
    });
  };

  // Use useEffect to start the interval when component mounts
  useEffect(() => {
    const intervalId = setInterval(decreaseTime, 1000);

    // Cleanup function to clear interval when component unmounts
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures useEffect runs only once, like componentDidMount

  // Function to generate random string
  const generate = () => {
    const str = "ABCDEFGHIJKLMNOPQRTSUVWXYZabcdefghijklmnopqrstuvwxyz.";
    const len = str.length;
    let ans = "";
    let c = 0;
    while (ans.length < 100) {
      const randomNumber = Math.floor(Math.random() * len);
      ans += str[randomNumber];
    }

    console.log(ans.length);
    setString(ans); // Update string state with generated random string
  };

  useEffect(() => {
    generate(); // Call generate function when component mounts
  }, []);

  return (
    <>
      <div className="title">
        {Math.floor(time / 60)}:{time % 60}
      </div>
      <div>
        {string}: {string.length}
      </div>
    </>
  );
};

export default Easy;
