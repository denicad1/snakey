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
    head: [15, 16],
    //movements left and right need to be cleaned up. not DRY

    moveLeft() {
        document.getElementById('game').rows[this.head[1]].cells[this.head[0] - 1].classList.add('taken');
        document.getElementById('game').rows[this.head[1]].cells[this.head[0]].classList.remove('taken');
        snake.head[0] -= 1;
    },
    moveRight() {
        document.getElementById('game').rows[this.head[1]].cells[this.head[0] + 1].classList.add('taken');
        document.getElementById('game').rows[this.head[1]].cells[this.head[0]].classList.remove('taken');
        snake.head[0] += 1;
    },
    moveUp() {
        document.getElementById('game').rows[this.head[1] - 1].cells[this.head[0]].classList.add('taken');
        document.getElementById('game').rows[this.head[1]].cells[this.head[0]].classList.remove('taken');
        snake.head[1] -= 1;
    },
    moveDown() {
        document.getElementById('game').rows[this.head[1] + 1].cells[this.head[0]].classList.add('taken');
        document.getElementById('game').rows[this.head[1]].cells[this.head[0]].classList.remove('taken');
        snake.head[1] += 1;
    }
};
//move snake.head around
const movement = (e) => {
    // console.log(e);
    let [x, y] = snake.head;
    //move snake.head
    if (e.key === 'ArrowLeft' && x > 0) {
        snake.moveLeft();
    } else if (e.key === 'ArrowRight' && x < size - 1) {
        snake.moveRight();
    } else if (e.key === 'ArrowUp' && y > 0) {
        snake.moveUp();
    } else if (e.key === 'ArrowDown' && y < size - 1) {
        snake.moveDown();
    } else {
        //crossed boundary. maybe do something else so player can't play anymore
        console.warn('game over');
        snake.head = [size + 1, size + 1];
    }
    console.log(x, y);
}

const fruit = {
    placement: [],

    placefruit() {
        for (let i = 0; i < 2; i++) {
            let position = Math.random() * size - 1;
            if (position >= 0 || position <= size-1) {
                this.placement.push(Math.trunc(position))
            } else {
                i--
            };
        }
    }

};
fruit.placefruit();
console.log(fruit.placement);







document.addEventListener('keydown', movement);
