// Get DOM elements
const containerDiv = document.querySelector(".container");
const button = document.querySelector("button");

// Initialize with 16x16 grid (256 total squares)
let total_squares = 256;
buildSquare(Math.sqrt(total_squares));

// Set up button click handler to change grid size
button.addEventListener("click", promptUser);

/**
 * Prompts user for grid size and rebuilds the grid
 * Validates that input is less than 100
 */
function promptUser() {
  let squaresPerSide = prompt(
    "How many squares per side?\nPlease enter a number less than 100",
    "",
  );
  // Re-prompt if user enters 100 or more
  if (squaresPerSide >= 100) {
    let squaresPerSide = prompt(
      "How many squares per side?\nPlease enter a number less than 100",
      "",
    );
  }
  buildSquare(squaresPerSide);
}

/**
 * Builds a grid of square divs based on the specified size
 * @param {number} squaresPerSide - Number of squares per side of the grid
 */
function buildSquare(squaresPerSide) {
  total_squares = squaresPerSide ** 2;

  // Clear existing grid
  while (containerDiv.firstChild) {
    containerDiv.removeChild(containerDiv.firstChild);
  }

  // Calculate square dimensions to fit in 960px container
  squareDimensions = 960 / squaresPerSide;
  console.log(`${squareDimensions}px`);

  // Create and append all square divs
  for (i = 0; i < total_squares; i++) {
    let squareDiv = document.createElement("div");
    squareDiv.classList.add("square-div");
    squareDiv.classList.add("square-div:hover");
    squareDiv.style.height = `${squareDimensions}px`;
    squareDiv.style.width = `${squareDimensions}px`;
    containerDiv.append(squareDiv);
  }
}
