let btn1 = document.querySelector('.button-1'),
    btn2 = document.querySelector('.button-2'),
    btn3 = document.querySelector('.button-3');

let out1 = document.querySelector('.out-1'),
    out2 = document.querySelector('.out-2'),
    out3 = document.querySelector('.out-3');

let arr1 = ['apple', 'orange', 'lime', 'banana', 'pineapple'],
    arr2 = ['red', 'white', 'blue', 'black', 'orange', 'pink', 'gray'],
    arr3 = ['Artur', 'Oleg', 'Vadim', 'Maxim', 'Edik'];

btn1.onclick = () => {
    let result = '';

    for( let i of arr1) {
        result += i + ' ';
    }

    out1.innerHTML = result;
}

btn2.onclick = () => {
    let result = '';

    for( let i in arr2) {
        result += `index: ${i} value: ${arr2[i]} <br>`;
    }

    out2.innerHTML = result;
}

btn3.onclick = () => {
    let result = '';

    for( let i = 0; i <= arr3.length; i++) {
        result = `length of array3 = ${arr3.length}`;
    }

    out3.innerHTML = result;
}