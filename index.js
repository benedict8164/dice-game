var randomNumber1 = Math.floor(Math.random()*6)+1;
    // randomNumber2 = randomNumber1 * 6;
    // randomNumber3 = Math.floor(randomNumber2)+1;
var imagesRandom1="images/dice"+randomNumber1+".png";
var randomImages=document.querySelectorAll("img")[0].setAttribute("src",imagesRandom1);


var randomNumber2 = Math.floor(Math.random()*6)+1;
var imagesRandom2="images/dice"+randomNumber2+".png";
var randomImages2=document.querySelectorAll("img")[1].setAttribute("src",imagesRandom2);


if (randomNumber1<randomNumber2){
    document.getElementsByClassName("refresh")[0].innerHTML="Player 2 WIN!";
}
else if(randomNumber1>randomNumber2){
    document.getElementsByClassName("refresh")[0].innerHTML="Player 1 WIN!";
}else{
    document.getElementsByClassName("refresh")[0].innerHTML="tie refresh it!";
}


















// var listOfDiceP1Parent=document.getElementsByClassName("player1");
// var listOfDiceChild1=document.getElementsByClassName("playerdice1");
// var listOfDiceP2Parent=document.getElementsByClassName("player2");
// var listOfDiceChild2=document.getElementsByClassName("playerdice2");

// document.getElementById("player1").classList.add("playerhide1");













    document.getElementById("player2").classList.add("playerhide2");













//    while(listOfDiceChild1.length>0){
//     listOfDiceChild1[0].parentNode.removeChild(listOfDiceChild1[0]);//this code is for removing dice
//    }
//    while(listOfDiceChild2.length>0){
//     listOfDiceChild2[0].parentNode.removeChild(listOfDiceChild2[0]);//this code is for removing dice
//    }





    


