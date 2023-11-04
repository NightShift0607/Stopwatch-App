// Creation of Event Listener

var playButton = document.querySelector("#playButton");
var pauseButton = document.querySelector("#pauseButton");
var stopButton = document.querySelector("#stopButton");

playButton.addEventListener("click", start);
pauseButton.addEventListener("click", pause);
stopButton.addEventListener("click", reset);


// Function to format millisecond to string format

function timeToString(time) {
    var diffInHrs = time / 3600000;
    var hh = Math.floor(diffInHrs);
    var formattedHH = hh.toString().padStart(2,"0");

    var diffInMin = (diffInHrs - hh) * 60;
    var mm = Math.floor(diffInHrs);
    var formattedMM = mm.toString().padStart(2,"0");

    var diffInSec = (diffInMin - mm) * 60;
    var ss = Math.floor(diffInSec);
    var formattedSS = ss.toString().padStart(2,"0");

    var millisecond = (diffInSec - ss) * 100;
    var ms = Math.floor(millisecond);
    var formattedMS = ms.toString().padStart(2,"0");

    return `${formattedHH}:${formattedMM}:${formattedSS}:${formattedMS}`;
}


// Variable declaration for further use

var startTime;
var elapsedTime = 0;
var timerInterval;


// Function to modify innerHTML

function Print(txt) {
    document.querySelector("#display").innerHTML = txt;
}


// Functions for start, pause and stop the stopwatch

function start() {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(function printTime() {
        elapsedTime = Date.now() - startTime;
        Print(timeToString(elapsedTime));
    }, 10);
    showButton("PAUSE");
}

function pause() {
    clearInterval(timerInterval);
    showButton("PLAY");
}

function reset() {
    clearInterval(timerInterval);
    Print("00:00:00:00");
    elapsedTime = 0;
    // showButton = "PLAY";
}


// Function to display buttons

function showButton(buttonKey) {
    const buttonToShow = buttonKey === "PLAY" ? playButton : pauseButton;
    const buttonToHide = buttonKey === "PLAY" ? pauseButton : playButton;
    buttonToShow.style.visibility = "visible";
    buttonToHide.style.visibility = "hidden";
}