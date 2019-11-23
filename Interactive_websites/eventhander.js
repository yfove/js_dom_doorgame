// Event Handler Registration
// 1. first create an event handler property for a click event that uses the readMore button as an event target

let readMore = document.getElementById('read-more')
let moreInfo = document.getElementById('more-info')

// Write your code here:
readMore.onclick = function() {
}

// 2. Now you need to make moreInfo element appear when the click event fires. Create a statement that changes the .display style property of the moreInfo element to 'block'

let readMore = document.getElementById('read-more')
let moreInfo = document.getElementById('more-info')

// Write your code here:
readMore.onclick = function() {
  moreInfo.style.display = 'block';
}

// Adding Event Handlers
// 1. create a function that changes the text in the view element to 'Hello, World!'
let textChange = function() {
    view.innerHTML = 'Hello, World!';
}
//2. now create a function named textReturn that changes the text of the view variable back to default
let textReturn = function() {
    view.innerHTML = 'View';
}

//3. assign textChange & textReturn  as an event handler funtion to a click event fire on the view variable and run your code
view.addEventListener('click', textChange);
view.addEventListener('click', textReturn);

//Removing Event Handlers
// 1. you need to add and event listener to lock with an anonymous function. Inside the function add a .removeEventListener() to turn off the openDoor function when a user tries to click the door
lock.addEventListener('click', function(){
    door.removeEventListener('click', openDoor)
})