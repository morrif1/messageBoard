document.getElementById('messageForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const usernameInput = document.getElementById('usernameInput');
    const messageInput = document.getElementById('messageInput');
    
    const usernameText = usernameInput.value;
    const messageText = messageInput.value;

    const messageDiv = document.createElement('div');
    messageDiv.className = 'message';
    
    const usernameDisplay = document.createElement('strong');
    usernameDisplay.textContent = usernameText + ':';
    
    const messageContent = document.createElement('span');
    messageContent.textContent = ' ' + messageText;

    messageDiv.appendChild(usernameDisplay);
    messageDiv.appendChild(messageContent);

    document.getElementById('messages').appendChild(messageDiv);
    
    // Clear the input fields
    usernameInput.value = '';
    messageInput.value = '';
});
