// Mobil menü toggle
document.getElementById('mobile-menu').addEventListener('click', function() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
});

// Form gönderimi
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Mesajınız gönderildi!');
    // Burada form verilerini işleyebilir veya bir API'ye gönderebilirsiniz.
});

// Modal açma ve kapatma
const modal = document.getElementById('project-modal');
const closeModal = document.querySelector('.close-modal');

document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', () => {
        const title = card.querySelector('h3').innerText;
        const image = card.querySelector('img').src;
        const description = card.querySelector('p').innerText;

        document.getElementById('modal-title').innerText = title;
        document.getElementById('modal-image').src = image;
        document.getElementById('modal-description').innerText = description;

        modal.style.display = 'block';
    });
});

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});
