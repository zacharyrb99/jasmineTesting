function calculateTaxes(income){
    if(!Number.isFinite(income)){
        throw new Error('invalid input');
    }
    
    if(income>30000){
        return income * 0.25;
    }else{
        return income * 0.15;
    }
}

function removeDupes(values){
    const arr = [...new Set(values)]
    if(typeof values === 'string') return arr.join('')
    return arr;
}

function remove(arr, value){
    return arr.filter(function(elements){
        return elements !== value
    })
}

let usernames = [];
let nameInput = document.getElementById('username');

function submitForm(){
    usernames.push(nameInput.value);
}