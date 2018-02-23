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
//boolean to check if in drag mode (mousedown and hold)
let isDrag = false;

//checks mouse button is released
canvas.addEventListener('mouseup', function(event){
  isDrag = false;
});

let paintCanvas = function(){
  // Select color input
  const colorPicked = document.querySelector('#colorPicker').value;
  isDrag = false;
  //checks to see if on the event of 'click' a TD was clicked on
  if (event.target.nodeName === 'TD'){
    //event.target will target the specific TD that is clicked
    event.target.style.backgroundColor = colorPicked;
    console.log("am I coloring?");
    console.log('This was clicked  ' + event.target);
  }
}

//adds color to one clicked cell on grid
canvas.addEventListener('click', function(event){
  paintCanvas();
});

//eventListener to add mousedown -step one for continuous painting instead of per click
canvas.addEventListener('mousedown', function(event){
  //shuts of its default as we aren't actually going to drag and drop
  event.preventDefault();
  //our boolean to check if mouse is clicked and still held down
  isDrag = true;
});

//eventListener to add mouseover to 'paint' while mouse is held down and moving
canvas.addEventListener('mouseover', function(event){
  //checks if mouse button is still pressed down while passing over canvas
  if(isDrag == true) {
    paintCanvas();
    console.log('continuous painting');
  }
});

//adds doubleclick to 'erase' color from one cell
canvas.addEventListener('dblclick', function(event){
  if(event.target.nodeName === 'TD'){
    event.target.style.backgroundColor = '#fff';
  }
});
