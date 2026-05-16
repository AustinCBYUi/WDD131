const gallery = document.querySelector('.gallery');
const modal = document.querySelector('dialog');
const modalImage = modal.querySelector('img');
const closeButton = modal.querySelector('.close-viewer');

const btn = document.querySelector('.menu-btn');
const menu = document.querySelector('nav');

btn.addEventListener('click', toggleMenu);
gallery.addEventListener('click', openModal);

function toggleMenu() {
    menu.classList.toggle('show');
    btn.classList.toggle('change');
}

function openModal(e) {
    const img = e.target.closest('img');

    if (!img) return; // If the click was not on an image, do nothing

    const src = img.getAttribute('src');
    const alt = img.getAttribute('alt');
    const full = src.replace('sm', 'full');

    modalImage.src = full;
    modalImage.alt = alt;
    modal.showModal();
}

closeButton.addEventListener('click', () => {
    modal.close();
});

modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.close();
    }
});