import React, { useState, useEffect, useRef } from "react";

export default function RenderCount() {
  const [name, setName] = useState("");
  const renderCount = useRef(0);

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  });

  return (
    <>
      <h2>Render Count</h2>
      <input value={name} onChange={(e) => setName(e.target.value)}></input>
      <div>My name is {name}</div>
      <div>I rendered {renderCount.current} times</div>
    </>
  );
}
