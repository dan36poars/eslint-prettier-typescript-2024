const countdown = document.querySelector(".countdown");


const updateLabel = (number) => countdown.innerHTML = number;


(function () {
    let number = 10;

    setInterval(() => {
        number--;
        updateLabel(number);            
        if (number < 0) {
            updateLabel('fim!')
            number = 10;
            clearInterval();
        } 
    }, 1000);
})()
