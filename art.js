console.log('hello world');

// voor de image in de tweede pagina//

var ButtonClick = document.querySelector(".second main li:nth-of-type(6)");
var ImageClick = document.querySelector(".second main section img:nth-of-type(1)");

ButtonClick.addEventListener('click', function() {
    if (ImageClick.style.display === 'block') {
        ImageClick.style.display = 'none';
    } else {
        ImageClick.style.display = 'block';
    } 
});


// voor de eerste button // 


var DeEersteButton;

DeEersteButton = document.querySelector("button:nth-of-type(1)");

DeEersteButton.onclick = veranderMezelf;

function veranderMezelf() {
    DeEersteButton.classList.toggle("anders");
}

// // voor de tweede button // 

var DeTweedeButton;

DeTweedeButton = document.querySelector("button:nth-of-type(2)");

DeTweedeButton.onclick = veranderNogeenkeer;

function veranderNogeenkeer() {
    DeTweedeButton.classList.toggle("ietsanders");
}











