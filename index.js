var randomnumber1 = Math.floor(Math.random()*6)+1;
var randomImage = "dice" + randomnumber1 + ".png"
var randomImageSource = "images/" + randomImage;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);

var randomnumber2 = Math.floor(Math.random()*6)+1;
var randomImage2 = "dice" + randomnumber2 + ".png"
var randomImageSource2 = "images/" + randomImage2;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource2);

if(randomnumber1 > randomnumber2){
document.querySelector("h1").innerHTML = "Player 1 Wins"
}
if(randomnumber1 < randomnumber2){
  document.querySelector("h1").innerHTML = "Player 2 Wins"
}