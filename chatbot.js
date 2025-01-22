// Store the conversation history
const chatBox = document.getElementById('chatBox');
const userInput = document.getElementById('userInput');
const chatContainer = document.getElementById('chatContainer');
const chatBubble = document.getElementById('chatBubble');


// Predefined responses for simplicity
const botResponses = {
    "hello": "Hi! What can I help you find today? Education, Services, Contact",
    "education": "Okay great, let me take you there!",
    "services": "Okay great, let me take you there!",
    "contact": "Okay great, let me take you there!",
    "bye": "Goodbye! Have a nice day!",
    "Hello": "Hi! What can I help you find today? Education, Services, Contact",
    "Education": "Okay great, let me take you there!",
    "Services": "Okay great, let me take you there!",
    "Contact": "Okay great, let me take you there!",
    "Bye": "Goodbye! Have a nice day!",
    "Hey": "Hi! What can I help you find today? Education, Services, Contact",
    "hey": "Hi! What can I help you find today? Education, Services, Contact",
    "Hi": "Hi! What can I help you find today? Education, Services, Contact",
    "hi": "Hi! What can I help you find today? Education, Services, Contact",
    "": "Hi! What can I help you find today? Education, Services, Contact"
};

// Function to display messages in the chat
function displayMessage(message, sender) {
    const messageElement = document.createElement('div');
    messageElement.classList.add(sender === 'user' ? 'user-message' : 'bot-message');
    messageElement.textContent = message;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the bottom of the chat
}

// Function to generate the bot response based on user input
function getBotResponse(userMessage) {
    userMessage = userMessage.toLowerCase().trim();
    return botResponses[userMessage] || botResponses['default'];
}

// Function to send the message
function sendMessage() {
    const userMessage = userInput.value.trim();

    if (userMessage) {
        displayMessage(userMessage, 'user');
        userInput.value = '';
    
        const botResponse = getBotResponse(userMessage);
        displayMessage(botResponse, 'bot');
    
        // Normalize user input to lower case for consistent comparison
        const normalizedMessage = userMessage.toLowerCase();
    
        // If the bot suggests navigating, scroll to the appropriate section
        if (normalizedMessage.includes("contact")) {
            window.location.hash = "#contact"; // Scroll to the contact section
        } else if (normalizedMessage.includes("services")) {
            window.location.hash = "#services"; // Scroll to the services section
        } else if (normalizedMessage.includes("education")) {
            window.location.hash = "#education"; // Scroll to the education section
        } else if (normalizedMessage.includes("home")) {
            window.location.hash = "#home"; // Scroll to the home section
        }
    }
 }   


// Function to toggle the chat window visibility
function toggleChat() {
    const isChatVisible = chatContainer.style.display === 'block';
    chatContainer.style.display = isChatVisible ? 'none' : 'block';


// If opening the chat, set focus to the input field
if (!isChatVisible) {
    userInput.focus();
    }
}

// Allow pressing Enter to send a message
userInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
    sendMessage();
    }
});

// Smooth Animation
function toggleChat() {
    const isChatVisible = chatContainer.style.display === 'block';
    chatContainer.style.display = isChatVisible ? 'none' : 'block';

    // Smooth transition for showing/hiding the chat container
    if (!isChatVisible) {
        chatContainer.classList.add('show');
    } else {
        chatContainer.classList.remove('show');
    }

    // If opening the chat, set focus to the input field
    if (!isChatVisible) {
        userInput.focus();
    }
}