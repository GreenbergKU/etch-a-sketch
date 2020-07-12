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

// function fillGrid(number) {
    // let shortDivSide = this.innerHeight < this.innerWidth ? this.innerHeight : this.innerWidth;
    // let extraRoomNum = number + number/5;   
    // let mainSize = shortDivSide - (shortDivSide/10);    
    // let divSize = mainSize / extraRoomNum;
    // for (let i = 0; i < Math.pow(number, 2); i++) {
    //     const gridDiv = document.createElement("div");
    //     gridDiv.id = `item${i+1}`;
    //     gridDiv.name = i + 1;
    //     gridDiv.setAttribute('style', `width: ${divSize}px; padding: ${divSize*.5}px`);
    //     createBorder(gridDiv, number)
    //     gridItems.push(gridDiv);
    // }; 
// }

    // console.log('div#grid-item.style.padding: ', gridContainer.children[0].style.padding);  

// fucntion createDiv() {
    // let gridItems = [];
    //let shortDivSide = this.innerHeight < this.innerWidth ? this.innerHeight - (this.innerHeight/15) : this.innerWidth;

    //let mainSize = shortDivSide - (shortDivSide/15);

    //let divSize = mainSize / number;
    // console.log('number: ', number, 'divSize: ', divSize, 'Math.pow(number, 2): ', Math.pow(number, 2));
    
    // console.log('gridDiv.id: ', gridDiv.id, 'gridDiv.name: ', gridDiv.name);

    // console.log(
    //     'gridItems(#): ', gridItems.length, 
    //     'gridItems[0].id: ', gridItems[0].id,
    //     'gridItems[0].name: ', gridItems[0].name,
    // );
// }

// function createBorder(gridElement, number) {
    // if (gridDiv.name <= number) {
    //     gridDiv.classList.add("border-top");
    // };
    // if (gridDiv.name % number === 0) {
    //      gridDiv.classList.add("border-right");    
    // };
    // if (gridDiv.name === 1 || (gridDiv.name - 1) % number === 0) {
    //     gridDiv.classList.add("border-left");    
    // };
    // if (gridDiv.name > (Math.pow(number, 2)) - 16) {
    //     gridDiv.classList.add("border-bottom");
    // };
//}

// function createBorder(divElement, number) {
//     if (divElement.name <= number) {
//         divElement.setAttribute('style', 'border-top: silver 2px solid');
//     };
//     if (divElement.name % number === 0) {
//         divElement.setAttribute('style', 'border-right: silver 2px solid');   
//     };
//     if (divElement.name === 1 || (divElement.name - 1) % number === 0) {
//         divElement.setAttribute('style', 'border-left: silver 2px solid');    
//     };
//     if (divElement.name > (Math.pow(number, 2)) - 16) {
//         divElement.setAttribute('style', 'border-bottom: silver 2px solid');
//     };
// }

// function createBorder(divElement, number, size) {
//     if (divElement.name <= number) {
//         divElement.setAttribute('style', `border-top: silver 1px solid; width: ${size}px; 
//         padding: ${size*.5}px`);
//     };
//     if (divElement.name % number === 0) {
//         divElement.setAttribute('style', `border-right: silver 1px solid; width: ${size}px; 
//         padding: ${size*.5}px`);   
//     };
//     if (divElement.name === 1 || (divElement.name - 1) % number === 0) {
//         divElement.setAttribute('style', `border-left: silver 1px solid; width: ${size}px; 
//         padding: ${size*.5}px`);    
//     };
//     if (divElement.name > (Math.pow(number, 2)) - number) {
//         divElement.setAttribute('style', `border-bottom: silver 1px solid; width: ${size}px; 
//         padding: ${size*.5}px`);
//     };
// }

        // console.log(
        //     'gridDiv.style.padding: ', gridDiv.style.padding,
        //     'gridDiv.name: ', gridDiv.name,
        //     'gridDiv.name % number: ', gridDiv.name % number,
        // );

        // console.log(
        //     'shortDivSide: ', shortDivSide,
        //     'number: ', number, 
        //     'extraRoomNum: ', extraRoomNum, 
        //     'mainSize: ', mainSize,
        //     'divSize: ', divSize,
        // );

        // console.log(
        //     'this(Window).innerHeight: ', this.innerHeight, 
        //     'this.innerWidth: ', this.innerWidth,
        //     'number: ', number,
        // );

        //const gridDivP = document.createElement("p");
        //gridDivP.innerText = i + 1;
        //gridDiv.appendChild(gridDivP);

    // gridContainer.style.gridTemplateColumns = `repeat(${number}, auto)`;
    //     console.log('gridContainer.style.gridTemplateColumns: ', gridContainer.style.gridTemplateColumns);
    // gridContainer.style.gridTemplateRows = `repeat(${number}, auto)`;


    // console.log("event...= ", event.target.id);
    // console.log('elementID: ', elementID);   
        
    // item.classList.remove("purple");
    // console.log('gridContainer.children: ', gridContainer.children);
    // console.log('gridNum: ', gridNum);


