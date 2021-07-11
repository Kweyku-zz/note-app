var ol = document.querySelector('ol');
var input = document.querySelector('.form-control');
var button = document.querySelector('button');
var itemClasses = ['list-group-item','d-flex','justify-content-between','align-items-start'];


var gradient = document.getElementById('gradient');
var bg_text = document.querySelector('small');
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");

function gradient_picker(){
    gradient.style.background = 'linear-gradient(to right, ' + color1.value + ', ' + color2.value + ')';
    bg_text.textContent = gradient.style.background + ';';
};


color1.addEventListener('input', gradient_picker);
color2.addEventListener('input', gradient_picker);

function createNote(){
    var newNote = document.createElement('li');
    var div = document.createElement('div');
    var deleteButton = document.createElement('span');

    if(input.value.length > 0){
        newNote.classList.add(...itemClasses);
        newNote.append(div);
        div.appendChild(document.createTextNode(input.value));

        deleteButton.appendChild(document.createTextNode('Delete'));
        deleteButton.classList.add('btn','btn-danger','badge','rounded-pill');

        newNote.appendChild(deleteButton);

        ol.append(newNote);
      
        div.classList.add('ms-2','me-auto','fw-bold');

        input.value = '';
    }

    newNote.addEventListener('click' , function(){
       div.classList.toggle('mark-as-done');
       
    })

    deleteButton.addEventListener('click', function(){
       deleteButton.parentElement.remove();
    });

}

button.addEventListener('click', function(e){
    e.preventDefault();
    createNote();
    }
);

var gamer1 = {
    id: 1,
    name: 'Cyborg',
    species: 'Artificial Intelligence',
    level: 100,
    badges: ['Silver Star', 'Manipulator']
};
var gamer2 = {
    id: 2,
    name: 'Axion',
    species: 'Elf',
    level: 200,
    badges: ['Blue Star', 'Fotce Wilder']
};
var gamer3 = {
    id: 3,
    name: 'Grog',
    species: 'Troll',
    level: 400,
    badges: ['Red Star', 'Brute']
};

//Switch statement
function character(gamer_id){
    switch (gamer_id) {
        case 1:
           console.log( 'Welcome to Open World ' + gamer1.name)
            break;
        case 2:
         console.log('Welcome to Open World ' + gamer2.name)
            break;
        case 3:
          console.log('Welcome to Open World ' + gamer3.name)
            break;
        default:
           console.log( 'Opss! We  do not recognize this gamer name');
            break;
    }
};
//ternary operator
gamer3.name == 'Grog' ? console.log(gamer3) : console.log("Well that was unfortunate!");
//mapping
const anime = ['Naruto','Boruto','Sasuke','Neji','Kakashi'];
const mapped_anime = anime.map( char => {
    return char;
});
//filter
const filtered_anime = mapped_anime.filter(name => {
    return name !== 'Naruto';
});
//reduce


class Player {
    constructor(name, type, age){
        this.name = name;
        this.type = type;
        this.age = age;
    }
    introduce(){
        console.log(`Hello i am ${this.name}, I am a ${this.type} and i have lived for ${age} years.`)
    }
};

class Wizard extends Player{
    constructor(name, type, age){
        super(name, type, age)
    }
    play(){
        console.log(`Hi i am a ${this.type}`)
    }
};

const wiz1 = new Wizard('Kalvin', 'Healer', 100);

class Animal {
    constructor(nom, type, color){
        this.nom = nom;
        this.type = type;
        this.color = color;
    }
}

class Mamal extends Animal{
    constructor(nom, type, color){
        super(nom, type, color)
    }
    sound(){
        console.log(`Mooooo!, i am ${this.nom} and i am a ${this.type} with a ${this.color} color.`)
    }
}

const cow = new Mamal('Berth','Cow','Cream');



