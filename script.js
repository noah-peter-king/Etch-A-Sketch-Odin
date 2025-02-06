const container = document.querySelector(".container");
const resize = document.querySelector("#resize")
resize.addEventListener("click", (event) => {removeGrid() 
  makeGrid(prompt("Resize The Square"))
});

makeGrid(100);

function makeGrid(side){
  for (i = 0; i < side*side; i++){
    if (side > 100){
      alert("Less than 100 pretty please") 
      break;
    }
    let square = document.createElement("div");    
    square.classList.add("square");
    container.appendChild(square);
    square.addEventListener("mouseover", (event) => {square.classList.add("hover")});
    square.style.height = "" + 960 / side  + "px";
  }
  
}

function removeGrid(){
  while (container.hasChildNodes()) {
    container.removeChild(container.firstChild);
  }
}

//square.getElementsByClassName("square").style.height = "960 / 100";

//You could calculate the size of each grid item by getting the width of the container 
//divided by the number of squares in a row I think
