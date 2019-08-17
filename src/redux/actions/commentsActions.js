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
    dispatch({type: 'PUSH_COMMENT', payload: comment})
    fetch('http://74.207.234.74:3001/comments', {
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
    .then(r => r.status === 200 ? dispatch({type: 'CLEAR_ACTIVITY'}) : dispatch({type: 'ERROR'}))
  }
}
export const fetchComments = () => {
  return dispatch => {
    dispatch({type: 'FETCHING_COMMENTS'})
    fetch("http://74.207.234.74:3001/comments")
    .then(r => r.json())
    .then(comments => 
      dispatch({
        type: 'SOURCE_COMMENTS', 
        payload: comments
      })
    )
  }
}
