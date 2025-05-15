document.addEventListener("DOMContentLoaded", () => {

    const grid = document.querySelector('.container');

    for (let i = 0; i < 16*16; i++) {

        const cell = document.createElement('div');
        cell.id = `cell- ${i}`
        cell.className = 'cell'
        
        cell.style.width = `${100 / 16}%`
        cell.style.height = `${100 / 16}%`

        grid.appendChild(cell)
        
    }

    const cells = document.querySelectorAll('.cell')

    cells.forEach(cell => {
        cell.addEventListener('mouseenter', () => {
            cell.style.backgroundColor = getRandomColor();
        })
    })
    
})

function getRandomColor(){
    return '#' + Math.floor(Math.random()*16777215).toString(16);
}