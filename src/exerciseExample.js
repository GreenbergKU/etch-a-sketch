const container = document.querySelector("#container");
const createDiv = document.createElement('div');
const createDiv2 = document.createElement('div');
const createH1 = document.createElement('h1');
const createH3 = document.createElement('h3');
const createP = document.createElement('p');
const createP2 = document.createElement('p');
const btn = document.querySelector(".btn");
const btnTwo = document.getElementById("btn-2");
const inputButtons = document.querySelectorAll('button');


createDiv.classList.add('content');
createDiv.textContent = 'This is the glorious text-content!';

createP.classList.add('p-red');
createP.innerText= "Hey I'm red!"
createP.style.color= "red";

createH3.classList.add('h3-blue');
createH3.innerText = "I'm a blue h3!"
createH3.style.color="blue";

container.appendChild(createDiv);
container.lastChild.appendChild(createP);
createP.insertAdjacentElement("beforebegin", createH3);

createDiv2.classList.add('div2');
createDiv2.setAttribute('style', 'border:black 1px solid; background-color: pink;');

createH1.classList.add('h1-inside');
createH1.innerText = "I'm In a Div";

createP2.classList.add('p-inside');
createP2.innerText = "ME TOO!";

createDiv2.appendChild(createH1);
createDiv2.appendChild(createP2);
container.appendChild(createDiv2);


btnTwo.addEventListener("click", btnAlert); 

function btnAlert(event) {
    console.log(event.target);
    event.target.setAttribute('style', 'background: blue; color: white');
    alert("Hello World");
};

btn.onclick = () => alert("Hello World");

inputButtons.forEach(function(button) {
    button.addEventListener('click', alertAllButtons)
});

function alertAllButtons() {
    alert(event.target.id);
};

               