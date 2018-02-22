const canvas = document.querySelector('#pixelCanvas');

// When size is submitted by the user, call makeGrid()
const submit = document.querySelector('#submit');
submit.addEventListener('click', function(){
  event.preventDefault();
  canvas.innerHTML = '';
  makeGrid();
});

function makeGrid(h, w) {
  // Selects size inputs
  const row = document.querySelector('#inputHeight').value;
  const column = document.querySelector('#inputWidth').value;

  for(let i = 0; i < row; i++){
    canvas.appendChild(document.createElement('tr'));
    for(let j = 0; j < column; j++){
      canvas.lastElementChild.appendChild(document.createElement('td'));
    }
  }
}

// Select color input
const colorPicked = document.querySelector('#colorPicker');
//adds color to clicked cell on grid
canvas.getElementsByTagName('td').addEventListener('click', function(){
  this.style.backgroundColor = colorPicked;
});