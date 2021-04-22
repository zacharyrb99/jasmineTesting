let form = document.querySelector('#memeForm');
let imageLink = document.querySelector('input[name="imagelink"]');
let topText = document.querySelector('input[name="toptext"]');
let bottomText = document.querySelector('input[name="bottomtext"]');
let results = document.querySelector('#results');


form.addEventListener('submit', function(event){
    event.preventDefault();
    
    let meme = makeMeme(imageLink.value, topText.value, bottomText.value);
        results.append(meme);
})


function makeMeme(link, top, bottom){

    let div = document.createElement('div');
    let image = document.createElement('img');
    let topDiv = document.createElement('div');
    let bottomDiv = document.createElement('div');
    
    image.setAttribute('src', link);
    div.append(image);
    div.style.position = 'relative'
    div.style.width = '500px';
    div.style.width = '500px';

    topDiv.innerText = top;
    topDiv.classList.add('memeStyle');
    topDiv.style.top = '1px';
    div.append(topDiv);

    bottomDiv.innerText = bottom;
    bottomDiv.classList.add('memeStyle');
    bottomDiv.style.bottom = '1px';
    div.append(bottomDiv)
    
    return div;
}

results.addEventListener('click', function(event){
    event.preventDefault();
    event.target.parentElement.remove(results);
})