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
makeGrid(32);


const gridDivs = document.querySelectorAll('.grid-div')
console.log(gridDivs)

gridDivs.forEach(div => div.addEventListener('mouseover', () => {
    div.style.backgroundColor = 'black'
}));



