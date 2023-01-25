// const rootDiv = document.getElementById("root");

function createTimer() {
    let hour = 0;
    let minute = 0;
    let second = 0;
    let ms = 0;
    let timer = null;
    
    //create
    const timerContainer = document.createElement("div");
    const timerHeading = document.createElement("h1");
    const timerValue = document.createElement("p");
    const timerBtnContainer = document.createElement("div");
    const resetBtn = document.createElement("button");
    const startBtn = document.createElement("button");
    const pauseBtn = document.createElement("button");


    //ids and classes
    timerContainer.classList.add("timerContainer");
    timerHeading.classList.add("timerHeading");
    timerValue.classList.add("timerValue");
    timerBtnContainer.classList.add("timerBtnContainer");
    resetBtn.classList.add("resetBtn");
    startBtn.classList.add("startBtn");
    pauseBtn.classList.add("pauseBtn");

    //inner values
    timerHeading.innerText = "TIMER ⏳";
    timerValue.innerHTML = `00<span>hr</span>:00<span>min</span>:00<span>sec</span>:000<span>ms</span>`;
    resetBtn.innerText = "Reset";
    startBtn.innerText = "Start";
    pauseBtn.innerText = "Pause";

    //append
    rootDiv.appendChild(timerContainer);
    timerContainer.appendChild(timerHeading);
    timerContainer.appendChild(timerValue);
    timerContainer.appendChild(timerBtnContainer);
    timerBtnContainer.appendChild(resetBtn);
    timerBtnContainer.appendChild(startBtn);
    timerBtnContainer.appendChild(pauseBtn);

    //functions
    function displayTimer() {
        ms += 10;
        if(ms == 1000) {
            ms = 0;
            second++;
            if(second == 60) {
                hour++;
                second = 0;
                if(minute == 60) {
                    hour++;
                    minute = 0;
                }
            }
        }

        let hrStr = (hour < 10) ? "0"+hour : hour;
        let minStr = (minute < 10) ? "0"+minute : minute;
        let secStr = (second < 10) ? "0"+second : second;
        let msStr = ""
        if(ms < 10) {
            msStr = "00" + ms;
        }
        else if(ms < 100){
            msStr = "0" + ms;
        }
        else {
            msStr = ms;
        }
        timerValue.innerHTML = `${hrStr}<span>hr</span>:${minStr}<span>min</span>:${secStr}<span>sec</span>:${msStr}<span>ms</span>`;
    }
    startBtn.addEventListener('click', ()=>{
        if(timer !== null) {
            return;
        }
        timer = setInterval(displayTimer, 10); //call display timer after every 10sec
    });

    pauseBtn.addEventListener('click', ()=> {
        clearInterval(timer);
        timer = null;
    })

    resetBtn.addEventListener('click', ()=>{
        clearInterval(timer);
        timer = null;
        timerValue.innerHTML = `00<span>hr</span>:00<span>min</span>:00<span>sec</span>:000<span>ms</span>`;
        ms = 0;
        second = 0;
        minute = 0;
        hour = 0;
    })
}


