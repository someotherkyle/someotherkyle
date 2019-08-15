import React from 'react'

const Comment = props =>  {

  return(
    <div className='comment-wrapper'>
      {props.comments.slice(0).reverse().map(comment => (
        <div key={comment.id}>
          {typeof(comment.created_at) !== 'undefined' ? <sup>{comment.created_at.slice(0, 10)}</sup> : <sup>Now</sup>}
          <div className='text-div'>
            <h3>{comment.name} : </h3>
            <p>{comment.content}</p>
          </div>
        </div>
      ))}
    </div>
  )
}


export default Comment