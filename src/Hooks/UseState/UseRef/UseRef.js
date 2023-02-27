import React, { useRef } from 'react'

function UseRef() {
    let inputRef = useRef(null);

    function handleInput(){
        console.log(inputRef.current.value);
    }
  return (
    <div className='UseRefPract'>
      <h1>UseRef Practical Starts Here</h1>
      <input type="text" ref={inputRef} onChange={handleInput}/>
      <button >Handle Input</button>
    </div>
  )
}

export default UseRef
