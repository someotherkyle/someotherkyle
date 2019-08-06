import colors from '../colors'

export const roundedRect = (ctx, x, y, width, height, radius) => {
    ctx.beginPath()
    ctx.moveTo(x, y + radius)
    ctx.lineTo(x, y + height - radius)
    ctx.arcTo(x, y + height, x + radius, y + height, radius)
    ctx.lineTo(x + width - radius, y + height)
    ctx.arcTo(x + width, y + height, x + width, y + height-radius, radius)
    ctx.lineTo(x + width, y + radius)
    ctx.arcTo(x + width, y, x + width - radius, y, radius)
    ctx.lineTo(x + radius, y)
    ctx.arcTo(x, y, x, y + radius, radius)
    ctx.fill()
}

export const drawBoard = () => {
  let canvas = document.getElementById('gameboard-canvas')
  if (canvas.getContext){
    let ctx = canvas.getContext('2d')
    ctx.fillStyle = colors.boardBackground
    roundedRect(ctx, 0, 0, 500, 500, 5)

    let a = 12
    for (let i = 0; i <= 4; i++){
      let b = 12
      for (let j = 0; j <=4; j++){
        ctx.fillStyle = colors.emptyTileBackground
        roundedRect(ctx, a, b, 110, 110, 5)
        b += 122
      }
      a += 122
    }
  }
}

export const drawGameOver = () => {
  let canvas = document.getElementById('gameover-canvas')
  if (canvas.getContext){
    let ctx = canvas.getContext('2d')
    ctx.fillStyle = "rgba(238, 232, 213, .65)"
    roundedRect(ctx, 0, 0, 500, 500, 5)

    ctx.font = '72px sans-serif'
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ctx.fillStyle = colors.darkText
    ctx.fillText('Game Over', 250, 250, 500)
  }
}

const clearTiles = () => {
  let canvas = document.getElementById('tile-canvas')
  if (canvas.getContext){
    let ctx = canvas.getContext('2d')
    ctx.clearRect(0, 0, 500, 500)
  }
}

export const drawTiles = board => {
  clearTiles()
  for (let x = 0; x < 4; x++){
    for (let y = 0; y < 4; y++){
      if (board[x][y] !== 0) drawTile(x, y, board[x][y])
    }
  }
}

const convertIndexToCoords = (x, y) => {
    let coords = { x: -1, y: -1 }
    coords.x = (x * 122) + 12
    coords.y = (y * 122) + 12
    return coords
}

const drawTile = (x, y, val) => {
    const coords = convertIndexToCoords(x, y)
    const tileColor = val > 4096 ? "tile 4096" : "tile" + val.toString()
    const textColor = val === 2? 'darkText' : 'lightText'
    const canvas = document.getElementById('tile-canvas')
    if (canvas.getContext){
        let ctx = canvas.getContext('2d')
        ctx.font = '72px sans-serif'
        ctx.textAlign = 'center'
        ctx.textBaseline = 'middle'
        
        ctx.fillStyle = colors[tileColor]
        roundedRect(ctx, coords.x, coords.y, 110, 110, 5)

        ctx.fillStyle = colors[textColor]
        ctx.fillText(val, coords.x + 55, coords.y + 55, 110)
    }
}