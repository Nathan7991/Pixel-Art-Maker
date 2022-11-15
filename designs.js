/* I wanted the hexcode string of colorValue to set the "brush" color, and change the color 
of each cell clicked. */
function resetGrid() {
    canvas.innerHTML = '';
}
let canvas = document.querySelector("#pixelCanvas");
let gridHeight = '1';
let gridWidth = '1';
let column;
let row;
let colorValue = '#000';
document.querySelector("#color-picker").addEventListener("input", function() {
    colorValue = document.querySelector("#color-picker").value;
});
/* gridHeight will represent the amount of ROWS in the grid,
and gridWidth will represent the amount of COLUMNS in the grid.

Therefore, gridHeight will be used as the outer loop iterator stopping condition
when creating the grid using the makeGrid() function.

GridWidth will be the nested loop's stopping condition when creating cells of each row. */
document.querySelector("#inputHeight").addEventListener("input", function() {
    gridHeight = document.querySelector("#inputHeight").value;
});

document.querySelector("#inputWidth").addEventListener("input", function(event) {
    gridWidth = document.querySelector("#inputWidth").value;
});

function makeGrid() {
    for (let i = 1; i <= gridHeight; i++) {
        let column = document.createElement("tr");
        canvas.appendChild(column);
        for (let n = 1; n <= gridWidth; n++) {
            let row = document.createElement("td");
            column.appendChild(row);
            row.addEventListener("click", function (e) {
                console.log(e);
                row.style.backgroundColor = colorValue;
            });
        }
    }
    document.querySelector('td').addEventListener("click", function addColor() {
        document.querySelector('td').style.backgroundColor = colorValue;
    });
};

document.querySelector("#sizePicker").addEventListener("submit", function(event) {
    event.preventDefault();
    makeGrid();
});

document.querySelector("#reset").addEventListener("submit", function(event) {
    event.preventDefault();
    resetGrid();
});