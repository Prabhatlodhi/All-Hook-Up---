import React, { useEffect, useState } from 'react'

function UseEffects() {

    const [first, setfirst] = useState(0)
    const [second, setsecond] = useState(0)

    useEffect(()=>{
        console.log('First useEffect')
    },[first])

    useEffect(()=>{
        console.log('Second useEffect')
    })

    const handleEffects = ()=>{
        setfirst(first+1)
    }

    const handleEffectsPartTwo = ()=>{
        setsecond(second+1)
    }

  return (
    <div className='UseEffects'>
      <h1>Use Effects in action</h1>
      <h5>{first}</h5>
      <button onClick={handleEffects}>Click here for Useeffect</button>
      <h1>Use Effects in action PART TWO</h1>
      <h5>{second}</h5>
      <button onClick={handleEffectsPartTwo}>Click here for Useeffect- PART TWO </button>
    </div>
  )
}

export default UseEffects
