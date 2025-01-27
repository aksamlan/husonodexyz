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
