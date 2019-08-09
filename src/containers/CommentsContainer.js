import React, { Component } from 'react'
import Comments from '../components/Comments'
import { connect } from 'react-redux'

class CommentsContainer extends Component {

  handleNameChange = e => {
    e.preventDefault()
    this.updateName(e.target.value)
  }

  handleSubmit = e => {
    e.preventDefault()

  }
  render(){
    return(
      <div className='new-comment-form'>
        <form onSubmit={e => this.handleSubmit(e)}>
          <input type='text' placeholder='Name' onChange={e => this.handleNameChange(e)} />
          <input type='textarea' onChange={e => this.handleFieldChange(e)} />
          <input type='submit' value='Submit' />
        </form>
      <Comments />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    comments: state.comments
  }
}
export default connect(mapStateToProps)(CommentsContainer)