const outputElem = document.getElementById("output");
const inputElemSCR = document.getElementById("inputSCR");
const inputElemOP = document.getElementById("inputOP");
const btnElem = document.getElementById("btn");



btnElem.addEventListener("click", ()=>{
    const divElemR = document.createElement('div');
    const imgElem = document.createElement('img');
    imgElem.src = inputElemSCR.value;
    const closeElem = document.createElement('div');
    const header = document.createElement("p");
    header.innerText = inputElemOP.value;

    divElemR.classList.add('item');
    imgElem.classList.add('itemimg');

    closeElem.classList.add('close');
    closeElem.innerText = "x";

    divElemR.appendChild(closeElem);
    outputElem.appendChild(divElemR);
    divElemR.appendChild(header);
    divElemR.appendChild(imgElem);

    closeElem.addEventListener("click",
    event=>divElemR.remove());
    
   // header.innerText = inputElemOP.value;
});