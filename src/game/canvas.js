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

export const drawBoard = boardSide => {
  let tileSide = boardSide * .22
  let cornerRadius = boardSide * 0.01
  let spacing = boardSide * .12 / 5
  let canvas = document.getElementById('gameboard-canvas')
  if (canvas.getContext){
    let ctx = canvas.getContext('2d')
    ctx.fillStyle = colors.boardBackground
    roundedRect(ctx, 0, 0, boardSide, boardSide, cornerRadius)

    let a = spacing
    for (let i = 0; i <= 4; i++){
      let b = spacing
      for (let j = 0; j <=4; j++){
        ctx.fillStyle = colors.emptyTileBackground
        roundedRect(ctx, a, b, tileSide, tileSide, cornerRadius)
        b += tileSide + spacing
      }
      a += tileSide + spacing
    }
  }
}

export const drawGameOver = boardSide => {
  const cornerRadius = boardSide * 0.01
  let canvas = document.getElementById('gameover-canvas')
  if (canvas.getContext){
    let ctx = canvas.getContext('2d')
    ctx.fillStyle = "rgba(238, 232, 213, .65)"
    roundedRect(ctx, 0, 0, boardSide, boardSide, cornerRadius)

    ctx.font = boardSide * .15 + 'px sans-serif'
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ctx.fillStyle = colors.darkText
    ctx.fillText('Game Over', boardSide / 2, boardSide / 2, boardSide)
  }
}

export const clearGameOver = boardSide => {
  let canvas = document.getElementById('gameover-canvas')
  if (canvas.getContext){
    let ctx = canvas.getContext('2d')
    ctx.clearRect(0, 0, boardSide, boardSide)
  }
}

const clearTiles = boardSide => {
  let canvas = document.getElementById('tile-canvas')
  if (canvas.getContext){
    let ctx = canvas.getContext('2d')
    ctx.clearRect(0, 0, boardSide, boardSide)
  }
}

export const drawTiles = (boardSide, board) => {
  clearTiles(boardSide)
  for (let x = 0; x < 4; x++){
    for (let y = 0; y < 4; y++){
      if (board[x][y] !== 0) drawTile(boardSide, x, y, board[x][y])
    }
  }
}

const convertIndexToCoords = (boardSide, x, y) => {
  const spacing = boardSide * .12 / 5
  const tileSide = boardSide * .22
    let coords = { x: -1, y: -1 }
    coords.x = (x * (tileSide + spacing)) + spacing
    coords.y = (y * (tileSide + spacing)) + spacing
    return coords
}

const drawTile = (boardSide, x, y, val) => {
  const tileSide = boardSide * .22
  const cornerRadius = boardSide * 0.01
  const coords = convertIndexToCoords(boardSide, x, y)
  const tileColor = val > 4096 ? "tile4096" : "tile" + val.toString()
  const textColor = val === 2? 'darkText' : 'lightText'
  const canvas = document.getElementById('tile-canvas')
  if (canvas.getContext){
    let ctx = canvas.getContext('2d')
    ctx.font = boardSide * .15 + 'px sans-serif'
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    
    ctx.fillStyle = colors[tileColor]
    roundedRect(ctx, coords.x, coords.y, tileSide, tileSide, cornerRadius)

    ctx.fillStyle = colors[textColor]
    ctx.fillText(val, coords.x + (tileSide / 2), coords.y + (tileSide / 2), tileSide)
  }
}