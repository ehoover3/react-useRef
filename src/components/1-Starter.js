import React from "react";
import { useState } from "react";

export default function Starter() {
  const [name, setName] = useState("");
  return (
    <>
      <h2>STARTER</h2>
      <input value={name} onChange={(e) => setName(e.target.value)}></input>
      <div>My name is {name}</div>
    </>
  );
}
