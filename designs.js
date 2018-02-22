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

//adds color to clicked cell on grid
canvas.addEventListener('click', function(event){
  debugger;
  // Select color input
  const colorPicked = document.querySelector('#colorPicker').value;
  //checks to see if on the event of 'click' a TD was clicked on
  if (event.target.nodeName === 'TD'){
    this.style.backgroundColor = colorPicked;
    console.log("am I coloring?");
  }
});
