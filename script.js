document.addEventListener("DOMContentLoaded", () => {
   
    const grid = document.querySelector('.container')
    //Grid Initial creation
    generateGrid(16, grid)
    
    //Grid Resizing
    let button = document.getElementById('btn-resize')
    
    button.addEventListener("click", function (){
        let size = gridSize()
        grid.innerHTML = ""
        generateGrid(size,grid)
    })    
})

function generateGrid(x,grid){
    for(let i = 0; i < x*x; i++){

        const cell = document.createElement('div')
        cell.id = `cell-${i}`
        cell.className = 'cell'

        cell.style.width = `${100 / x}%`
        cell.style.height = `${100 / x}%`
        
        grid.appendChild(cell)

    }

    //Cell random color change on hover
    const cells = document.querySelectorAll('.cell')

    cells.forEach(cell => {
        cell.addEventListener('mouseenter', () => {
            cell.style.backgroundColor = getRandomColor();
        })
    })
}

function gridSize (){
    const input = prompt("Enter number of cells per row:")
    if (input !== null && input < 100 && !isNaN(input)){
            return input
    } else {
        alert("Please enter a valid number under 100!")
    }
}

function getRandomColor(){
    return '#' + Math.floor(Math.random()*16777215).toString(16)
}