"use strict"

const modalOpen = document.getElementById('open-btn');
const modalClose = document.getElementById('close-btn');
const backDrop = document.getElementById('back-drop');

function openModal() {
    const modal = document.getElementById('back-drop');
    modal.style.display = 'flex';
}

function closeModal() {
    const modal = document.getElementById('back-drop');
    modal.style.display = 'none';
}

modalOpen.addEventListener('click', openModal);

modalClose.addEventListener('click', closeModal);

document.addEventListener('click', function (event) {
    if (event.target === backDrop) {
        closeModal()
    }
});