import React, { useState } from "react";
import { ProductsConsumer } from "../Context/index";

export default function Study() {
  const { products } = ProductsConsumer();
  console.log(products);
  const [text, setText] = useState();
  const handleTextArea = (e) => {
    if (e.target.value.includes("cebolla"))
      return window.alert("hay cebolla gas, k asko");
  };

  return (
    <>
      {products &&
        products.map((p, i) => {
          return <p key={i}> {p.title} </p>;
        })}
      <p>{text}</p>
      <input type="textarea" onChange={handleTextArea}></input>
    </>
  );
}
