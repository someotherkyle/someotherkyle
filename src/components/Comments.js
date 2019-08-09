import React, { Component } from 'react'
import { connect } from 'react-redux'

class Comment extends Component {

  render(){
    return(
      <div className='comments'>

      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    comment: state.comment
  }
}

export default connect(mapStateToProps)(Comment)