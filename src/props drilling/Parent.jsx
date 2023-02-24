import React from 'react'
import Child1 from './Child1';
import Child2 from "./Child2"

const Parent = (props) => {
  return (
    <div className='parent'>Parent
    <h4 style={{float : "right"}}>  {props.data}</h4>
      <Child1 data="Rajani"/>
      <Child2 data="Rajani"/>
    </div>
  )
}

export default Parent