document.addEventListener('DOMContentLoaded', function() {
    const chatBox = document.getElementById('chat-box');
    const userInput = document.getElementById('user-input');
    const sendBtn = document.getElementById('send-btn');
    const historyIcon = document.getElementById('history-icon');
    const historyModal = document.getElementById('history-modal');
    const closeHistoryBtn = document.getElementById('close-history-btn');
    const loginBtn = document.getElementById('login-btn');
    const signupBtn = document.getElementById('signup-btn');
    const loginModal = document.getElementById('login-modal');
    const signupModal = document.getElementById('signup-modal');
    const closeLoginBtn = document.getElementById('close-login-btn');
    const closeSignupBtn = document.getElementById('close-signup-btn');
    const userLogo = document.getElementById('user-logo');
    const loginSignupButtons = document.getElementById('login-signup-buttons');

    let history = [];
    let loggedInEmail = '';

    function addMessage(message, type) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('chat-message', type);
        messageDiv.textContent = message;
        chatBox.appendChild(messageDiv);
        chatBox.scrollTop = chatBox.scrollHeight; // Auto-scroll to bottom
        history.push({ message, type });
        updateHistory();
    }

    async function getBotResponse(userMessage) {
        // Placeholder response for demonstration
        return 'This is a placeholder response from the bot.';
    }

    function updateHistory() {
        const historyList = document.getElementById('history-list');
        historyList.innerHTML = ''; // Clear current history
        history.forEach((entry, index) => {
            const historyItem = document.createElement('div');
            historyItem.classList.add('chat-message', entry.type);
            historyItem.innerHTML = `
                ${entry.message}
                <span class="delete-history-icon" data-index="${index}">🗑️</span>
            `;
            historyList.appendChild(historyItem);
        });

        // Add delete functionality
        document.querySelectorAll('.delete-history-icon').forEach(icon => {
            icon.addEventListener('click', function() {
                const index = this.getAttribute('data-index');
                history.splice(index, 1);
                updateHistory();
            });
        });
    }

    sendBtn.addEventListener('click', async function() {
        const userMessage = userInput.value.trim();
        if (userMessage) {
            addMessage(userMessage, 'user');
            userInput.value = '';
            const botResponse = await getBotResponse(userMessage);
            setTimeout(() => addMessage(botResponse, 'bot'), 500);
        }
    });

    userInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            sendBtn.click();
        }
    });

    historyIcon.addEventListener('click', function() {
        historyModal.style.display = historyModal.style.display === 'none' || historyModal.style.display === '' ? 'flex' : 'none';
    });

    closeHistoryBtn.addEventListener('click', function() {
        historyModal.style.display = 'none';
    });

    loginBtn.addEventListener('click', function() {
        loginModal.style.display = 'flex';
    });

    signupBtn.addEventListener('click', function() {
        signupModal.style.display = 'flex';
    });

    closeLoginBtn.addEventListener('click', function() {
        loginModal.style.display = 'none';
    });

    closeSignupBtn.addEventListener('click', function() {
        signupModal.style.display = 'none';
    });

    document.getElementById('login-form').addEventListener('submit', function(event) {
        event.preventDefault();
        const email = document.getElementById('login-email').value;
        loggedInEmail = email;
        const initials = email.split('@')[0].charAt(0).toUpperCase();
        userLogo.textContent = initials;
        userLogo.style.display = 'flex';
        loginSignupButtons.style.display = 'none';
        loginModal.style.display = 'none';
    });

    document.getElementById('signup-form').addEventListener('submit', function(event) {
        event.preventDefault();
        signupModal.style.display = 'none';
        const email = document.getElementById('signup-email').value;
        const initials = email.split('@')[0].charAt(0).toUpperCase();
        userLogo.textContent = initials;
        userLogo.style.display = 'flex';
        loginSignupButtons.style.display = 'none';
    });
});