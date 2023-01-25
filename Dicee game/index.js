//player no. 1 dice 

var randomNumber1 = Math.floor(Math.random()*6)+1;

var randomDiceImages = "dice" + randomNumber1 + ".png"; 
var randomDiceLink = "images/" + randomDiceImages;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomDiceLink);
 
//player no. 2 dice

var randomNumber2 = Math.floor(Math.random()*6)+1;

var randomDiceLink2 = "images/dice" + randomNumber2 + ".png";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",randomDiceLink2);

//if and else

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 wins";
}
else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "Player 2 wins";
}
else{
    document.querySelector("h1").innerHTML = "Draw";
}