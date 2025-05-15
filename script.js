// Function to load messages from local storage
function loadMessages() {
    const messages = JSON.parse(localStorage.getItem('messages')) || [];
    messages.forEach(({ username, message }) => {
        displayMessage(username, message);
    });
}

// Function to display a message
function displayMessage(username, message) {
    const messageContainer = document.createElement('div');
    
    const usernameDisplay = document.createElement('div');
    usernameDisplay.className = 'username';
    usernameDisplay.textContent = username + ':';
    
    const messageDisplay = document.createElement('div');
    messageDisplay.className = 'message';
    messageDisplay.textContent = message;

    messageContainer.appendChild(usernameDisplay);
    messageContainer.appendChild(messageDisplay);
    document.getElementById('messages').appendChild(messageContainer);
}

document.getElementById('messageForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const usernameInput = document.getElementById('usernameInput');
    const messageInput = document.getElementById('messageInput');
    
    const usernameText = usernameInput.value;
    const messageText = messageInput.value;

    // Save the username to local storage
    localStorage.setItem('username', usernameText);

    // Get existing messages from local storage
    const messages = JSON.parse(localStorage.getItem('messages')) || [];
    messages.push({ username: usernameText, message: messageText });
    localStorage.setItem('messages', JSON.stringify(messages));

    // Display the new message
    displayMessage(usernameText, messageText);
    
    // Clear the input fields
    messageInput.value = '';
});

// Load messages when the page is loaded
window.onload = loadMessages;
