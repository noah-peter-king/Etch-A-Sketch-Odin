const container = document.querySelector(".container");

for (i = 0; i < 16; i++){
  let square = document.createElement("div");
  square.classList.add("square");
  container.appendChild(square);
  square.addEventListener("mouseover", (event) => {square.classList.add("hover")});

}
//You could calculate the size of each grid item by getting the width of the container 
//divided by the number of squares in a row I think
