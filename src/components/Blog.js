import React, { Component } from 'react'
import { fetchPosts } from '../redux/actions/blogActions'
import { connect } from 'react-redux';

class Blog extends Component {
  
  componentDidMount = () => {
    this.props.fetchPosts()
  }

  whichPost = () => {
    const postId = parseInt(document.location.href.match(/\d+/g))
    const post = this.props.posts.filter(post => post.id === postId).pop()

    if (typeof(post) === 'undefined'){
      return (
        <div>
          There was an issue with the redux store, please try refreshing. If that doesn't work please let me know by <a href="mailto: kyle@someotherkyle.com">email</a>. Sorry :(
        </div>
      )
    }
    return (
      <div className='blog-content'>
        <h1>{post.title}</h1>
        {post.content}
      </div>
    )
  }

  render(){
    return(
      <div className='row'>
        <div className='col-xs-1 col-sm-1' />
        <div className='col-xs-10 col-sm-10 blog'>
          {this.whichPost()}
        </div>
        <div className='col-xs-1 col-sm-1' />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    posts: state.blog.posts
  }
}

export default connect(mapStateToProps, { fetchPosts })(Blog)