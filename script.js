document.addEventListener('DOMContentLoaded', function() {
    const whatsappLink = document.getElementById('whatsapp-link');
    const instagramLink = document.getElementById('instagram-link');
    const gmailLink = document.getElementById('gmail-link');

    whatsappLink.addEventListener('click', function(e) {
        e.preventDefault();
        window.open('https://wa.me/081239908869', '_blank');
    });

    instagramLink.addEventListener('click', function(e) {
        e.preventDefault();
        window.open('https://www.instagram.com/sryathta13', '_blank');
    });

    gmailLink.addEventListener('click', function(e) {
        e.preventDefault();
        window.open('mailto:suryatahta.13@gmail.com', '_blank');
    });
});