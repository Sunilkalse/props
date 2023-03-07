import React from 'react'
import Parent from './Parent';

const Grandparent = (props) => {
  return (
    <div className='grandparent'>Grandparent
              <h4 style={{float : "right"}}>{props.data}</h4>
              {/* <h1>{props.children}</h1> props children*/}
        <Parent data="Rajani"/>
        <h1>hiii</h1>
    </div>
  )
}

export default Grandparent