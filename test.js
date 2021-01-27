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
const size = 30
boardCreation(size);
const snake = {
    body: [15,16],
    
    //need to set snake to move in direction after 1 second
    move(dirx,diry,xy,dir){
        document.getElementById('game').rows[this.body[1]+diry].cells[this.body[0] + dirx].classList.add('taken');
    document.getElementById('game').rows[this.body[1]].cells[this.body[0]].classList.remove('taken');
       snake.body[dir] += xy;
//        document.getElementById('game').rows[this.body[1]+diry].cells[this.body[0] + dirx].classList.add('taken');
//    document.getElementById('game').rows[this.body[1]].cells[this.body[0]].classList.remove('taken');
//       snake.body[dir] += xy;
    },

//    moveLeft() {
//        document.getElementById('game').rows[this.body[1]].cells[this.body[0] - 1].classList.add('taken');
//        document.getElementById('game').rows[this.body[1]].cells[this.body[0]].classList.remove('taken');
//        snake.body[0] -= 1;
//    },
//    moveRight() {
//        document.getElementById('game').rows[this.body[1]].cells[this.body[0] + 1].classList.add('taken');
//        document.getElementById('game').rows[this.body[1]].cells[this.body[0]].classList.remove('taken');
//        snake.body[0] += 1;
//    },
//    moveUp() {
//        document.getElementById('game').rows[this.body[1] - 1].cells[this.body[0]].classList.add('taken');
//        document.getElementById('game').rows[this.body[1]].cells[this.body[0]].classList.remove('taken');
//        snake.body[1] -= 1;
//    },
//    moveDown() {
//        document.getElementById('game').rows[this.body[1] + 1].cells[this.body[0]].classList.add('taken');
//        document.getElementById('game').rows[this.body[1]].cells[this.body[0]].classList.remove('taken');
//        snake.body[1] += 1;
//    }
};
//move snake.body around
const movement = (e) => {
    // console.log(e);
    let [x, y] = snake.body;
    //move snake.body
    if (e.key === 'ArrowLeft' && x > 0) {
        setTimeout(snake.move(-1,0,-1,0),1000);
    } else if (e.key === 'ArrowRight' && x < size - 1) {
        snake.move(1,0,1,0);
    } else if (e.key === 'ArrowUp' && y > 0) {
        snake.move(0,-1,-1,1);
    } else if (e.key === 'ArrowDown' && y < size - 1) {
        snake.move(0,1,1,1);
    } else {
        //crossed boundary. maybe do something else so player can't play anymore
        console.warn('game over');
        snake.body = [size + 1, size + 1];
//        document.getElementById('game').style='display:none';
        document.removeEventListener();
    }
    console.log(x, y);
}

const fruit = {
    placement: [2,2],

    placefruit() {
        for (let i = 0; i < 2; i++) {
            let position = Math.random() * size - 1;
            if (position >= 0 || position <= size-1) {
                this.placement.push(Math.trunc(position));
            } else {
                i--
            };
        }
        document.getElementById('game').rows[this.placement[0]].cells[this.placement[1]].classList.add('fruit');

    },
    fruitTaken(){
        this.placement=[];
        this.placefruit();
    }


};


//if(fruit.placement===[2,2]){
//    console.log(`fruit picked up`);
//}
fruit.placement.forEach((cur,i)=>{
    console.log(snake.body[i]===fruit.placement[i]);
});
//const add body

//console.log(snake.body[0][1]);

document.addEventListener('keydown', movement);
