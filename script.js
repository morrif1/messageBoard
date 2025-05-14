document.getElementById('messageForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const messageInput = document.getElementById('messageInput');
    const messageText = messageInput.value;

    const messageDiv = document.createElement('div');
    messageDiv.className = 'message';
    messageDiv.textContent = messageText;

    document.getElementById('messages').appendChild(messageDiv);
    messageInput.value = '';
});
