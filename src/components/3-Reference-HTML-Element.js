import React, { useState, useRef } from "react";

export default function ReferenceElement() {
  const [name, setName] = useState("");
  const inputRef = useRef();

  function focus() {
    console.log(inputRef.current);
    inputRef.current.focus();
  }

  return (
    <>
      <h2>Reference HTML Element</h2>
      <div>NOTE: This is the most common use case for useRef</div>
      <input ref={inputRef} value={name} onChange={(e) => setName(e.target.value)}></input>
      <div>My name is {name}</div>
      <button onClick={focus}>Focus</button>
    </>
  );
}
