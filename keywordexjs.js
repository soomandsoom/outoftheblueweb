/*움직임*/
function move(element) {
element.classList.add("go");
}

/*div순서*/
document.addEventListener("DOMContentLoaded", function() {
    textPositions();
    });

function textPositions() {
    var container = document.body;
    var divs = document.querySelectorAll('#text');

    divs = Array.from(divs);

    divs.sort(function() {
    return 0.5 - Math.random();
    });

    divs.forEach(function(div) {
    container.appendChild(div);
    });
    }