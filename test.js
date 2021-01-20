const boardCreation = function () {
    document.querySelector('.board').insertAdjacentHTML('afterbegin', `<tbody></tbody>`);
    const body = document.querySelector('.board').firstChild;
    for (let i = 0; i < 20; i++) {
        const rowClass = `tr-${i+1}`;
        const data = `<tr class=${rowClass}></tr>`;
        body.insertAdjacentHTML('afterbegin', data);
        for (let j = 0; j < 20; j++) {
            const columnClass = `td-${j+1}`;
            const data = `<td class=${columnClass}></td>`;
            document.querySelector(`.${rowClass}`).insertAdjacentHTML(`afterbegin`, data);
        }
    };
};

boardCreation();
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
   if(snake.head[0]<=19&&snake.head[1]<=19&&snake.head[0]>=1&&snake.head[1]>=1){
    //move snake.head left
    if (e.key === 'ArrowLeft') {
        snake.moveLeft();
        console.log(snake.head);
        //     document.getElementById('game').rows[snake.head[0]].cells[snake.head[1]-1].classList.add('taken');
    //     snake.head[1]-=1;
    }else if(e.key==='ArrowRight'){
        console.log(snake.head);

        snake.moveRight();
        }else if(e.key==='ArrowUp'){
            console.log(snake.head);

            snake.moveUp();
        }else if(e.key==='ArrowDown'){
            console.log(snake.head);

            snake.moveDown();
    }
}
    
    
    

});
