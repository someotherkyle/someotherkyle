import React from 'react'

const Comment = props =>  {

  return(
    <div>
        <div className='comment' key={props.id}>
          {typeof(props.created_at) !== 'undefined' ? <sub>{props.created_at.slice(0, 10)} - {props.name}</sub> : <sub>Now - {props.name}</sub>}
          <p>{props.content}</p>
        </div>
    </div>
  )
}


export default Comment