export const fetchPosts = () => {
  return dispatch => {
    dispatch({type: 'FETCHING_POSTS'})
    fetch("https://74.207.234.74:3001/posts")
    .then(r => r.json())
    .then(posts => {
      dispatch({
        type: 'SOURCE_POSTS', 
        payload: posts.sort((a, b) => {
          let aDate = new Date(a.created_at)
          let bDate = new Date(b.created_at)
          return bDate - aDate
        })
      })
    }
    )
  }
}
