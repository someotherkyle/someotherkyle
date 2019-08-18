import React, { Component } from 'react'
import Comments from '../components/Comments'
import { connect } from 'react-redux'
import { setName, setContent, pushComment, fetchComments } from '../redux/actions/commentsActions'

class CommentsContainer extends Component {
  constructor(props){
    super(props)

    this.state = {
      filter: '',
      postId: this.props.postId,
    }
  }

  componentDidMount = () => {
    this.props.fetchComments()
  }

  handleNameChange = e => {
    e.preventDefault()
    this.props.setName(e.target.value)
  }

  handleContentChange = e => {
    e.preventDefault()
    this.props.setContent(e.target.value)
  }

  handleSubmit = e => {
    e.preventDefault()
    if (this.props.comments.name.length > 2 && this.props.comments.content.length > 3){
      let commentInfo = {
        name: this.props.comments.name,
        content: this.props.comments.content,
        postId: this.state.postId
      }
      this.props.setName('')
      this.props.setContent('')
      this.props.pushComment(commentInfo)
    }
  }

  handleFilterChange = e => {
    e.preventDefault()
    this.setState({
      filter: e.target.value
    })
  }

  filterComments = () => {
    let filteredComments = this.props.comments.all.filter( comment => comment.post_id === this.state.postId)
    if (this.state.filter.length > 0){
      let comments = filteredComments
      filteredComments = []
      comments.forEach( comment => {
        if (comment.content.toLowerCase().includes(this.state.filter.toLowerCase())) filteredComments.push(comment)
      })
    }
    return filteredComments
  }

  render(){
    return(
      <div>
        <div className='row new-comments-form'>
          {this.props.comments.error !== '' ? <p>{this.props.comments.error} {this.props.comments.currentActivity}</p> : null}
          <div className='col-sm-2' />
          <div className='col-xs-12 col-sm-4'>
            <form onSubmit={e => this.handleSubmit(e)}>
              <input type='text' placeholder='Name' onChange={e => this.handleNameChange(e)} value={this.props.name} /><br />
              <textarea onChange={e => this.handleContentChange(e)} value={this.props.content} placeholder="Comment" /><br />
              <input type='submit' value='Submit' />
            </form>
          </div>
          <div className='col-xs-12 col-sm-4'>
            <label>Find:</label><br />
            <input type="text" onChange={ e => this.handleFilterChange(e)} />
          </div>
        </div>
        <div className='row comments-wrapper'>
          <Comments comments={this.filterComments()}/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    comments: state.comment
  }
}
export default connect(mapStateToProps, { setName, setContent, pushComment, fetchComments })(CommentsContainer)