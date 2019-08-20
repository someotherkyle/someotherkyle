import React, { Component } from 'react'
import CommentsContainer from '../containers/CommentsContainer'

export default class Blog extends Component {
    state = {
      postId: parseInt(document.location.href.match(/\d+/g)),
      post: {}
    }

  componentDidMount(){
    fetch(`http://74.207.234.74:3001/posts/${this.state.postId}`)
    .then(r => r.json())
    .then(post => this.setState({
      ...this.state,
      post: post
    }))

  }

  componentDidUpdate(){
    document.getElementById('blog-title').innerHTML = this.state.post.title
    document.getElementById('blog-body').innerHTML = this.state.post.content
  }

  render(){
    return(
      <div>
        <div className='row'>
          <div className='col-xs-1 col-sm-1' />
          <div className='col-xs-10 col-sm-10 blog'>
            <h1 id="blog-title">Loading...</h1>
            <div id="blog-body"> </div>
          </div>
          <div className='col-xs-1 col-sm-1' />
        </div>
        <CommentsContainer postId={this.state.postId} />
      </div>
    )
  }
}