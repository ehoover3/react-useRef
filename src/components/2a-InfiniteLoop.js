import React, { useState, useEffect } from "react";

export default function InfiniteLoop() {
  const [name, setName] = useState("");
  const [renderCount, setRenderCount] = useState(0);

  useEffect(() => {
    setRenderCount((prevRenderCount) => prevRenderCount + 1);
  });

  return (
    <>
      <h2>Render Count - INFINITE LOOP!</h2>
      <input value={name} onChange={(e) => setName(e.target.value)}></input>
      <div>My name is {name}</div>
      <div>I rendered {renderCount} times</div>
    </>
  );
}
