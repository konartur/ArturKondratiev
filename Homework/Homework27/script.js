// Task1
let btnOpen = document.querySelector('.open'),
btnClose = document.querySelector('.close'),
content = document.querySelector('.content');


    function open() {
        content.style.display = 'block';
    }

    function close() {
        content.style.display = 'none'
    }

    btnOpen.onclick = open;
    btnClose.onclick = close;

// Task2
// Создать пару ключей и значений 3 элемента
let car = {
    name : 'Opel',
    year: '1991',
    color: 'red'
}

// Добавить через метод 2 новых
car.drives = true;
car.milage = 3000000;

// вывести длину массива
document.querySelector('.out2').innerHTML = Object.keys(car).length;

// удалить второй и пятый
delete car.year
delete car.milage

// после все очистить
car = {};

console.log(car);

// Task3

let myArray = [20,2,54,78,3,8,11,34]
let arrMap = myArray.map(function(currentItem) {
   return answer = currentItem / 5
});

document.querySelector('.out3').innerHTML = arrMap;

// Task4

let arrTask4 = [5, 80, -44, 120,60,-5, 206];

function task4() {
    return Math.max(...arrTask4)
}



document.querySelector('.out4').innerHTML = task4();




