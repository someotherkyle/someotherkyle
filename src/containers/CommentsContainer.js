import React, { Component } from 'react'
import Comments from '../components/Comments'
import { connect } from 'react-redux'
import { setName, setContent, pushComment, fetchComments } from '../redux/actions/commentsActions'

class CommentsContainer extends Component {
  constructor(){
    super()

    this.state = {
      filter: ''
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
    if (this.props.comments.name.length > 2 && this.props.comments.content.length > 5){
      let commentInfo = {
        name: this.props.comments.name,
        content: this.props.comments.content
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
    let filteredComments = this.props.comments.all
    if (this.state.filter.length > 0){
      filteredComments = []
      this.props.comments.all.forEach( comment => {
        if (comment.name.toLowerCase().includes(this.state.filter.toLowerCase())) filteredComments.push(comment)
      })
    }
    return filteredComments
  }


  render(){
    return(
      <div>
        {this.props.comments.error !== '' ? <p>{this.props.comments.error} {this.props.comments.currentActivity}</p> : null}
        <div className='new-comment-form'>
          <form onSubmit={e => this.handleSubmit(e)}>
            <input type='text' placeholder='Name' onChange={e => this.handleNameChange(e)} value={this.props.name} /><br />
            <textarea onChange={e => this.handleContentChange(e)} value={this.props.content} /><br />
            <input type='submit' value='Submit' />
          </form>
          <input type="text" onChange={ e => this.handleFilterChange(e)} />
        </div>
        <Comments comments={this.filterComments()}/>
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