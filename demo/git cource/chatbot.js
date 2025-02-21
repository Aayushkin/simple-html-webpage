document.addEventListener('DOMContentLoaded', function () {
    const chatBox = document.getElementById('chat-box');
    const userInput = document.getElementById('user-input');
    const sendBtn = document.getElementById('send-btn');
    const userLogo = document.getElementById('user-logo');
    const chatContainer = document.getElementById('chat-container');
    
    // Retrieve the user's email from localStorage
    const userEmail = localStorage.getItem('userEmail');
    if (userEmail) {
        const initials = userEmail.split('@')[0].charAt(0).toUpperCase();
        userLogo.textContent = initials;
        userLogo.style.display = 'flex';
        chatContainer.style.display = 'block'; // Show the chat after successful login
    } else {
        window.location.href = 'login.html'; // If not logged in, redirect to login page
    }

    // Add message to chat
    function addMessage(message, type) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('chat-message', type);
        messageDiv.textContent = message;
        chatBox.appendChild(messageDiv);
        chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the bottom
    }

    // Handle send button click
    sendBtn.addEventListener('click', function () {
        const userMessage = userInput.value.trim();
        if (userMessage) {
            addMessage(userMessage, 'user');
            userInput.value = ''; // Clear input field
            simulateBotResponse(userMessage);
        }
    });

    // Handle enter key press
    userInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            sendBtn.click();
        }
    });

    // Simulate a bot response
    function simulateBotResponse(userMessage) {
        setTimeout(function () {
            const botResponse = 'This is a placeholder response to your message: ' + userMessage;
            addMessage(botResponse, 'bot');
        }, 1000); // Simulate a delay for bot response
    }
});
