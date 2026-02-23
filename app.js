const containerDiv = document.querySelector('.container')
const NUMBER_OF_SQUARES = 256


for (i=0; i < NUMBER_OF_SQUARES; i++) {
    let squareDiv = document.createElement('div')
    squareDiv.classList.add("square-div")
    squareDiv.classList.add("square-div:hover")
    containerDiv.append(squareDiv)
}