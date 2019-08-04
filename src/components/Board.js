import React from 'react'
import { connect } from 'react-redux'

const Board = () => {
    return(
        <div id='board-div'>
            <p>Score: {this.state.score}</p>
            <canvas id='game-board' height='500' width='500' />
            <canvas id='tile-canvas' height='500' width='500' />
        </div>
    )
}

const mapStateToProps = state => {
    return {
        score: state.score
    }
}

export default connect(mapStateToProps)(Board)