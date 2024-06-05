document.addEventListener('DOMContentLoaded', function() {
    const chatbotPopup = document.getElementById('chatbot-popup');
    const openChatbotBtn = document.getElementById('open-chatbot');
    const closeChatbotBtn = document.getElementById('close-chatbot');

    // Mostrar el popup del chatbot al cargar la página
    chatbotPopup.style.display = 'none';

    // Ocultar el popup cuando se haga clic en el botón de cerrar
    closeChatbotBtn.addEventListener('click', function() {
        chatbotPopup.style.display = 'none';
        openChatbotBtn.style.display = 'block';
    });

    // Mostrar el popup cuando se haga clic en el botón de abrir
    openChatbotBtn.addEventListener('click', function() {
        chatbotPopup.style.display = 'flex';
        openChatbotBtn.style.display = 'none';
    });
});

