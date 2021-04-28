function countdown(num){
let count = setInterval(function countdown(){
  num--;
  if(num>0){
    console.log(num);
  }else{
    clearInterval(count);
    console.log("DONE!");
  }
},1000)
}

countdown(15);