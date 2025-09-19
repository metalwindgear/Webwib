// Get the button and message elements by their IDs
const myButton = document.getElementById('myButton');
const messageElement = document.getElementById('message');
let hatd = 0;

// Add an event listener to the button
myButton.addEventListener('click', function() {
    // When the button is clicked, change the text of the message element
    if (hatd === 0) {
        messageElement.textContent = 'Hello, world! You just clicked the button. 😀';
        hatd += 1;
}
    else {
        messageElement.textContent = 'Hello, world! You just clicked the button. 😢';
        hatd += 1;
}
});
