function randomNumberGenerate(){
    value = Math.floor ( 1 + ( 6 * ( Math.random() )));
    return value
}

function diceImageGetter(value){
    if ( value == 6){
        return "./images/dice6.png";
    }
    else if ( value == 5 ){
        return "./images/dice5.png";
    }
    else if ( value == 4 ){
        return "./images/dice4.png";
    }
    else if ( value == 3 ){
        return "./images/dice3.png";
    }
    else if ( value == 2 ){
        return "./images/dice2.png";
    }
    else {
        return "./images/dice1.png";
    }
}

function rollDiceForP1(number){
    var diceImage = diceImageGetter(number);
    return diceImage;
}

function rollDiceForP2(number){
    var diceImage = diceImageGetter(number);
    return diceImage;
}

function whoWon(p1diceValue , p2diceValue){
    if (p1diceValue == p2diceValue){
        return "Please Roll again";
    }
    else if (p1diceValue > p2diceValue){
        return "<strong>Player 1</strong> Wins!"
    }
    else if (p1diceValue < p2diceValue){
        return "<strong>Player 2</strong> Wins!"
    }
}

function playAgain(){
    location.reload();
}

var p1diceValue = randomNumberGenerate();
var p2diceValue = randomNumberGenerate();

var p1diceImage = rollDiceForP1(p1diceValue);
document.querySelector('.img1').setAttribute('src' , p1diceImage);

var p2diceImage = rollDiceForP2(p2diceValue);
document.querySelector('.img2').setAttribute('src' , p2diceImage);

var winner = whoWon(p1diceValue, p2diceValue);
document.querySelector('.who-won').innerHTML = winner;