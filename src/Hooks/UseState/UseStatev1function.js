import { useState } from "react"

function UseStatev1function() {

  //initialName is the getter function
  //finalName is the setter function

  const [initialName, setfinalName] = useState('Initial Name');

  const handleChange = ()=>{
    // console.log(useState) 
    setfinalName('Name I want to display after click')
  }  

  return (
    <div className="functionBasedCompo">
      <h1>Function Based Component Starts below</h1>
      <h1>{initialName}</h1>
      <button onClick={handleChange}>Click Me</button>
    </div>
  )
}

export default UseStatev1function
