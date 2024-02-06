import React, { useState } from 'react'
import './Button'
export const myButton = ({className,btnLabel,onbtnClick}) => {
    return (
        <button className={`btn ${className}`}>{btnLabel}</button>
    )
}
export const Button = () => {
    const[count,setCount] = useState(0);
    const decreaseHandler = () => count > 0  && setCount(count - 1);
  return (
    <div>
        <h5>Count {count}</h5>
        {/* <myButton className="increase" btnLabel="Increament"/> */}
        <button className='increase' onClick={()=>setCount(count +1)}>Increase</button>
        <button className='decrease' onClick={decreaseHandler}>Decrease</button>
        {/* <myButton className="Increase" btnLabel="Increasement"/> */}
    </div>
  )
}

export default Button
