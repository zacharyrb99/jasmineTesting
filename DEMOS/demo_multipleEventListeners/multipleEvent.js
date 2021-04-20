// let removeButton = document.querySelectorAll('li button');
// let addButton = document.querySelector('#add-friend');
// let input = document.querySelector('#first-name');
// let friendList = document.querySelector('#friend-list')

// for(let btn of removeButton){
//     btn.addEventListener('click', function(event){
//     event.target.parentElement.remove();
// });
// }

// addButton.addEventListener('submit', function(event){
//     event.preventDefault();
//     console.log(input.value);
//     let newFriend = document.createElement('li');
//     newFriend.innerText = input.value;
//     input.value = "";
//     friendList.append(newFriend);
//     let removeBtn = document.createElement('button');
//     removeBtn.innerText = "Delete Friend"
//     newFriend.append(removeBtn);
//     removeBtn.addEventListener('click', function(event){
//         event.target.parentElement.remove();
//     })
    
//     for(let btn of removeButton){
//         btn.addEventListener('click', function(event){
//         event.target.parentElement.remove();
//     });
//     }


// })

//OR you can use event listener (below)

let removeButton = document.querySelectorAll('li button');
let addButton = document.querySelector('#add-friend');
let input = document.querySelector('#first-name');
let friendList = document.querySelector('#friend-list')

addButton.addEventListener('submit', function(event){
    event.preventDefault();
    let newFriend = document.createElement('li');
    let removeBtn = document.createElement('button');

    friendList.addEventListener('click', function(event){
        console.log(event.target);
        if(event.target.tagName === 'button'){
            event.target.parentElement.remove();
        }
    })

    console.log(input.value);
    
    newFriend.innerText = input.value;
    input.value = "";
    friendList.append(newFriend);
    
    removeBtn.innerText = "Delete Friend"
    newFriend.append(removeBtn);
    removeBtn.addEventListener('click', function(event){
        event.target.parentElement.remove();
    })


})