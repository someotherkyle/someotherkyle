export const setName = name => {
  return {
    type: 'SET_NAME',
    payload: name
  }
}

export const setContent = content => {
  return {
    type: 'SET_CONTENT',
    payload: content
  }
}

export const pushComment = comment => {
  return dispatch => {
    fetch('http://localhost:3001/comments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        comment: {
          name: comment.name,
          content: comment.content,
        }
      })
    })
    .then(r => {return r.json()})
  }
}
export const fetchComments = () => dispatch =>  {
  return fetch("http://localhost:3001/comments")
  .then(r => r.json())
  .then(comments => 
      comments.map(comment => 
          dispatch({type: 'ADD_COMMENT', payload: comment}))
          )
      }

export const clearComments = () => {
  return {
    type: 'CLEAR_COMMENTS'
  }
}