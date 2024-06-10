document.getElementById('send-button').addEventListener('click', function() {
    const messageInput = document.getElementById('message-input');
    const message = messageInput.value;

    // Encriptar el mensaje
    const encryptedMessage = CryptoJS.AES.encrypt(message, 'clave-secreta').toString();

    // Desencriptar el mensaje (para mostrarlo en el chat)
    const decryptedMessage = CryptoJS.AES.decrypt(encryptedMessage, 'clave-secreta').toString(CryptoJS.enc.Utf8);

    // Mostrar el mensaje desencriptado en el chat
    const chatBox = document.getElementById('chat-box');
    const messageElement = document.createElement('div');
    messageElement.textContent = decryptedMessage;
    chatBox.appendChild(messageElement);

    // Limpiar el campo de entrada
    messageInput.value = '';
});

