function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateAns(){
    ans = randomInteger(min,max);
}
function setPlayers(n){
    noPlayers = n;
    for(let x=2 ; x<=5 ;x++){
        document.getElementById(`${x}`).style.color = "black";
    }
    document.getElementById(`${n}`).style.color = "white";
}
const timer = ms => new Promise(res => setTimeout(res,ms))
var ans=-1;
var min=1,max=100;
var guess = -1;
var noPlayers = 3;
var gameStarted = false;
window.onload = init;

function init(){
    document.getElementById("3").style.color = "white";
    document.getElementById("turnmsg").innerText = "Choose Total Numbers (100,500,1000)";
    document.getElementById("btn").disabled = false;
}

function Play(){
    for(let x=2 ; x<=5 ;x++){
        document.getElementById(`${x}`).disabled = true;
    }
    console.log("Your Turn");
    document.getElementById("turnmsg").innerText = "Your Turn (Guess a Number)";
    document.getElementById("btn").disabled = false;
    // getValuefromUser();
}
function getValueFromUser(){
    if(gameStarted == false){
        var input = document.getElementById("ans");
        max = parseInt(input.value);
        console.log(max);
        generateAns();
        gameStarted = true;
        Play();
    }
    else{
    document.getElementById("btn").disabled = true;
    var input = document.getElementById("ans");
    guess = parseInt(input.value);
    console.log(guess);
    if(guess != ans){
        if(guess > ans){
            console.log("Guess a Smaller Number");
            document.getElementById("guessmsg").innerText = "Guess a Smaller Number";
            max = guess;
        }else{
            console.log("Guess a Higher Number");
            document.getElementById("guessmsg").innerText = "Guess a Higher Number";
            min = guess;
        }
        // console.log("Player 2's Turn");
        // getValueFromPlayer();
        CPUturn();
    }else{
        console.log("Correct Ans");
        document.getElementById("turnmsg").innerText = "Correct Guess!";
        document.getElementById("guessmsg").innerText = "You Win!";
    }
}
    input.value = '';
}

async function CPUturn(){
    let run = 2;
    for(let i=2 ;i<=noPlayers;i++ ){
        console.log(`Player ${i}'s Turn`);
        document.getElementById("turnmsg").innerText = `Player ${i}'s Turn`;
        await timer(2000);

        run = await getValueFromPlayer(i);
        if(run == 1){
            console.log(`Player ${i} Wins!`);
            document.getElementById("guessmsg").innerText = `Player ${i} Wins!`;
            break;
        }
    }
    if(run != 1){
        console.log("Your Turn");
        document.getElementById("turnmsg").innerText = "Your Turn (Guess a Number)";
        document.getElementById("btn").disabled = false;
    }
}
async function getValueFromPlayer(i){
    guess = randomInteger(min,max);
    console.log(guess);
    document.getElementById("turnmsg").innerText = `Player ${i} Guessed ${guess}`;
    await timer(2000);
    if(guess != ans){
        if(guess > ans){
            console.log("Guess a Smaller Number");
            document.getElementById("guessmsg").innerText = "Guess a Smaller Number";
            max = guess;
        }else{
            console.log("Guess a Higher Number");
            document.getElementById("guessmsg").innerText = "Guess a Higher Number";
            min = guess;
        }
        return 0;//next turn
    }else{
        return 1;//correct ans
    }
}
    
