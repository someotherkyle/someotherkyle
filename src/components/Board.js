import React, { Component } from 'react'

export default class Board extends Component {
    render(){
        return(
          <div id='board-div'>
            <canvas id='gameboard-canvas' height='500' width='500' />
            <canvas id='tile-canvas' height='500' width='500' />
            <canvas id='gameover-canvas' height='500' width='500' />
          </div>
        )
    }
}
