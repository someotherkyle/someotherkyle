import React, { Component } from 'react'
import { connect } from 'react-redux'

class Comment extends Component {

  render(){
    return(
      <div className='comment-wrapper'>
        {this.props.comments.slice(0).reverse().map(comment => (
          <div className='text-div' key={comment.id}>
            <h3>{comment.name} : </h3>
            <p>{comment.content}</p>
          </div>
        ))}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    comments: state.comment.all
  }
}

export default connect(mapStateToProps)(Comment)