import React, { Component } from 'react'
import { fetchPosts } from '../redux/actions/blogActions'
import { connect } from 'react-redux';
import CommentsContainer from '../containers/CommentsContainer'

class Blog extends Component {

  constructor(props){
    super(props)
    this.state = {
      postId: -1
    }
  }

  componentDidMount = () => {
    this.props.fetchPosts()
    this.setState({
      postId: parseInt(document.location.href.match(/\d+/g))
    })
    this.whichPost()

  }

    whichPost = () => {
    const post = this.props.posts.filter(post => post.id === this.state.postId).pop()

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

  render(){
    return(
      <div>
        <div className='row'>
          <div className='col-xs-1 col-sm-1' />
          <div className='col-xs-10 col-sm-10 blog'>
            <h1 id="blog-title"> </h1>
            <div id="blog-body"> </div>
          </div>
          <div className='col-xs-1 col-sm-1' />
        </div>
        <CommentsContainer postId={this.state.postId} />
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
