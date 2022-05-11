
const buttonSubmit = document.getElementById("buttonSubmit"); 
const active = document.getElementById("activeDiv");
const thank = document.getElementById("thankDiv");
const label = document.getElementById("labelMain");
const numbers = document.getElementById("numMain").querySelectorAll("div"); 
const spanRating = document.getElementById("rating");
let counter = 0;
let rating = "";

function changeBgOnHover () {
    buttonSubmit.style.backgroundColor = "white";
    buttonSubmit.style.color = "hsl(25, 97%, 53%)";
}

function changeBgMouseOut() {
    buttonSubmit.style.backgroundColor = "hsl(25, 97%, 53%)";
    buttonSubmit.style.color = "white";
}

function changeBbNumbers(event) {
    const target = event.target;
    if (counter === 0 || counter % 2 === 0) {
        target.style.backgroundColor = "hsl(25, 97%, 53%)";
        target.style.color = "white";
        counter++;
    } else {
                target.style.backgroundColor = "#262f38";
        target.style.color = "hsl(217, 12%, 63%)";
        counter++;
    }
        numbers.forEach(number => {
             if (number !== target) {
                number.style.backgroundColor = "#262f38";
                number.style.color = "hsl(217, 12%, 63%)";
            }
         })
         rating = target.textContent;
}

function displayNumber() {
    spanRating.textContent = rating;
}

function submitClick() {
    active.style.display = "none";
    thank.style.display = "unset";
    label.style.background = "linear-gradient(to bottom, #2e3947, #1f2630)";
    displayNumber();
}

buttonSubmit.addEventListener("mouseover", changeBgOnHover);
buttonSubmit.addEventListener("mouseout", changeBgMouseOut);
buttonSubmit.addEventListener("click", submitClick);
numbers[0].addEventListener("click", changeBbNumbers);
numbers[1].addEventListener("click", changeBbNumbers);
numbers[2].addEventListener("click", changeBbNumbers);
numbers[3].addEventListener("click", changeBbNumbers);
numbers[4].addEventListener("click", changeBbNumbers);




