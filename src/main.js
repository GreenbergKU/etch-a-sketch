const gridContainer = document.getElementById('grid-container');

let gridNum = 16;
document.onload = fillGrid(gridNum);

gridContainer.addEventListener('mouseover', changeBackground);
document.getElementById('clear-board').addEventListener('click', clearBoard);

function fillGrid(number) {
    gridContainer.setAttribute(
        'style', `
            grid-template-columns: repeat(${number}, auto); grid-template-rows: repeat(${number}, auto)
        `
    );
    let gridItems = [];
    createDiv(number, gridItems);
    gridItems.forEach(function(div) {
        div.classList.add("grid-item");      
        gridContainer.appendChild(div);
    });
}

function createDiv(number, allElements) {
    let mainSize = this.innerHeight < this.innerWidth ? this.innerHeight - (this.innerHeight/20) : this.innerWidth;
    let extraRoomNum = number + number/5;     
    let divSize = (mainSize / extraRoomNum) -2;
    for (let i = 0; i < Math.pow(number, 2); i++) {   
        const gridDiv = document.createElement("div");
        gridDiv.id = `item${i + 1}`;
        gridDiv.name = `${i + 1}`;
        gridDiv.setAttribute(
            'style', `
                width: ${divSize}px; padding: ${divSize * .5}px;
            `
        );
        createBorder(gridDiv, number)
        allElements.push(gridDiv);
    }; 
}

function createBorder(gridElement, number) {
    if (gridElement.name <= number) {
        gridElement.classList.add("border-top");
    };
    if (gridElement.name % number === 0) {
        gridElement.classList.add("border-right");
    };
    if (gridElement.name === 1 || (gridElement.name - 1) % number === 0) {
        gridElement.classList.add("border-left");
    };
    if (gridElement.name > (Math.pow(number, 2) - number)) {
        gridElement.classList.add("border-bottom");
    };    
}

function changeBackground(event) {   
    const itemID = event.target.id;
    const elementID = document.getElementById(itemID);
    if (itemID.includes("item")) {
        elementID.classList.add("purple");
        createBorder(event.target, gridNum);
    };
}

function clearBoard() {
    const allGridItems = document.querySelectorAll(".grid-item");
    allGridItems.forEach(function(item) {
        gridContainer.removeChild(item);
    });
    const gridNumMsg = "New Board's Dimentions? Hint: default length/width is 16 grid-squares (16x16)";  
    promptMessage(gridNumMsg, 16);
}

function promptMessage(promptMsg, promptDefault) {   
    gridNum = prompt(promptMsg, promptDefault);
    gridNum = gridNum === null ? promptDefault : Number(gridNum);
    fillGrid(gridNum);
}
