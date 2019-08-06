export const start = () => {
  this.initBoard()
  this.newTile()
  this.newTile()
}

export const initBoard = () => {
  let board = []
  for (let i = 0; i < 4; i++){
    board[i] = []
    for (let j = 0; j < 4; j++){
      board[i][j] = 0
    }
  }
  return board
}

export const resetEligibility = () => {
  let eligible = []
  for (let i = 0; i < 4; i++){
    eligible[i] = []
    for (let j = 0; j < 4; j++){
      eligible[i][j] = true
    }
  }
  return eligible
}

export const newTile = () => {
  let pos = this.newTileCoords()
  let val = this.newTileVal()
  this.board[pos.x][pos.y] = val
}

export const newTileCoords = () => {
  let newCoords = {}
  do {
    newCoords.x = parseInt(Math.random() * 4)
    newCoords.y = parseInt(Math.random() * 4)
  } while (this.board[newCoords.x][newCoords.y] !== 0)
  return newCoords
}

export const newTileVal = () => {
  let val = Math.random()
  val >= 9 ? val = 4 : val = 2
  return val
}


export const end = () => {
  document.getElementById('gameover-canvas').style.display = 'inline'
}

export const up = () => { 
  if (!canMoveUp(this.board)){
    return false
  }
  for (let x = 0; x < 4; x++){
    for (let y = 1; y < 4; y++){
      if (this.board[x][y] !== 0){
        for(let y1 = 0; y1 < y; y1++){
          if (this.board[x][y1] === 0){
            this.board[x][y1] = this.board[x][y]
            // drawTile(x, y1, this.board[x][y1])
            this.board[x][y] = 0
            // clearTile(x, y)
            break
          } else if (this.board[x][y] === this.board[x][y1] && clearShotVert(x, y1, y, this.board) && this.eligible[x][y1]){
            this.board[x][y1] += this.board[x][y]
            // drawTile(x, y1, this.board[x][y1])
            this.eligible[x][y1] = false
            this.score += this.board[x][y1]
            this.board[x][y] = 0
            // clearTile(x, y)
            break
          }
        }
      }
    }
  }
  this.eligible = this.resetEligibility()
  this.newTile()
}

export const down = () => {
  if (!canMoveDown(this.board)){
    return false
  }
  for (let x = 0; x < 4; x++){
    for (let y = 2; y >= 0; y--){
      if (this.board[x][y] !== 0){
        for(let y1 = 3; y1 > y; y1--){
          if (this.board[x][y1] === 0){
            this.board[x][y1] = this.board[x][y]
            // drawTile(x, y1, this.board[x][y1])
            this.board[x][y] = 0
            // clearTile(x, y)
            break
          } else if (this.board[x][y] === this.board[x][y1] && clearShotVert(x, y, y1, this.board) && this.eligible[x][y1]){
            this.board[x][y1] += this.board[x][y]
            // drawTile(x, y1, this.board[x][y1])
            this.eligible[x][y1] = false
            this.score += this.board[x][y1]
            this.board[x][y] = 0
            // clearTile(x, y)
            break
          }
        }
      }
    }
  }
  this.eligible = this.resetEligibility()
  this.newTile()
}

export const left = () => {
  if (!canMoveLeft(this.board)){
    return false
  }
  for (let y = 0; y < 4; y++){
    for (let x = 1; x < 4; x++){
      if (this.board[x][y] !== 0){
        for(let x1 = 0; x1 < x; x1++){
          if (this.board[x1][y] === 0){
            this.board[x1][y] = this.board[x][y]
            // drawTile(x1, y, this.board[x1][y])
            this.board[x][y] = 0
            // clearTile(x, y)
            break
          } else if (this.board[x][y] === this.board[x1][y] && clearShotHoriz(y, x1, x, this.board) && this.eligible[x1][y]){
            this.board[x1][y] += this.board[x][y]
            // drawTile(x1, y, this.board[x1][y])
            this.eligible[x1][y] = false
            this.score += this.board[x1][y]
            this.board[x][y] = 0
            // clearTile(x, y)
            break
          }
        }
      }
    }
  }
  this.eligible = this.resetEligibility()
  this.newTile()
}

export const right = () => {
  if (!canMoveRight(this.board)){
    return false
  }
  for (let y = 0; y < 4; y++){
    for (let x = 2; x >= 0; x--){
      if (this.board[x][y] !== 0){
        for(let x1 = 3; x1 > x; x1--){
          if (this.board[x1][y] === 0){
            this.board[x1][y] = this.board[x][y]
            // drawTile(x1, y, this.board[x1][y])
            this.board[x][y] = 0
            // clearTile(x, y)
            break
          } else if (this.board[x][y] === this.board[x1][y] && clearShotHoriz(y, x, x1, this.board) && this.eligible[x1][y]){
            this.board[x1][y] += this.board[x][y]
            // drawTile(x1, y, this.board[x1][y])
            this.eligible[x1][y] = false
            this.score += this.board[x1][y]
            this.board[x][y] = 0
            // clearTile(x, y)
            break
          }
        }
      }
    }
  }
  this.eligible = this.resetEligibility()
  this.newTile()
}

export const canMoveUp = board => {
  for (let x = 0; x < 4; x++){
    for (let y = 1; y < 4; y++){
      if (board[x][y] !== 0) {
        if (board[x][y - 1] === 0 || board[x][y] === board[x][y - 1]) return true
      }
    }
  }
  return false
}

export const canMoveDown = board => {
  for (let x = 0; x < 4; x++){
    for (let y = 2; y >= 0; y--){
      if (board[x][y] !== 0) {
        if (board[x][y + 1] === 0 || board[x][y] === board[x][y + 1]) return true
      }
    }
  }
  return false
}

export const canMoveLeft = board => {
  for (let y = 0; y < 4; y++){
    for (let x = 1; x < 4; x++){
      if (board[x][y] !== 0) {
        if (board[x - 1][y] === 0 || board[x][y] === board[x - 1][y]) return true
      }
    }
  }
  return false
}

export const canMoveRight = board => {
  for (let y = 0; y < 4; y++){
    for (let x = 2; x >= 0; x--){
      if (board[x][y] !== 0) {
        if (board[x + 1][y] === 0 || board[x][y] === board[x + 1][y]) return true
      }
    }
  }
  return false
}

export const clearShotHoriz = (row, lowX, highX, board) => {
  for (let x = lowX + 1; x < highX; x++){
    if (board[x][row] !== 0 && board[x][row] !== board[highX][row]) return false
  }
  return true
}

export const clearShotVert = (col, lowY, highY, board) => {
  for (let y = lowY + 1; y < highY; y++){
    if (board[col][y] !== 0 && board[col][y] !== board[col][highY]) return false
  }
  return true
}

export const noMove = board => {
  if (!canMoveUp(board) && !canMoveDown(board) && !canMoveLeft(board) && !canMoveRight(board)) return true
  return false
}