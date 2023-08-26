const container = document.getElementById("bubbles2");
const buttonOne = document.getElementById("expand-header");
const buttonTwo = document.getElementById("expand-header-two");

function photoExpand() {
    container.classList.toggle("unhide")
    buttonOne.classList.toggle("hide")
    buttonTwo.classList.toggle("unhide")
}

function collapseFunc() {
    container.classList.toggle("unhide");
    buttonOne.classList.toggle("hide")
    buttonTwo.classList.toggle("unhide")
}

document.getElementById('collapse').addEventListener('click', function() {
    var element = document.getElementById('expand-header');
    element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
});


/*
const button = document.getElementById('drop-down');
const secondDiv = document.getElementById('expand-header-two');

button.addEventListener('click', moveButton);

function moveButton() {
    secondDiv.appendChild(button)
}
 */