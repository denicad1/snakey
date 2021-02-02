const canvas=document.getElementById('game');
const ctx=canvas.getContext('2d');
let dx=10;
let dy=0;

const clearBoard=()=>{
    ctx.fillStyle='blue';
ctx.fillRect(0,0,400,400);
};
clearBoard();
const snake=[{x:200,y:200},{x:190,y:200},{x:180,y:200},{x:170,y:200},{x:160,y:200}];
const collision=()=>{
    for (let i = 4; i< snake.length; i++) {
        if(snake[i].x===snake[0].x||snake[i].y===snake[0].y){
            return true;
        }
    }
    const leftWall=snake[0].x<0;
    const rightWall=snake[0].x>canvas.width-10;
    const topWall=snake[0].y<0;
    const bottomWall=snake[0].y>canvas.height-10;
    return leftWall || rightWall|| topWall || bottomWall;
    };

const move=()=>{
    
    
    setInterval(function(){
        console.log(collision());
        if (collision()) {
            clearInterval(move());
        }
        clearBoard();
        moveSnake();
        drawSnake();
    },200);
}
const drawSnakePart=(snakePart)=>{
    ctx.fillStyle='green';
    ctx.strokeStyle='darkgreen';
    ctx.strokeRect(snakePart.x,snakePart.y,10,10);
    ctx.fillRect(snakePart.x,snakePart.y,10,10);
}
const drawSnake=()=>snake.forEach(drawSnakePart);
drawSnake();



const moveSnake=()=>{
    const head={x:snake[0].x+dx,y:snake[0].y+dy};
    snake.unshift(head);
    snake.pop();
    
}


document.addEventListener('keydown',function(e){
    const left=37;
    const right=39;
    const up=38;
    const down=40;
    const moveRight =dx ===10;
    const moveLeft =dx===-10;
    const moveUp =dy===-10;
    const moveDown =dy===10;
    const key=e.keyCode;
    console.log(e);
    if (key===left&&!moveRight){
        dx=-10;
        dy=0;
        move();
    }
    if (key===right&&!moveLeft) {
        dx=10;
        dy=0;
        move();
    }
    if (key===up&&!moveDown) {
        dx=0;
        dy=-10;
        move();
    }
    if(key===down&&!moveUp){
        dx=0;
        dy=10;
        move();
    }
    
    
})