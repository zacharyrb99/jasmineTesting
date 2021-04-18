function randomGame(){
    let num;
    let count = 0;
    let timer = setInterval(function(){
        if(num > 0.75){
            clearInterval(timer);
            console.log("It took " + count +  " tries before getting a number greater than 0.75.");
        } else{
            num = Math.random();
            count++;
        }
    },1000)
}

return randomGame();
