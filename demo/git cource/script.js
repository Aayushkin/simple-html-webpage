document.addEventListener('DOMContentLoaded', function () {
    const loginModal = document.getElementById('login-modal');
    const signupModal = document.getElementById('signup-modal');
    const chatContainer = document.getElementById('chat-container');
    const userInput = document.getElementById('user-input');
    const sendBtn = document.getElementById('send-btn');
    const chatBox = document.getElementById('chat-box');
    const loginBtn = document.getElementById('login-btn');
    const signupBtn = document.getElementById('signup-btn');
    const goToSignup = document.getElementById('go-to-signup');
    const goToLogin = document.getElementById('go-to-login');
    
    // Show the login modal initially
    loginModal.classList.add('active');
    
    // Switch between login and signup
    goToSignup.addEventListener('click', function () {
        loginModal.classList.remove('active');
        signupModal.classList.add('active');
    });
    
    goToLogin.addEventListener('click', function () {
        signupModal.classList.remove('active');
        loginModal.classList.add('active');
    });

    // Handle Login form submission
    document.getElementById('login-form').addEventListener('submit', function (event) {
        event.preventDefault();
        chatContainer.style.display = 'block';
        loginModal.classList.remove('active');
    });

    // Handle Sign Up form submission
    document.getElementById('signup-form').addEventListener('submit', function (event) {
        event.preventDefault();
        chatContainer.style.display = 'block';
        signupModal.classList.remove('active');
    });

    // Send message in chat
    sendBtn.addEventListener('click', function () {
        const userMessage = userInput.value.trim();
        if (userMessage) {
            const userMessageElement = document.createElement('div');
            userMessageElement.classList.add('chat-message', 'user');
            userMessageElement.textContent = userMessage;
            chatBox.appendChild(userMessageElement);
            userInput.value = '';
            chatBox.scrollTop = chatBox.scrollHeight;

            const botMessageElement = document.createElement('div');
            botMessageElement.classList.add('chat-message', 'bot');
            botMessageElement.textContent = 'This is a placeholder response from the bot.';
            chatBox.appendChild(botMessageElement);
            chatBox.scrollTop = chatBox.scrollHeight;
        }
    });
});
