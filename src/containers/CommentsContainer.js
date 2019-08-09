import React, { Component } from 'react'
import Comments from '../components/Comments'
import { connect } from 'react-redux'
import { setName, setContent, pushComment } from '../redux/actions/commentsActions'

class CommentsContainer extends Component {

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
    if (this.props.comments.name.length > 2 && this.props.comments.content.length > 5){
      let commentInfo = {
        name: this.props.comments.name,
        content: this.props.comments.content
      }
      this.props.pushComment(commentInfo)
    }
  }

  render(){
    return(
      <div className='new-comment-form'>
        <form onSubmit={e => this.handleSubmit(e)}>
          <input type='text' placeholder='Name' onChange={e => this.handleNameChange(e)} />
          <input type='textarea' onChange={e => this.handleContentChange(e)} />
          <input type='submit' value='Submit' />
        </form>
      <Comments />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    comments: state.comment
  }
}
export default connect(mapStateToProps, { setName, setContent, pushComment })(CommentsContainer)