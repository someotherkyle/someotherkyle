import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../redux/actions/blogActions'
import { NavLink } from 'react-router-dom'

class BlogContainer extends Component {

  componentDidMount = () => {
    this.props.fetchPosts()
  }

  render(){
    return(
      <div className='blog'>
        <div className='row'>
          <div className='col-sm-2' />
          <div className='col-xs-12 col-sm-8 blog-intro'>
            <p>Part of the curriculum at <a rel='noopener noreferrer' href="https://flatironschool.com" target="_blank">Flatiron School</a> requires students to write a miniumum of seven blog posts over the duration of the course. I can't say the practice has grown on me but I have come to see some importance to it. This is my attempt to improve at blogging and reinforce a good habit. Feel free to leave a comment with your thoughts and <a href="mailto: kyle@someotherkyle.com">email</a> me about any typos!</p>
          </div>
          <div className='col-sm-2' />
        </div>
        <div className='row'>
          <div className='col-sm-1' />
          <div className='col-xs-12 col-sm-5 blog-titles'>
              <ul>
                <h2>Posts:</h2>
                {this.props.blog.posts.reverse().map(post => {
                  return (
                    <div className='blog-link' key={post.id}>
                      <li>{post.created_at.slice(0,10)}:<br /></li>
                      <NavLink to={`/blog/${post.id}`}>{post.title}</NavLink>
                    </div>
                  )
                })}
              </ul>
          </div>
          <div className='col-xs-12 col-sm-5 todo'>
              <ul>
                <h2>Currently Working On:</h2>
                <li>Move Blog over to here</li>
                <li>Write hosting blog...</li>
                <li>Animate 2048</li>
                <li>Expand 2048</li>
                <li>Find new project...</li>
              </ul>
              <ul className='done'>
                <h2>Completed:</h2>
                <li>Get the database sorted out</li>
                <li>Responsive Design</li>
              </ul>
            </div>
            <div className='col-sm-1' />
          </div>
            
        </div>
      )
    }
  }

  const mapStateToProps = state => {
  return ({
    blog: state.blog
  })
}

export default connect(mapStateToProps, { fetchPosts })(BlogContainer)