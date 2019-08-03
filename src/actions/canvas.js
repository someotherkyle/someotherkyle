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

const convertIndexToCoords = pos => {
    let coords = { x: -1, y: -1 }
    coords.x = (pos.x * 122) + 12
    coords.y = (pos.y * 122) + 12
    return coords
}


export const draw = tile => {
    let canvas = document.getElementById('tile-canvas')
    const coords = convertIndexToCoords(tile.pos)
    const tileColor = "tile" + tile.value.toString()
    const textColor = "text" + tile.value.toString()
    if (canvas.getContext){
        let ctx = canvas.getContext('2d')
        ctx.font = '72px sans-serif'
        ctx.textAlign = 'center'
        ctx.textBaseline = 'middle'
        
        ctx.fillStyle = colors[tileColor]
        roundedRect(ctx, coords.x, coords.y, 110, 110, 5)

        ctx.fillStyle = colors[textColor]
        ctx.fillText(tile.value, coords.x + 55, coords.y + 55, 110)
    }
}