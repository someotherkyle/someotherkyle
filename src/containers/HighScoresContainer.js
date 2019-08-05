import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchScores } from '../redux/actions/gameActionCreator'

class HighScoresContainer extends Component {
  componentDidMount = () => {
    fetchScores()
  }

  displayGames = () => {
    this.props.games.map(game => {
      return <p>{game.score}</p>
    })
  }
  render(){
    return(
      <div className='highScores'>
        <h3>Welcome to the Mother Fucking High Scores Container!</h3>
        {/* <p>{this.displayGames()}</p> */}
      </div>
    )

  }

}

const mapStateToProps = state => {
  return {
    games: state.game.games
  }
}

export default connect(mapStateToProps, { fetchScores })(HighScoresContainer)