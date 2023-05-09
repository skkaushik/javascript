function Startthegame(){

var player1=Math.random();
player1=player1*6+1;
player1=Math.floor(player1)
if(player1===1){
    document.querySelectorAll('img')[0].setAttribute('src','dice1.png')
}
if(player1===2){
    document.querySelectorAll('img')[0].setAttribute('src','dice2.png')
}
if(player1===3){
    document.querySelectorAll('img')[0].setAttribute('src','dice3.png')
}
if(player1===4){
    document.querySelectorAll('img')[0].setAttribute('src','dice4.png')
}
if(player1===5){
    document.querySelectorAll('img')[0].setAttribute('src','dice5.png')
}
if(player1===6){
    document.querySelectorAll('img')[0].setAttribute('src','dice6.png')
}

var player2=Math.random();
player2=player2*6+1; 
player2=Math.floor(player2)

if(player2===1){
    document.querySelectorAll('img')[1].setAttribute('src','dice1.png')
}
if(player2===2){
    document.querySelectorAll('img')[1].setAttribute('src','dice2.png')
}
if(player2===3){
    document.querySelectorAll('img')[1].setAttribute('src','dice3.png')
}
if(player2===4){
    document.querySelectorAll('img')[1].setAttribute('src','dice4.png')
}
if(player2===5){
    document.querySelectorAll('img')[1].setAttribute('src','dice5.png')
}
if(player2===6){
    document.querySelectorAll('img')[1].setAttribute('src','dice6.png')
}

if(player1>player2){
    document.getElementById('result').innerText='Winner is Player 1';
}
else if(player1<player2){

    document.getElementById('result').innerText='Winner is Player 2';
}
else if(player1===player2){
    document.getElementById('result').innerText='Draw';
}

}
