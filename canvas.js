const canvas=document.getElementById('game');
const ctx=canvas.getContext('2d');
ctx.fillStyle='blue';
ctx.fillRect(0,0,400,400);
const snake=[{x:200,y:200},{x:190,y:200},{x:180,y:200},{x:170,y:200},{x:160,y:200}];
const drawSnakePart=(snakePart)=>{
    ctx.fillStyle='green';
    ctx.strokeStyle='darkgreen';
    ctx.strokeRect(snakePart.x,snakePart.y,10,10);
    ctx.fillRect(snakePart.x,snakePart.y,10,10);
}
const drawSnake=()=>snake.forEach(drawSnakePart);
drawSnake();



const moveSnake=()=>{
    const head={x:snake[0].x+dx,y:snake[0].y};
    snake.unshift(head);
    snake.pop();
}

document.addEventListener('keydown',function(e){
    const left=37;
    const right=39;
    const up=38;
    const down=40;
    const keypressed=e.keyCode;
    
    
})