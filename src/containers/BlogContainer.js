import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../redux/actions/blogActions'
import { NavLink } from 'react-router-dom'

class BlogContainer extends Component {

  componentDidMount(){
    this.props.fetchPosts()
  }

  render(){
    return(
      <div className='blog'>
        <h1>blog.</h1>
        <div className='blog-intro'>
          <p>Part of the graduation requirements at <a rel='noopener noreferrer' href="https://flatironschool.com" target="_blank">Flatiron School</a> include that students must write a blog. Mine is now hosted here and while I am not guaranteeing any activity, it does demonstrate an implementation of <strong>React</strong>, <strong>Ruby on Rails</strong> and <strong>Active Record</strong>.</p>
        </div>
        <div className='blog-titles'>
            <ul>
              <h2>Posts:</h2>
              {this.props.blog.posts.map(post => {
                return (
                  <div className='blog-link' key={post.id}>
                    <li>{post.created_at.slice(0,10)}:<br /></li>
                    <NavLink to={`/blog/${post.id}`}>{post.title}</NavLink>
                  </div>
                )
              })}
            </ul>
        </div>
        <div className='todo'>
            <ul>
              <h2>Things I'd Like to Pursue</h2>
              <p>I am officially a professional programmer and that has unfortunately slowed progress here. That said, I am still interested in understanding more of the following:</p>
              <li>DevOps / <strong>AWS</strong></li>
              <li>Learn more about nginx and how to set it up the <em>right</em> way (see above)</li>
              <li>I hope to start a budgeting app soon that will emphasize understanding of <strong>Ruby on Rails</strong> and <strong>ORM</strong></li>
            </ul>
            <ul className='done'>
              <h2>Milestones:</h2>
              <li>My first merged PR! 2019-09-25</li>
              <li>Add mobile support for 2048, could add directional buttons but I'd like to learn how to respond to swipes. 2019-08-27</li>
              <li>Responsive Design 2019-08-16</li>
            </ul>
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
