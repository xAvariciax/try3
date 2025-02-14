const btnrandom = document.querySelector("#random-btn")

function moveraleatoriamente(btn) {
    btn.style.fontweight = "bolder";
    btn.style.position = "absolute";
    btn.style.top = Math.floor(Math.random()    * 90 + 5) + "%";
    btn.style.left = Math.floor(Math.random()    * 90 + 5) + "%";
 }
btnrandom.addEventListener("mouseenter", function (e) {
    moveraleatoriamente(e.target)
})
    