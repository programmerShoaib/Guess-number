let guess = document.getElementById("guess");
let submit = document.getElementById("submit");
let result = document.getElementById("result");
let random = Math.floor(Math.random() * 10) + 1;
let attempts = document.getElementById("attempts");
submit.addEventListener("click", () => {
    if (guess.value == random) {
        result.innerHTML = "You won";
    } else {
        result.innerHTML = "You lost";
    }
    attempts.innerHTML = Number(attempts.innerHTML) + 1;
})