let form = document.querySelector("#logoForm");
let brandName = document.querySelector('input[name="brandname"]');
let brandColor = document.querySelector('input[name="color"]');
let brandFontSize = document.querySelector('input[name="fontsize"]');
let results = document.querySelector("#results");

form.addEventListener("submit", function(event){
    event.preventDefault();
    let newLogo = makeLogo(
        brandName.value, 
        brandColor.value, 
        brandFontSize.value);
        results.append(newLogo);
    })

function makeLogo(text, color, size){
    let logo = document.createElement("h2");
    logo.innerText = text;
    logo.style.color = color;
    logo.style.fontSize = size + 'px';
    return logo;
}
