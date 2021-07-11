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


