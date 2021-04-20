// let body = document.querySelector("body");
// body.addEventListener("mouseover", function(event){
//   let positionX = event.clientX;
//   let positionY = event.clientY;
// //   let red
// //   body.style.color = "rbg(red, 0, blue)";  
// })

document.addEventListener("mousemove", function(event){
    let positionX = event.pageX;
    let positionY = event.pageY;
    let r = Math.round((positionX * 255)/window.innerHeight);
    let b = Math.round((positionY * 255)/window.innerWidth);
    let color = `rgb(${r}, 0, ${b})`;
    document.body.style.backgroundColor = color;
    console.log(color);
   
})
