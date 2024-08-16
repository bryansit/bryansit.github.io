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
function openNote() {
    const note = document.getElementById("note");
    if (note.style.display === "none" || note.style.display === "") {
        note.style.display = "block";
    } else {
        note.style.display = "none";
    }
}
function openSecondNote() {
    const noteSecond = document.getElementById("note-second");
    if (noteSecond.style.display === "none" || noteSecond.style.display === "") {
        noteSecond.style.display = "block";
    } else {
        noteSecond.style.display = "none";
    }
}
function openTopNote() {
    const noteTop = document.getElementById("note-top");
    if (noteTop.style.display === "none" || noteTop.style.display === "") {
        noteTop.style.display = "block";
    } else {
        noteTop.style.display = "none";
    }
}