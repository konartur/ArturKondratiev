const out1 = document.querySelector('.out-1'),
    out2 = document.querySelector('.out-2')
// Task1
function task1() {
    out1.innerHTML += 'Длинна аргумента = ' + arguments.length
}

task1(1,2,3,4,5,6,7,8)

// Task2
const Hero = function(name,lastName,age,classType, hp, mp, gender,race, canFly ) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
    this.classType = classType;
    this.hp = hp;
    this.mp = mp;
    this.gender = gender;
    this.race = race;
    this.canFly = canFly;

    this.massage = function() {
        out2.innerHTML += `<p> Это <strong>${this.name} ${this.lastName}</strong>, говорят ему <em>${this.age} лет</em>. Его класс <strong>${this.classType}</strong>, а ХП : <em>${this.hp}</em> ну и МП : <em>${this.mp}</em>. Инициализировал этот персонаж себя как <u style="text-transform: uppercase">${this.gender}</u>, но по происхождению : <strong>${this.race}</strong>. Сможет ли летать? - ${this.canFly}</p> <br>`
    }
}

let marginal = new Hero('Marginal', 'Yspenskui', 45, 'разбойник', '2000', '250', 'трансгендер', 'человек', false);
let azel = new Hero('Azel', 'Mikra', 300, 'волшебница', '1100', '4400', 'аутосексуалка', 'фея', true);
let shleps = new Hero('Shleps', 'Parko', Infinity, 'древний', '8000', '100', 'асексуал', 'энт', false);

marginal.massage();
azel.massage();
shleps.massage();
