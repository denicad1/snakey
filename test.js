const boardCreation = function (size) {
    document.querySelector('.board').insertAdjacentHTML('afterbegin', `<tbody></tbody>`);
    const body = document.querySelector('.board').firstChild;
    for (let i = 0; i < size; i++) {
        const rowClass = `tr-${i+1}`;
        const data = `<tr class=${rowClass}></tr>`;
        body.insertAdjacentHTML('afterbegin', data);
        for (let j = 0; j < size; j++) {
            const columnClass = `td-${j+1}`;
            const data = `<td class=${columnClass}></td>`;
            document.querySelector(`.${rowClass}`).insertAdjacentHTML(`afterbegin`, data);
        }
    };
};
const size=30
boardCreation(size);
const snake = {
    head: [15, 16],
    //movements left and right need to be cleaned up. a lot of rewritten code
    
    moveLeft() {
        document.getElementById('game').rows[snake.head[0]].cells[snake.head[1] - 1].classList.add('taken');
        document.getElementById('game').rows[snake.head[0]].cells[snake.head[1] ].classList.remove('taken');
        snake.head[1] -= 1;
    },
    moveRight(){
        document.getElementById('game').rows[snake.head[0]].cells[snake.head[1] + 1].classList.add('taken');
        document.getElementById('game').rows[snake.head[0]].cells[snake.head[1] ].classList.remove('taken');
        snake.head[1] += 1;
    },
    moveUp(){
        document.getElementById('game').rows[snake.head[0]-1].cells[snake.head[1]].classList.add('taken');
        document.getElementById('game').rows[snake.head[0]].cells[snake.head[1] ].classList.remove('taken');
        snake.head[0] -= 1;
    },
    moveDown(){
        document.getElementById('game').rows[snake.head[0]+1].cells[snake.head[1]].classList.add('taken');
        document.getElementById('game').rows[snake.head[0]].cells[snake.head[1] ].classList.remove('taken');
        snake.head[0] += 1;
    }
};
//move snake.head around
document.getElementById('game').rows[snake.head[0]].cells[snake.head[1]].classList.add('taken');
document.addEventListener('keydown', function (e) {
    // console.log(e);
   
    //move snake.head left
    if (e.key === 'ArrowLeft'&&snake.head[1]>0) {
        snake.moveLeft();
        console.log(snake.head);
        //     document.getElementById('game').rows[snake.head[0]].cells[snake.head[1]-1].classList.add('taken');
    //     snake.head[1]-=1;
    }else if(e.key==='ArrowRight'&&snake.head[1]<size-1){
        console.log(snake.head);

        snake.moveRight();
    }else if(e.key==='ArrowUp'&&snake.head[0]>0){
            console.log(snake.head);

            snake.moveUp();
    }else if(e.key==='ArrowDown'&&snake.head[0]<size-1){
            console.log(snake.head);

            snake.moveDown();
    }else{
        //crossed boundary. maybe do something else so player can't play anymore
        console.warn('game over');
        snake.head=[size+1,size+1];
    }
});
