const person = {
    firstName : "Maya",
    lastName : "Dos",
    language: " ",
    name: " ",
    "name Dog": " Profi",
    set nameCat(name){
        this.name = name;
    },
    set lang(lang){
        this.language = lang;
    }
}

person.lang = 'english';
person.nameCat = 'Busya';
delete person["name Dog"];

let out = document.querySelector('.out');
for(let key in person) {
    out.innerHTML += `${key} : ${person[key]} <br>`
}