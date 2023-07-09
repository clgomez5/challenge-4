var timerCount = document.getElementsByClassName("start-button")

var timeAmount = 80;

function countdown() {
    var timeInterval = setInterval(function() {
        timeAmount--;
        timerCount = timeAmount;
        if(timeAmount === 0) {
            clearInterval(timeInterval);
        }
    })
}

countdown();
