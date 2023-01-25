

function createCounter() {
    let count = 0;
    // create
    const counterContainer = document.createElement("div");
    const counterHeading = document.createElement("h1");
    const counterValue = document.createElement("p");
    const counterBtnContainer = document.createElement("div");
    const incBtn = document.createElement("button");
    const decBtn = document.createElement("button");

    //ids and classes
    counterContainer.classList.add("counterContainer");
    counterHeading.classList.add("counterHeading");
    counterValue.classList.add("counterValue");
    counterBtnContainer.classList.add("counterBtnContainer");
    incBtn.classList.add("incBtn");
    decBtn.classList.add("decBtn");

    //inner values
    counterHeading.innerText = "COUNTER";
    counterValue.innerText = "0";
    incBtn.innerText = "+";
    decBtn.innerText = "-";

    //append 
    rootDiv.appendChild(counterContainer);
    counterContainer.appendChild(counterHeading);
    counterContainer.appendChild(counterValue);
    counterContainer.appendChild(counterBtnContainer);
    counterBtnContainer.appendChild(incBtn);
    counterBtnContainer.appendChild(decBtn);

    //functions
    incBtn.addEventListener('click', ()=>{
        counterValue.innerText = ++count;
    });
    decBtn.addEventListener('click', ()=>{
        counterValue.innerText = --count;
    })
}


