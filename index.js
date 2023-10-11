var rnd1 = Math.floor(Math.random()*6)+1;
var rnd2 = Math.floor(Math.random()*6)+1;


iPath1 = "./images/dice"+rnd1+".png";

image1= document.querySelectorAll("img")[0];
image1.setAttribute("src",iPath1);

iPath2 ="./images/dice"+rnd2+".png";

image2= document.querySelectorAll("img")[1];
image2.setAttribute("src",iPath2);

if (rnd1 > rnd2){
    document.querySelector("h1").innerHTML = "Player 1 wins"

}else if(rnd2 > rnd1){
    document.querySelector("h1").innerHTML = "Player 2 wins"   
}else{
    document.querySelector("h1").innerHTML = "Play again";
}


