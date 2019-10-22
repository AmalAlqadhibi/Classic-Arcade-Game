// Enemies our player must avoid
var Enemy = function(x,y,s) {
    // Variables applied to each of our instances go here,
    this.x = x;
    this.y = y;
    this.speed = s;
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x += this.speed * dt;
    if (this.x > 606){
        this.x = -83;
        console.log("dd")
    }

};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
var Player = function(x,y){
    this.x = x;
    this.y = y;
    this.sprite = 'images/char-boy.png';
}
// This class requires an update(), render() and
// a handleInput() method.
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x , this.y); //this.x *101, this.y * 83
};
Player.prototype.update = function(dt) {
    // this.x = this.x * dt;
    // if (this.x > 606){
    //     this.x -= 83;
    //     console.log("dd")
    // }
    // console.log("hi htere");
    // ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
Player.prototype.handleInput = function(x = []) {
       switch(x) {
       case "left" :
        this.x <= 0 ? this.x = 0  :this.x -= 100 ; //
        break;
        case "right" :
        this.x >= 400 ? this.x = 400: this.x += 100;
        break;
        case "down" :
        this.y >= 400 ? this.y = 440:this.y += 80;
        break;
        case "up" :
        this.y <= -40 ? this.y = -40 :this.y -= 80;
        break;
       }
};

// Now instantiate your objects.
let enemy1 = new Enemy(55,230,120);//the first row bug for player
let enemy2 = new Enemy(2,150,150);//the middle row  bug
let enemy5 = new Enemy(300,150,150);//the middle row  bug
let enemy3 = new Enemy(244,55,200);//the last row bug
let enemy4 = new Enemy(1,55,200);//the last row bug
let player = new Player(200,300);
// Place all enemy objects in an array called allEnemies
let allEnemies = [enemy1,enemy2,enemy3,enemy4,enemy5];
// Place the player object in a variable called player


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };
    // console.log(e.keyCode);

    player.handleInput(allowedKeys[e.keyCode]);

});
function checkCollisions() {
    // console.log("i am working")
    allEnemies.forEach(function(enemy) {
        // console.log("i am work")
        // console.log(player.height  )
       if (player.x < enemy.x + 80  && player.x + 80  > enemy.x &&
            player.y < enemy.y + 65 && player.y + 65 > enemy.y){
                player.x = 200;
                player.y = 300;
            }
    })
}