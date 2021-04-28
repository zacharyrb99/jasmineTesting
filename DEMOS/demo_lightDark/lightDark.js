let toggle = document.querySelector('input[type="checkbox"]');

if(localStorage.getItem('darkModeEnabled')){
    document.body.className = 'dark';
    toggle.checked = true;
}

toggle.addEventListener('click', function(event){
    const checked = toggle.checked;
    
    if(checked){
        localStorage.setItem('darkModeEnabled', true);
    }else{
        localStorage.removeItem('darkModeEnabled');
    }

    document.body.className = checked ? 'dark': ''
})