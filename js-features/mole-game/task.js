let dead = document.getElementById('dead');
let lost = document.getElementById('lost');
function checkHoles () {
    for(let x = 1; x <= 9; x++) {
        let hole = document.getElementById(`hole${x}`);
        hole.onclick = function () {
            function checkCondition() {
                if (Number(dead.textContent) >= 10){
                    alert("You win");
                    reset();
                } else if (Number(lost.textContent) >= 5){
                    alert("You lose");
                    reset();
                }
            }
            function reset() {
                dead.textContent = 0;
                lost.textContent = 0;
            }
            if (hole.className.includes('hole_has-mole')) {
                dead.textContent = Number(dead.textContent) + 1;
                checkCondition();
            } else {
                lost.textContent = Number(lost.textContent) + 1;
                checkCondition();
            }
        }
    }
}
checkHoles();