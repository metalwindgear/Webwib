// Get the button and message elements by their IDs
const myButton = document.getElementById('myButton');
const messageElement = document.getElementById('message');

// Add an event listener to the button
myButton.addEventListener('click', function() {
    // When the button is clicked, change the text of the message element
    messageElement.textContent = 'Hello, world! You just clicked the button. 😀';
});
