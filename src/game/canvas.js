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
  const cornerRadius = boardSide * .01
  const tileSide = boardSide * .88 / 4
  const spacing = boardSide * .12 / 5
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
        b += (spacing + tileSide)
      }
      a += (spacing + tileSide)
    }
  }
}

export const drawGameOver = side => {
  let canvas = document.getElementById('gameover-canvas')
  if (canvas.getContext){
    let ctx = canvas.getContext('2d')
    ctx.fillStyle = "rgba(238, 232, 213, .65)"
    roundedRect(ctx, 0, 0, side, side, (side * .01))

    ctx.font = '72px sans-serif'
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ctx.fillStyle = colors.darkText
    ctx.fillText('Game Over', (side / 2), (side / 2), side)
  }
}

export const clearGameOver = side => {
  let canvas = document.getElementById('gameover-canvas')
  if (canvas.getContext){
    let ctx = canvas.getContext('2d')
    ctx.clearRect(0, 0, side, side)
  }
}

const clearTiles = side => {
  let canvas = document.getElementById('tile-canvas')
  if (canvas.getContext){
    let ctx = canvas.getContext('2d')
    ctx.clearRect(0, 0, side, side)
  }
}

export const drawTiles = (side, board) => {
  clearTiles(side)
  for (let x = 0; x < 4; x++){
    for (let y = 0; y < 4; y++){
      if (board[x][y] !== 0) drawTile(side, x, y, board[x][y])
    }
  }
}

const convertIndexToCoords = (side, x, y) => {
    const tile = side * .88 / 4
    const spacing = side * .12 / 5
    let coords = { x: -1, y: -1 }
    coords.x = (x * (tile + spacing)) + spacing
    coords.y = (y * (tile + spacing)) + spacing
    return coords
}

const drawTile = (side, x, y, val) => {
  const tile = side * .88 / 4
  const tileRadius = side * .01
  const coords = convertIndexToCoords(side, x, y)
  const tileColor = val > 4096 ? "tile4096" : "tile" + val.toString()
  const textColor = val === 2? 'darkText' : 'lightText'
  const canvas = document.getElementById('tile-canvas')
  if (canvas.getContext){
      let ctx = canvas.getContext('2d')
      ctx.font = (side * .09).toString() + 'px sans-serif'
      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'
      
      ctx.fillStyle = colors[tileColor]
      roundedRect(ctx, coords.x, coords.y, tile, tile, tileRadius)

      ctx.fillStyle = colors[textColor]
      ctx.fillText(val, coords.x + (tile / 2), coords.y + (tile / 2), tile)
  }
}