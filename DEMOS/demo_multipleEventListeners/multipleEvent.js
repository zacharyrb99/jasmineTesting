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

//OR you can use event delegation (below)

let addButton = document.querySelector('#add-friend');
let input = document.querySelector('#first-name');
let friendList = document.querySelector('#friend-list');

let bestFriendButton = document.querySelector('#add-best-friend');
let inputBestFriend = document.querySelector('#best-friend');

friendList.addEventListener('click', function(event){
    console.log(event.target);
    if(event.target.tagName === 'BUTTON'){
        event.target.parentElement.remove();
    }else if(event.target.tagName === 'LI'){
        console.log('you click an li');
    }
})

addButton.addEventListener('submit', function(event){
    event.preventDefault();
    let newFriend = document.createElement('li');
    let removeBtn = document.createElement('button');
    
    newFriend.innerText = input.value;
    removeBtn.innerText = "Delete Friend"
    friendList.append(newFriend);
    newFriend.append(removeBtn);
})

bestFriendButton.addEventListener('submit', function(event){
    event.preventDefault();
    let newBestFriend = document.createElement('li');
    let removeBtn = document.createElement('button');
    let heart = document.createElement('span');

    removeBtn.innerText = "Delete Friend"
    newBestFriend.innerText = inputBestFriend.value;
    newBestFriend.classList.add('best-friend');
    heart.innerHTML = '&hearts;';

    friendList.append(newBestFriend);
    newBestFriend.append(removeBtn);
    newBestFriend.prepend(heart);
})