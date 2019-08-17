import React, { Component } from 'react'
import { connect } from 'react-redux'

class BlogContainer extends Component {

  render(){
    return(
      <div>

      </div>
    )
  }
}

const mapStateToProps = state => {
  return ({
    posts: state.blog
  })
}

export default connect(mapStateToProps)(BlogContainer)