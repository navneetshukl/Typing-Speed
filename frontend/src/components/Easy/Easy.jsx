import React, { useEffect, useState } from "react";

const Easy = () => {
  const [string, setString] = useState("");
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
    setString(ans);
  };

  useEffect(() => {
    generate();
  }, []);

  return (
    <div>
      {string}: {string.length}
    </div>
  );
};

export default Easy;
