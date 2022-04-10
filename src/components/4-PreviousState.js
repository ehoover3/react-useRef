import React, { useState, useRef, useEffect } from "react";

export default function PreviousState() {
  const [name, setName] = useState("");
  const prevName = useRef();

  useEffect(() => {
    prevName.current = name;
  });

  return (
    <>
      <h2>Previous State</h2>
      <input value={name} onChange={(e) => setName(e.target.value)}></input>
      <div>
        My name is {name} and it used to be {prevName.current}
      </div>
    </>
  );
}
