const containerDiv = document.querySelector(".container");
const button = document.querySelector("button");
let total_squares = 256;
buildSquare(Math.sqrt(total_squares));
button.addEventListener("click", promptUser);

function promptUser() {
  let squaresPerSide = prompt(
    "How many squares per side?\nPlease enter a number less than 100",
    "",
  );
  if (squaresPerSide >= 100) {
    let squaresPerSide = prompt(
      "How many squares per side?\nPlease enter a number less than 100",
      "",
    );
  }
  buildSquare(squaresPerSide);
}

function buildSquare(squaresPerSide) {
  total_squares = squaresPerSide ** 2;
  while (containerDiv.firstChild) {
    containerDiv.removeChild(containerDiv.firstChild);
  }
  squareDimensions = 960 / squaresPerSide;
  console.log(`${squareDimensions}px`);
  for (i = 0; i < total_squares; i++) {
    let squareDiv = document.createElement("div");
    squareDiv.classList.add("square-div");
    squareDiv.classList.add("square-div:hover");
    squareDiv.style.height = `${squareDimensions}px`;
    squareDiv.style.width = `${squareDimensions}px`;
    containerDiv.append(squareDiv);
  }
}
