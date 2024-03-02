function takeNames() {
    var e = prompt("What is Player Ones Name?"),
        r = prompt("What is Player Twos Name?");
    localStorage.setItem("PlayerOneName", e), localStorage.setItem("PlayerTwoName", r);
}
function randomNumberGenerate() {
    return Math.floor(1 + 6 * Math.random());
}
function diceImageGetter(e) {
    if (6 == e) return "./images/dice6.png";
    if (5 == e) return "./images/dice5.png";
    if (4 == e) return "./images/dice4.png";
    if (3 == e) return "./images/dice3.png";
    if (2 == e) return "./images/dice2.png";
    else return "./images/dice1.png";
}
function rollDice(e) {
    return diceImageGetter(e);
}
function whoWon(e, r, t, n) {
    return e == r ? "Please Roll again" : e > r ? "<strong>" + t + "</strong> Wins!" : e < r ? "<strong>" + n + "</strong> Wins!" : void 0;
}
function runProgram() {
    var e = localStorage.getItem("PlayerOneName"),
        r = localStorage.getItem("PlayerTwoName");
    (document.querySelector(".player-one-name").innerHTML = e), (document.querySelector(".player-two-name").innerHTML = r);
    var t = randomNumberGenerate(),
        n = rollDice(t);
    document.querySelector(".img1").setAttribute("src", n);
    var i = randomNumberGenerate(),
        a = rollDice(i);
    document.querySelector(".img2").setAttribute("src", a);
    var o = whoWon(t, i, e, r);
    (document.querySelector(".who-won").innerHTML = o), animate();
}
function playAgain() {
    location.reload();
}
function rollAgain() {
    document.querySelector(".img1").setAttribute("id", "dice-animate-none"), document.querySelector(".img2").setAttribute("id", "dice-animate-none"), runProgram();
}
function animateDice1() {
    document.querySelector(".img1").setAttribute("id", "dice-animate1");
}
function animateDice2() {
    document.querySelector(".img2").setAttribute("id", "dice-animate2");
}
function animate() {
    setTimeout(() => {
        animateDice1(), animateDice2();
    });
}
takeNames(), runProgram();
