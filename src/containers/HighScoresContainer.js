import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchScores, clearHighScores } from '../redux/actions/scoresActions'

class HighScoresContainer extends Component {
  componentDidMount = () => {
    this.props.clearHighScores()
    this.props.fetchScores()
  }

  render(){
    return(
      <div className='highScores'>
        <h3>Welcome to the Mother Flippin High Scores Container!</h3>
        {this.props.games.map(game => (
          <div key={game.id}>
            <p>Score: {game.score}</p>
          </div>
        ))}
      </div>
    )

  }

}

const mapStateToProps = state => {
  return {
    games: state.scores.games
  }
}

export default connect(mapStateToProps, { fetchScores, clearHighScores })(HighScoresContainer)