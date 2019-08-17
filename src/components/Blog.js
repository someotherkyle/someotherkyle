import React, { Component } from 'react'
import { fetchPosts } from '../redux/actions/blogActions'
import { connect } from 'react-redux';

class Blog extends Component {
  
  componentDidMount = () => {
    this.props.fetchPosts()
    this.sleep(300).then(this.whichPost())
  }

  whichPost = () => {
    const postId = parseInt(document.location.href.match(/\d+/g))
    const post = this.props.posts.filter(post => post.id === postId).pop()

    if (typeof(post) === 'undefined'){
      return (
        <div>
          There was an issue with the redux store or the post you are trying to reach does not exist. Please refresh or select the post from <a href="http://someotherkyle.com/blog">here</a>. If that doesn't work please let me know by <a href="mailto: kyle@someotherkyle.com">email</a>. Sorry :(
        </div>
      )
    } else {
      document.getElementById("blog-title").innerHTML = post.title 
      document.getElementById("blog-body").innerHTML = post.content
    }
  }

  sleep = ms => {
    return new Promise(resolve => setTimeout(resolve, ms))
  }

  render(){
    return(
      <div className='row'>
        <div className='col-xs-1 col-sm-1' />
        <div className='col-xs-10 col-sm-10 blog'>
          <h1 id="blog-title"> </h1>
          <div id="blog-body"> </div>
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