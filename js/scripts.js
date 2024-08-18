function goToSurprise() {
    // Redirigir a la página sorpresa.html después de un breve retraso
    setTimeout(() => {
        window.location.href = 'sorpresa.html';
    }, 500); // 0.5 segundos de retraso para un pequeño efecto
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
