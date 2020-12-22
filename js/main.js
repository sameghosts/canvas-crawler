//Establish DOM references
//Explicitly defining for my own sanity
let movementDisplay = document.getElementById('movement')
let game = document.getElementById('game')
let statusDisplay = document.getElementById('status')

// Get the context for drawing on canvas
// no 3d option, would need webGL
let ctx = game.getContext('2d')
// game.height = '400px'
// game.height = '800px'
game.setAttribute('height', getComputedStyle(game)['height'])
game.setAttribute('width', getComputedStyle(game)['width'])


let Crawler(x, y, width, height, color) {
    this.x = x
    this.y = y
    this.color = color
    this.width = width
    this.height = height
    this.alive = true
    this.health = 100
    this.render = function() {
        ctx.fillStyle = this.color
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }
}

let hero = new Crawler(50, 200, 50, 40, 'hotpink')
let ogre = new Crawler(400, 150, 60, 100, '#bada55')

game.addEventListener('click', (e) => {
//clear the board
    ctx.clearRect(0, 0, game.width, game.height)
    //change gre position
    hero.render()
    ogre.x = e.offsetY
    ogre.y = e.offsetY
    //draw ya boi
    ogre.render()
}, { option: true })
