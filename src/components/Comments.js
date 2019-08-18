import React from 'react'

const Comment = props =>  {

  return(
    <div>
      {props.comments.slice(0).reverse().map(comment => (
        <div className='col-xs-8 col-sm-4 comment'>
          {typeof(comment.created_at) !== 'undefined' ? <sub>{comment.created_at.slice(0, 10)} - {comment.name}</sub> : <sub>Now - {comment.name}</sub>}
          <p>{comment.content}</p>
        </div>
      ))}
    </div>
  )
}


export default Comment