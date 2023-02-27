import React, { useState } from "react";

function UseMemo() {
  const [count, setCount] = useState(0);
  const [item, setitem] = useState(5);

  const handleCount = () => {
    setCount(count+1)
  };
  const handleitem = () => {
    setitem(item+1)
  };
  return (
    <div className="UseMemo">
      <h1>Use Memo Demonstration</h1>
      <h3>{count}</h3>
      <button onClick={handleCount}>For Count</button>
      <h3>{item}</h3>
      <button onClick={handleitem}>For Item</button>
    </div>
  );
}

export default UseMemo;
