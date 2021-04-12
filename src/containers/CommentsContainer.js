import React, { Component } from 'react'
import Comments from '../components/Comments'

export default class CommentsContainer extends Component {
  constructor(props){
    super(props)

    this.state = {
      name: '',
      content: '',
      postId: this.props.postId,
      comments: [],
    }
  }

  componentDidMount(){
    this.fetchComments()
  }

  fetchComments = () => {
    fetch("https://74.207.234.74:3001/comments")
    .then(r => r.json())
    .then(comments => this.setState({
      ...this.state,
      comments: comments.filter(comment => comment.post_id === this.state.postId),
    }))
  }

  pushComment = () => {
    fetch('https://74.207.234.74:3001/comments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        comment: {
          name: this.state.name,
          content: this.state.content,
          post_id: this.state.postId
        }
      })
    })
  }

  handleNameChange = e => {
    e.preventDefault()
    this.setState({
      ...this.state,
      name: e.target.value
    })
  }

  handleContentChange = e => {
    e.preventDefault()
    this.setState({
      ...this.state,
      content: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    if (this.state.name.length > 2 && this.state.content.length > 3){
      const commentInfo = {
        name: this.state.name,
        content: this.state.content,
        postId: this.state.postId
      }
      this.setState({
        ...this.state,
        name: '',
        content: '',
        comments: [...this.state.comments, commentInfo]
      })
      this.pushComment()
      let form = document.getElementById('new-comment-form')
      form.reset()
    }
  }

  // handleFilterChange = e => {
  //   e.preventDefault()
  //   this.setState({
  //     ...this.state,
  //     filter: e.target.value
  //   })
  //   this.filterComments()
  // }

  // filterComments = () => {
  //   let filteredComments = []
  //   if (this.state.filter.length > 0){
  //     this.state.comments.forEach(comment => {
  //       if (comment.content.toLowerCase().includes(this.state.filter.toLowerCase())) filteredComments.push(comment)
  //     })
  //     this.setState({
  //       ...this.state,
  //       filteredComments: filteredComments
  //     })
  //   } else {
  //     this.setState({
  //       ...this.state,
  //       filteredComments: this.state.comments
  //     })
  //   }
  // }

  render(){
    return(
      <div className="comments-wrapper">
        <div className='new-comments'>
          <form id="new-comment-form" onSubmit={e => this.handleSubmit(e)}>
            <input type='text' placeholder='Name' onChange={e => this.handleNameChange(e)} value={this.props.name} /><br />
            <textarea onChange={e => this.handleContentChange(e)} value={this.props.content} placeholder="Comment" /><br />
            <input type='submit' value='Submit' />
          </form>
        </div>
        <div className='comments-wrapper'>
          {this.state.comments.map(comment => <Comments name={comment.name} content={comment.content} created_at={comment.created_at} id={comment.id} key={comment.id} />)}
        </div>
    </div>
    )
  }
}
