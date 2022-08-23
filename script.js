const container = document.querySelector('#container');


//const div = document.createElement('div')
//container.appendChild(div)

function makeGrid(gridSize) {
    const grid = gridSize * 2;
    for(let i = 0; i < grid; i++) {
        const div = document.createElement('div')
        container.appendChild(div);
        div.classList.add('grid-div')
    }
}
makeGrid(16);



