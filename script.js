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
        window.open('https://www.google.com/maps/place/SMK+Negeri+1+Glagah/@-8.3530041,114.3303703,17z/data=!3m1!4b1!4m6!3m5!1s0x2dd679b8657e36f:0xe898d18942dcdada!8m2!3d-8.3530041!4d114.332559!16s%2Fg%2F11d_4v9jx0', '_blank');
    });
});
