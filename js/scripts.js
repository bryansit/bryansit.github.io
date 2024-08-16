function checkCredentials() {
    const name = document.getElementById('name').value;
    const password = document.getElementById('password').value;
    const messageElement = document.getElementById('message');

    if (name === 'Andrea Quispe' && password === '2006') {
        messageElement.classList.remove('error');
        messageElement.classList.add('success');
        messageElement.textContent = '¡Acceso concedido!';
        
        // Redirigir a la página sorpresa.html después de un breve retraso
        setTimeout(() => {
            window.location.href = 'sorpresa.html';
        }, 1000); // 1 segundo de retraso para mostrar el mensaje

    } else {
        messageElement.classList.remove('success');
        messageElement.classList.add('error');
        messageElement.textContent = 'Nombre o contraseña incorrectos.';
    }
}
