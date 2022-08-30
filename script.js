const container = document.querySelector('#container');


//const div = document.createElement('div')
//container.appendChild(div)

function makeGrid(gridSize) {
    const grid = gridSize * gridSize;
    for(let i = 0; i < grid; i++) {
        const div = document.createElement('div')
        container.appendChild(div);
        div.classList.add('grid-div')
    }
}
//makeGrid(16);

function removeGrid(parent) {
    while (parent.firstChild) { //While there exists a child in the parent node
        parent.removeChild(parent.firstChild)
    } 
}


const gridDivs = document.querySelectorAll('.grid-div')
//console.log(gridDivs)

gridDivs.forEach(div => div.addEventListener('mouseover', () => {
    div.style.backgroundColor = 'black'
}));
// Listen for when someone puts their mouse over one of the grid divs

const input = document.querySelector('input')
console.log(input.value)

input.addEventListener('change', () => {
    console.log(input.value)
    
    makeGrid(input.value)
    container.style.gridTemplateRows = `${input.value} 1fr`;
    container.style.gridTemplateColumns = `${input.value} 1fr`;
});


