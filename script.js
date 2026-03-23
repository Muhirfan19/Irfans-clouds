// Nomor WhatsApp tujuan
const WA_NUMBER = "62895341011865";

function sendToWhatsApp(product, price) {
    const message = `Halo, saya tertarik dengan produk *${product}* dengan harga Rp ${parseInt(price).toLocaleString()}. Apakah masih tersedia?`;
    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/${WA_NUMBER}?text=${encodedMessage}`;
    window.location.href = url;
}

// Event listener untuk semua tombol WhatsApp
document.querySelectorAll('.btn-wa').forEach(button => {
    button.addEventListener('click', () => {
        const product = button.getAttribute('data-product');
        const price = button.getAttribute('data-price');
        sendToWhatsApp(product, price);
    });
});

// Mobile menu toggle
const menuIcon = document.getElementById('menuIcon');
const navLinks = document.getElementById('navLinks');
if (menuIcon && navLinks) {
    menuIcon.addEventListener('click', () => {
        navLinks.classList.toggle('show');
    });
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('show');
        });
    });
}

// Fitur pencarian domain (live filter)
const searchInput = document.getElementById('searchDomain');
const domainCards = document.querySelectorAll('.domain-card');

if (searchInput) {
    searchInput.addEventListener('input', function() {
        const keyword = this.value.toLowerCase().trim();
        domainCards.forEach(card => {
            const domainName = card.querySelector('h3').innerText.toLowerCase();
            if (keyword === '' || domainName.includes(keyword)) {
                card.style.display = '';
            } else {
                card.style.display = 'none';
            }
        });
    });
}