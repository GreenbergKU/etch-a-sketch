const gridContainer = document.getElementById('grid-container');

document.onload = fillGrid(16);

document.getElementById('clear-board').addEventListener('click', clearBoard)
gridContainer.addEventListener('mouseover', changeBackground);

function fillGrid(number) {
    let gridItems = [];
        console.log(
            'this(Window).innerHeight: ', this.innerHeight, 
            'this.innerWidth: ', this.innerWidth,
            'number: ', number,
        );
    let shortDivSide = this.innerHeight < this.innerWidth ? this.innerHeight : this.innerWidth;
    let extraRoomNum = number + number/5;   
    let mainSize = shortDivSide - (shortDivSide/10);    
    let divSize = mainSize / extraRoomNum;

    console.log(
        'shortDivSide: ', shortDivSide,
        'number: ', number, 
        'extraRoomNum: ', extraRoomNum, 
        'mainSize: ', mainSize,
        'divSize: ', divSize,
    );

    for (let i = 0; i < Math.pow(number, 2); i++) {
        const gridDiv = document.createElement("div");
        //gridDiv.innerText = i + 1;
        gridDiv.id = `item${i}`;   
        gridDiv.setAttribute('style', `width: ${divSize}px; padding: ${divSize*.5}px`);
            console.log('gridDiv.style.padding: ', gridDiv.style.padding);
        gridItems.push(gridDiv);
    };
    console.log(
        'gridItems(#): ', gridItems.length, 
        'gridItems[0].id: ', gridItems[0].id,
    );    
    gridContainer.setAttribute('style', `grid-template-columns: repeat(${number}, auto); grid-template-rows: repeat(${number}, auto)`)
    gridItems.forEach(function(div) {
        div.classList.add("grid-item");       
        gridContainer.appendChild(div);
    });
        console.log('div#grid-item.style.padding: ', gridContainer.children[0].style.padding);  
}
        //const gridDivP = document.createElement("p");
        //gridDivP.innerText = i + 1;
        //gridDiv.appendChild(gridDivP);


    // gridContainer.style.gridTemplateColumns = `repeat(${number}, auto)`;
    //     console.log('gridContainer.style.gridTemplateColumns: ', gridContainer.style.gridTemplateColumns);
    // gridContainer.style.gridTemplateRows = `repeat(${number}, auto)`;


function changeBackground() {
    console.log("event...= ", event.target.id);
    let itemID = event.target.id;
    if (itemID.includes("item")) {
        let elementID = document.getElementById(itemID);
        console.log('elementID: ', elementID);    
        elementID.classList.add("purple");
    };
}

function clearBoard() {
    const allGridItems = document.querySelectorAll(".grid-item");
    allGridItems.forEach(function(item) {
        item.classList.remove("purple");
        gridContainer.removeChild(item)
    });        
    console.log('gridContainer.children: ', gridContainer.children);
    promptGridNumber();
}

function promptGridNumber() {
    const gridNumMessage = "What size board would you prefer? The default value is 16 (16x16)"
    let gridNum = prompt(gridNumMessage, 16);
    console.log('gridNum: ', gridNum);
    fillGrid(Number(gridNum));
}




