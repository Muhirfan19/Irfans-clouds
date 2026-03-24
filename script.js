// Data domain (nama, harga normal, harga promo)
const domainList = [
    { name: ".com", normal: 209900, promo: 149900 },
    { name: ".id", normal: 219900, promo: 210000 },
    { name: ".top", normal: 199900, promo: 19900 },
    { name: ".xyz", normal: 169900, promo: 29900 },
    { name: ".org", normal: 189900, promo: 119900 },
    { name: ".it.com", normal: 449900, promo: 114900 },
    { name: ".net", normal: 179900, promo: 135000 },
    { name: ".fun", normal: 149900, promo: 89000 },
    { name: ".store", normal: 169900, promo: 99000 },
    { name: ".online", normal: 139900, promo: 79000 },
    { name: ".site", normal: 129900, promo: 69000 },
    { name: ".tech", normal: 159900, promo: 89000 },
    { name: ".space", normal: 149900, promo: 75000 },
    { name: ".press", normal: 179900, promo: 99000 },
    { name: ".host", normal: 199900, promo: 109000 },
    { name: ".cloud", normal: 219900, promo: 129000 },
    { name: ".digital", normal: 189900, promo: 105000 },
    { name: ".biz", normal: 169900, promo: 99000 },
    { name: ".info", normal: 159900, promo: 89000 },
    { name: ".name", normal: 129900, promo: 69000 },
    { name: ".tv", normal: 249900, promo: 179000 },
    { name: ".io", normal: 299900, promo: 199000 },
    { name: ".co.id", normal: 189900, promo: 129000 },
    { name: ".sch.id", normal: 159900, promo: 89000 },
    { name: ".shop", normal: 179900, promo: 109000 },
    { name: ".news", normal: 149900, promo: 89000 },
    { name: ".blog", normal: 139900, promo: 79000 },
    { name: ".agency", normal: 169900, promo: 99000 },
    { name: ".studio", normal: 179900, promo: 109000 },
    { name: ".design", normal: 189900, promo: 119000 },
    { name: ".pro", normal: 199900, promo: 129000 },
    { name: ".club", normal: 149900, promo: 79000 },
    { name: ".live", normal: 169900, promo: 99000 },
    { name: ".world", normal: 189900, promo: 119000 }
];

// Fungsi render domain berdasarkan keyword
function renderDomains(keyword = "") {
    const grid = document.getElementById("domainGrid");
    if (!grid) return;
    const filtered = domainList.filter(domain =>
        domain.name.toLowerCase().includes(keyword.toLowerCase())
    );
    if (filtered.length === 0) {
        grid.innerHTML = `<div class="no-result">Tidak ada domain yang cocok dengan "${keyword}"</div>`;
        return;
    }
    grid.innerHTML = filtered.map(domain => `
        <div class="domain-card">
            <div class="domain-name">${domain.name}</div>
            <div class="domain-price">
                <span class="old-price-domain">Rp ${domain.normal.toLocaleString()}</span>
                <span class="new-price-domain">Rp ${domain.promo.toLocaleString()}</span>
            </div>
            <a href="https://wa.me/62895341011865?text=Halo%2C%20saya%20tertarik%20dengan%20domain%20${encodeURIComponent(domain.name)}%20dengan%20harga%20Rp%20${domain.promo.toLocaleString()}%2Fthn.%20Apakah%20masih%20tersedia%3F" class="btn-wa" target="_blank">Pesan via WhatsApp</a>
        </div>
    `).join("");
}

// Event listener pencarian
const searchInput = document.getElementById("domainSearch");
const searchBtn = document.getElementById("searchBtn");
if (searchInput) {
    const handleSearch = () => renderDomains(searchInput.value);
    searchInput.addEventListener("input", handleSearch);
    if (searchBtn) searchBtn.addEventListener("click", handleSearch);
    // Render awal (tampilkan semua)
    renderDomains();
}

// Mobile menu toggle
const menuIcon = document.getElementById("menuIcon");
const navLinks = document.getElementById("navLinks");
if (menuIcon && navLinks) {
    menuIcon.addEventListener("click", () => navLinks.classList.toggle("show"));
    navLinks.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => navLinks.classList.remove("show"));
    });
}