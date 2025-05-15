// Retrieve username from local storage if it exists
const savedUsername = localStorage.getItem('username');
if (savedUsername) {
    document.getElementById('usernameInput').value = savedUsername;
}

document.getElementById('messageForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const usernameInput = document.getElementById('usernameInput');
    const messageInput = document.getElementById('messageInput');
    
    const usernameText = usernameInput.value;
    const messageText = messageInput.value;

    // Save the username to local storage
    localStorage.setItem('username', usernameText);

    // Create a message container
    const messageContainer = document.createElement('div');
    
    // Create a username display
    const usernameDisplay = document.createElement('div');
    usernameDisplay.className = 'username';
    usernameDisplay.textContent = usernameText + ':';
    
    // Create a message display
    const messageDisplay = document.createElement('div');
    messageDisplay.className = 'message';
    messageDisplay.textContent = messageText;

    // Append username and message to the container
    messageContainer.appendChild(usernameDisplay);
    messageContainer.appendChild(messageDisplay);

    // Append the message container to the messages div
    document.getElementById('messages').appendChild(messageContainer);
    
    // Clear the message input field
    messageInput.value = '';
});    
    
