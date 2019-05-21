import React from 'react'
import './Person.css'
const Person = (props) => {
  return(
    <div className="Person">
      <h4 onClick={props.click} >I am a person {props.name}  </h4>
      <h5>{props.children}</h5>
      <input type="text" value={props.name} onChange={props.valueChange}/>
    </div>
  )
};

export default Person