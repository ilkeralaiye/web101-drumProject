var buttonList = document.querySelectorAll("button");
var soundFileList = [
    "./sounds/tom-1.mp3",
    "./sounds/tom-2.mp3",
    "./sounds/tom-3.mp3",
    "./sounds/tom-4.mp3",
    "./sounds/snare.mp3",
    "./sounds/crash.mp3",
    "./sounds/kick-bass.mp3",
]

function playSound(index) {
    var audio = new Audio(soundFileList[index]);
    audio.play();
}

/*Handling Keyboard Activation */
function handlePress(event) {
    var key = event.key.toLowerCase();
    for (let index = 0; index < buttonList.length; index++) {
        if (key === buttonList[index].innerHTML.toLowerCase()) {
            playSound(index);
        }
    }
}

document.addEventListener("keydown", handlePress);

/*Handling Clicking Activation */
for (let index = 0; index < buttonList.length; index++) {
    buttonList[index].addEventListener('click', () => playSound(index));

}







