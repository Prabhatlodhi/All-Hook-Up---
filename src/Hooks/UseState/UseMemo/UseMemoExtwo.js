import { useState, useRef, useMemo } from "react";

function UseMemoExtwo() {

    const [myNum, setMyNum] = useState(0);
    const [show,setShow] = useState(true);

    const getValue = ()=>{
        return setMyNum(myNum + 1 )
    }

    const countNumber = (num)=>{
        console.log('Log');
        for(let i=0; i<= 1000000000; i++){}
        return num;
    }

   const checkData =  useMemo(()=>{
     return countNumber(myNum);
    },[myNum])

    // const checkData = countNumber(myNum);
    
  return (
    <div className="UseMemoExtwo">
    <h1>ANother Example Here</h1>
        <button onClick={getValue}>Counter</button>
        <p>My new Number :: { checkData }</p>
        <button onClick={()=> setShow(!show)}>
            {
                show ? "You Clicked Me": "Click me please"
            }
        </button>
    </div>
  )
}

export default UseMemoExtwo
