document.addEventListener('DOMContentLoaded', function () {
    const chatBox = document.getElementById('chat-box');
    const userInput = document.getElementById('user-input');
    const sendBtn = document.getElementById('send-btn');
    const userLogo = document.getElementById('user-logo');
    const chatContainer = document.getElementById('chat-container');
    const historyModal = document.getElementById('history-modal');
    const closeHistoryBtn = document.getElementById('close-history-btn');
    const historyIcon = document.getElementById('history-icon');
    
    // Retrieve the user's email from localStorage
    const userEmail = localStorage.getItem('userEmail');
    if (!userEmail) {
        window.location.href = 'index1.html'; // If not logged in, redirect to login page
        return;
    }
    const email = document.getElementById('email-input').value;
if (!email) {
    alert('Please enter a valid email.');
    return;
}
localStorage.setItem('userEmail', email);
window.location.href = 'chatbot.html'; // Redirect to chatbot page

    // This is just an example of how you can set user data in localStorage on login.
// document.getElementById('login-btn').addEventListener('click', function () {
//     const email = document.getElementById('email-input').value;
//     if (email) {
//         localStorage.setItem('userEmail', email);
//         window.location.href = 'chatbot.html'; // Redirect to chatbot after login
//     }
// });

    
    const initials = userEmail.split('@')[0].charAt(0).toUpperCase();
    userLogo.textContent = initials;
    userLogo.style.display = 'flex';
    chatContainer.style.display = 'block'; // Show the chat after successful login

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

    // Toggle chat history modal
    historyIcon.addEventListener('click', function () {
        historyModal.style.display = 'block';
    });

    closeHistoryBtn.addEventListener('click', function () {
        historyModal.style.display = 'none';
    });
});
