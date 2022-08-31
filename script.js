const container = document.querySelector('#container');
const gridSize = document.querySelector('#grid-size')
let gridDivs = document.querySelectorAll('.grid-div')
const input = document.querySelector('input')
console.log(input.value)

function makeGrid(gridSize) {
    const grid = gridSize * gridSize;
    for(let i = 0; i < grid; i++) {
        const div = document.createElement('div')
        container.appendChild(div);
        div.classList.add('grid-div')
        
    }
}
makeGrid(32);


function removeGrid(parent) {
    while (parent.firstChild) { //While there exists a child in the parent node
        parent.removeChild(parent.firstChild)
    } 
}


input.addEventListener('change', () => {
    gridSize.textContent = `${input.value}X${input.value}`
    removeGrid(container)
    makeGrid(input.value)
    container.style.gridTemplateRows = `repeat(${input.value}, 1fr)`;
    container.style.gridTemplateColumns = `repeat(${input.value}, 1fr)`;
    gridDivs = document.querySelectorAll('.grid-div')

    gridDivs.forEach(div => div.addEventListener('mouseover', () => {
        div.style.backgroundColor = 'black' // Listen for when someone puts their mouse over one of the grid divs
    }));
});



