import React, { Component } from 'react'
import { connect } from 'react-redux'

class Board extends Component {
    render(){
        return(
            <div id='board-div'>
                <p id='score-board'>Score: {this.props.score}</p>
                <canvas id='game-board' height='500' width='500' />
                <canvas id='tile-canvas' height='500' width='500' />
                <button id='stop-game-button' value='Stop' />
                <button id='start-game-button' value='Start!' />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        score: state.score
    }
}

export default connect(mapStateToProps)(Board)