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
        <h3>High Scores!</h3>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Player</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {this.props.games.map(game => (
              <tr key={game.id}>
                <td>{game.created_at.substring(0, 10)}</td>
                <td>{game.player_name}</td>
                <td>{game.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
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