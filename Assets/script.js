var timerCount = document.getElementsByClassName("start-button")

function countdown() {
    var timeAmount = 80;

    var timeInterval = setInterval(function() {
        if (timeAmount > 1) {
            
            timerCount = timeAmount;
            
            timeAmount--;
        }
    })
}

countdown();
