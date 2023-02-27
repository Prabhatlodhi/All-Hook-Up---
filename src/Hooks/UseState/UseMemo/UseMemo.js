import React, { useState, useMemo } from "react";

function UseMemo() {
  const [count, setCount] = useState(0);
  const [item, setitem] = useState(5);

  const handleCount = () => {
    setCount(count+1)
  };
  const handleitem = () => {
    setitem(item+1)
  };

  //Below we have use "Usememo" to stop the unneccassry trigging of the function
const StopUnneccasryTrigger = useMemo(
    function unneccaryTrigingFunction(){
            console.log('StopUnneccasryTrigger');
            return count*2
          },[count]
)


  //the following function is triggering in all update no matter weather it is a count or item
//   function unneccaryTrigingFunction(){
//     console.log('unneccaryTrigingFunction');
//     return count*2
//   }


  return (
    <div className="UseMemo">
      <h1>Use Memo Demonstration</h1>
      <h1>{StopUnneccasryTrigger}</h1>
      <h3>{count}</h3>
      <button onClick={handleCount}>For Count</button>
      <h3>{item}</h3>
      <button onClick={handleitem}>For Item</button>
    </div>
  );
}

export default UseMemo;
