export const fetchPosts = () => {
  return dispatch => {
    dispatch({type: 'FETCHING_POSTS'})
    fetch("http://localhost:3001/posts")
    .then(r => r.json())
    .then(posts => 
      dispatch({
        type: 'SOURCE_POSTS', 
        payload: posts
      })
    )
  }
}