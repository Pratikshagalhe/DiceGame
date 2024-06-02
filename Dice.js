
function roll(){
    setTimeout(function(){
        var randomNo1 = Math.floor(Math.random()*6)+1;
        var randomNo2 = Math.floor(Math.random()*6)+1;

        document.querySelector(".img1").setAttribute("src","/Html5AndCss3/DiceGame/imageFolder/d"+randomNo1+".jpg");
        document.querySelector(".img2").setAttribute("src","/Html5AndCss3/DiceGame/imageFolder/d"+randomNo2+".jpg");

        if(randomNo1>randomNo2){
          document.querySelector(".win").innerHTML="Player 1 wins !!";
        }
        else if(randomNo1==randomNo2){
            document.querySelector(".win").innerHTML="Draw!";
        }
        else{
            document.querySelector(".win").innerHTML="Player 2 wins !!";
        }
    },2000);
}