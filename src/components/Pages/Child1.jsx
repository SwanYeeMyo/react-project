import React from 'react'
import Child2 from './Child2';
const Child1 = ({loginUser}) => {
  return (
    <div>{loginUser}
      <Child2 loginUser="Login User"/>
    </div>
  
  )
}

export default Child1