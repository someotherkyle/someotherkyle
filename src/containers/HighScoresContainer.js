import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchScores, clearHighScores } from '../redux/actions/scoresActions'

class HighScoresContainer extends Component {

  componentDidMount = () => {
    this.props.fetchScores()
    this.sortTable(0)
  }

  sortTableOnClick = (e, n) => {
    e.preventDefault()
    this.sortTable(n)
  }

  sortTable = n => {
    let table = document.getElementById("scores-table")
    let switching = true
    let dir = "desc"
    let switchCount = 0;
    let shouldSwitch = false
    let i, x, y

    while (switching) {
      switching = false;
      let rows = table.rows;
      for (i = 1; i < (rows.length - 1); i++) {
        x = rows[i].getElementsByTagName("TD")[n];
        y = rows[i + 1].getElementsByTagName("TD")[n];
        if (n === 1){
          if (dir === "asc") {
            if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
              shouldSwitch = true;
              break;
            }
          } else if (dir === "desc") {
            if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
              shouldSwitch = true;
              break;
            }
          }
        } else if (n === 0){
          if (dir === "asc") {
            if (Number(x.innerHTML) > Number(y.innerHTML)) {
              shouldSwitch = true;
              break;
            } 
          }else if (dir === "desc") {
            if (Number(x.innerHTML) < Number(y.innerHTML)) {
              shouldSwitch = true;
              break;
            }
          }
        }
      } 
      if (shouldSwitch && i < (rows.length - 1)) {
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
        switchCount ++;
      } else {
        if (switchCount === 0 && dir === "desc") {
          dir = "asc";
          switching = true;
        }
      }
    }
  }

  render(){
    return(
      <div className='highScores'>
        <h3>High Scores!</h3>
        <table id='scores-table'>
          <thead>
            <tr>
              <th onClick={e => this.sortTableOnClick(e, 0)}>Score</th>
              <th onClick={e => this.sortTableOnClick(e, 1)}>Player</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {this.props.games.map(game => (
              <tr key={game.id}>
                <td>{game.score}</td>
                <td>{game.player_name}</td>
                <td>{game.created_at.substring(0, 10)}</td>
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