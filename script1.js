'use strict';
//lets define our secret number
const secretnumber=Math.trunc(Math.random()*20)+1;
let score=20;
let highscore=0;
const msg=function(numberguess){
    document.querySelector(".numberguess").textContent=numberguess;
}
document.querySelector(".submit").addEventListener('click',function(){
    const userinput=Number(document.querySelector(".guessInput").value);

    if(!userinput ){
      msg("no number...");
    }
else if(userinput===secretnumber){
    msg("Congratulations! You guessed the right number!");
    document.querySelector('body').style.backgroundColor="green";
    document.querySelector('.Number').textContent=secretnumber;
    score--;
    //checking for a new highscore
    document.querySelector(".score").textContent=score;  

    if (score>highscore) {
        highscore=score;
        document.querySelector(".highscore").textContent="highest score is:"+highscore;  
}


}

else if(userinput!=secretnumber){
if(score>1){
    document.querySelector(".numberguess").textContent=userinput>secretnumber?"your guess is Too high":"Your guess is Too low";
    score--;
    document.querySelector(".score").textContent=score;    
}
else{
    document.querySelector(".numberguess").textContent="y0u lost! please trya again"
    document.querySelector(".score").textContent=0;    
}
}



});

document.querySelector(".again").addEventListener('click',function(){
    const score=20;
    document.querySelector('.score').textContent=score;
    document.querySelector('body').style.backgroundColor="black";
    document.querySelector('.Number').textContent="?";
    msg("Start guessing the number");
    if (score<highscore) {
        highscore=score;
        document.querySelector(".highscore").textContent="highest score is:"+highscore;  
}
document.querySelector(".guessInput").value=" ";
})

