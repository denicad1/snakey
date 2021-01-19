const data = `<td>2</td>`
 document.querySelector('.board').insertAdjacentHTML('afterbegin', `<tbody></tbody>`);
    const body= document.querySelector('.board').firstChild;
for (let i = 0; i < 20; i++) {
//    document.querySelector(`.board`).insertAdjacentHTML('afterbegin', `<tr>1${data.repeat(20)}</tr>`);
   body.insertAdjacentHTML('afterbegin', `<tr>${data.repeat(20)}</tr>`);
//    document.querySelector('.board').insertAdjacentHTML('afterbegin', `<tr>${data.repeat(20)}</tr>`);
    
    
}
