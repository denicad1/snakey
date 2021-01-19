const boardCreation=function(){
    document.querySelector('.board').insertAdjacentHTML('afterbegin', `<tbody></tbody>`);
    const body = document.querySelector('.board').firstChild;
    for (let i = 0; i < 20; i++) {
        const rowClass = `tr-${i+1}`;
        const data = `<tr class=${rowClass}></tr>`;
        body.insertAdjacentHTML('afterbegin', data);
        for (let j = 0; j < 20; j++) {
            const columnClass = `td-${j+1}`;
            const data = `<td class=${columnClass}>2</td>`;
            document.querySelector(`.${rowClass}`).insertAdjacentHTML(`afterbegin`, data);
        }


    };
};
boardCreation();
const snake = {
    head: [20, 1],

};
console.log(document.querySelector(`.tr-${snake.head[0]}`));
document.querySelector(`.td-${snake.head[0]}`).classList.add(`taken`);

