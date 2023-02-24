import React from 'react'

const Child1 = (props) => {
  return (
    <div className='child1'>Child1
      <h4 style={{float:"right"}}>{props.data}</h4>
    </div>
  )
}

export default Child1