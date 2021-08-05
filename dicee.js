

  var randomNumber1 = Math.random();
 var randomNumber1 =  (randomNumber1)*6 ;
  var randomNumber1 = Math.floor( randomNumber1)+1;


  var randomDiceImage = "dice"+ randomNumber1 + ".png";

  var randomImageSource =  randomDiceImage;

var imagenew = document.querySelectorAll("img")[0].setAttribute("src" , randomImageSource);



var randomNumber2 = Math.random();
var randomNumber2 =  (randomNumber2)*6 ;
var randomNumber2 = Math.floor( randomNumber2)+1;


var randomDiceImage = "dice"+ randomNumber2 + ".png";

var randomImageSource =  randomDiceImage;

var imagenew2 = document.querySelectorAll("img")[1].setAttribute("src" , randomImageSource);


  if(randomNumber1 > randomNumber2)
  {
    document.querySelector("h1").innerHTML="Player1 Wins !!";
  }
  else if(randomNumber2 > randomNumber1)
  {
    document.querySelector("h1").innerHTML="Player2 Wins !!" ;
  }
  else
  {
    document.querySelector("h1").innerHTML="It's Draw !!" ;
  }





// var randomNumber1 = Math.floor(Math.random()*6) +1;
// var randomDiceImage = "dice" + randomNumber1 + ".png";
// var randomImageSource = "images/" + randomDiceImage;
// var imagenew = document.querySelectorAll("img")[0];
// imagenew.setAttribute("src" , randomImageSource);
