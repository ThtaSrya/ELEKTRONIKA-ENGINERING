document.addEventListener('DOMContentLoaded', function() {
    const whatsappLink = document.getElementById('whatsapp-link');
    const instagramLink = document.getElementById('instagram-link');
    const gmailLink = document.getElementById('gmail-link');
    const locationLink = document.getElementById('location-link'); // Menambahkan variabel untuk ikon lokasi

    whatsappLink.addEventListener('click', function(e) {
        e.preventDefault();
        window.open('https://wa.me/(+62) 81239908869', '_blank');
    });

    instagramLink.addEventListener('click', function(e) {
        e.preventDefault();
        window.open('https://www.instagram.com/sryathta13', '_blank');
    });

    gmailLink.addEventListener('click', function(e) {
        e.preventDefault();
        window.open('mailto:suryatahta.13@gmail.com', '_blank');
    });

    // Menambahkan event listener untuk ikon lokasi
    locationLink.addEventListener('click', function(e) {
        e.preventDefault();
        window.open('https://www.google.com/maps/place/SMK+Negeri+1+Glagah+Banyuwangi/@-8.2155967,114.3418447,17z/data=!3m1!4b1!4m6!3m5!1s0x2dd14551b9fce1c7:0x18e9b60ff5b2fafe!8m2!3d-8.2155967!4d114.3444196!16s%2Fg%2F11bwdx20cp?entry=ttu&g_ep=EgoyMDI0MTAwOS4wIKXMDSoASAFQAw%3D%3D', '_blank');
    });
});
