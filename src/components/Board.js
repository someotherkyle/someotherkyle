import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateName } from '../redux/actions/gameActions'

class Board extends Component {
    render(){
        return(
            <div id='board-div'>
                <p id='score-board'>Score: {this.props.score}</p>
                <canvas id='gameboard-canvas' height='500' width='500' />
                <canvas id='tile-canvas' height='500' width='500' />
                <canvas id='gameover-canvas' height='500' width='500' />
                <input type='text' onChange={e => this.params.updateName(e.target.value)} />
                <button value="New Game" />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        score: state.game.score
    }
}

export default connect(mapStateToProps, { updateName})(Board)