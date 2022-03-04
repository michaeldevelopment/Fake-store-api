import React, { useState } from "react";

export default function Study() {
  const [text, setText] = useState();
  const handleTextArea = (e) => {
    if (e.target.value.includes("cebolla"))
      return window.alert("hay cebolla gas, k asko");
  };

  return (
    <>
      <p>{text}</p>
      <input type="textarea" onChange={handleTextArea}></input>
    </>
  );
}
