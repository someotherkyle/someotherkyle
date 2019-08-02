import React from 'react'

const Board = () => {
    return(
        <div id='board-div'>
            <canvas id='board' height='500' width='500' />
            <canvas id='tile-canvas' height='500' width='500' />
        </div>
    )
}

export default Board