import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchComments } from '../redux/actions/commentsActions'

class Comment extends Component {
  
  componentWillMount = () => {
    this.props.fetchComments()
  }

  displayComments = () => {
    const comments = this.props.comments
    comments.map(comment => {
      return (
        <div key={comment.id}>
          <h3>comment.name</h3>
          <textarea>comment.content</textarea>
        </div>
      )
    })
  }

  render(){
    return(
      <div className='comments'>
        {this.displayComments()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    comments: state.comment.all
  }
}

export default connect(mapStateToProps, { fetchComments })(Comment)