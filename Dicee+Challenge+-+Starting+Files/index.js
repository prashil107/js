var randomNumber1 =Math.floor(Math.random() * 6 ) + 1 ;
var randDice = "dice" + randomNumber1 + ".png";
var randimgsrc = "images/" + randDice;
img1=document.querySelectorAll("img")[0];
img1.setAttribute("src",randimgsrc);
var randomNumber2 =Math.floor(Math.random() * 6) + 1 ;
var randimgsrc2 = "images/dice" + randomNumber2 + ".png";
img2=document.querySelectorAll('img')[1];
img2.setAttribute("src",randimgsrc2);

if (randomNumber1 > randomNumber2){
    document.querySelector("h1").textContent = "Player 1 wins";
}
else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").textContent = "Player 2 wins";
}
else{
    document.querySelector("h1").textContent = "Draw";
}