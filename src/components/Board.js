import React, { Component } from 'react'

export default class Board extends Component {
    render(){
        return(
          <div>
            <canvas id='gameboard-canvas' height={this.props.side} width={this.props.side} />
            <canvas id='tile-canvas' height={this.props.side} width={this.props.side} />
            <canvas id='gameover-canvas' height={this.props.side} width={this.props.side} />
          </div>
        )
    }
}
