# Lunette Cafe ☕

Website responsif untuk kafe yang mengkhususkan diri pada kopi dingin (cold coffee) dengan berbagai pilihan menu berkualitas tinggi. Website ini dibangun menggunakan HTML5, CSS3, dan JavaScript vanilla dengan desain modern dan interaktif.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![Responsive](https://img.shields.io/badge/Responsive-Yes-green)

## 🎯 Fitur Utama

### 📱 **Responsive Design**
- Kompatibel dengan semua perangkat (desktop, tablet, mobile)
- Breakpoints yang optimal untuk berbagai ukuran layar
- Mobile-first approach

### 🛒 **Shopping Cart System**
- Keranjang belanja yang lengkap dengan localStorage
- Tambah/kurang quantity produk
- Hapus item dari keranjang
- Total harga otomatis
- Checkout via WhatsApp

### 🎨 **UI/UX Modern**
- Animasi scroll reveal yang smooth
- Carousel produk menggunakan Swiper.js
- Hover effects yang interaktif
- Smooth scrolling navigation
- Shadow header saat scroll

### 🍃 **Animasi & Efek Visual**
- Floating coffee beans dan ice cubes
- Parallax-like movements
- Fade-in animations
- Transform effects pada hover
- Loading animations

### 📍 **Fitur Kontak & Lokasi**
- Integrasi Google Maps
- Kontak WhatsApp, Instagram, Telegram
- Form newsletter subscription
- Info jam operasional dan alamat

## 🗂️ Struktur Website

### **Sections:**
1. **Header** - Navigation bar dengan mobile menu
2. **Home** - Hero section dengan animasi coffee elements
3. **Popular** - Carousel produk populer dengan Swiper
4. **About** - Informasi tentang kafe
5. **Products** - Grid produk dengan shopping cart
6. **Contact** - Informasi kontak dan lokasi
7. **Cart** - Shopping cart interface
8. **Footer** - Social media, payment methods, newsletter

## 🛠️ Teknologi & Dependencies

### **Core Technologies:**
- **HTML5** - Semantic markup
- **CSS3** - Custom properties, Flexbox, Grid
- **JavaScript ES6+** - Modern syntax, modules

### **External Libraries:**
- **[Swiper.js](https://swiperjs.com/)** - Touch slider untuk carousel
- **[ScrollReveal](https://scrollrevealjs.org/)** - Scroll animations
- **[Remix Icons](https://remixicon.com/)** - Icon set
- **[Google Fonts](https://fonts.google.com/)** - Montserrat & Saira fonts

## 📁 Struktur File

```
lunette-cafe/
│
├── index.html              # File HTML utama
├── README.md              # Dokumentasi ini
│
├── css/
│   ├── style.css          # Stylesheet utama
│   └── swiper-bundle.min.css  # Swiper CSS
│
├── js/
│   ├── main.js            # JavaScript utama
│   ├── swiper-bundle.min.js   # Swiper JavaScript
│   └── scrollreveal.min.js    # ScrollReveal library
│
├── assets/
│   └── img/
│       ├── favicon.png    # Favicon website
│       ├── home-coffee.png    # Gambar kopi utama
│       ├── home-splash.png    # Efek splash
│       ├── bean-img.png       # Biji kopi
│       ├── ice-img.png        # Es batu
│       ├── leaf-img.png       # Daun
│       ├── popular-coffee-*.png   # Produk populer
│       ├── products-coffee-*.png  # Produk grid
│       ├── about-coffee.png       # About section
│       ├── contact-delivery.png   # Contact section
│       ├── home-sticker.svg       # Sticker dekoratif
│       └── footer-card-*.png      # Payment method cards
│
└── screenshots/           # Screenshots untuk dokumentasi
    ├── desktop-home.png
    ├── mobile-menu.png
    └── cart-system.png
```

## 🚀 Instalasi & Setup

### **1. Clone Repository**
```bash
git clone https://github.com/username/lunette-cafe.git
cd lunette-cafe
```

### **2. Setup Local Server**
Karena menggunakan external CDN dan localStorage, disarankan menggunakan local server:

```bash
# Menggunakan Python
python -m http.server 8000

# Menggunakan Node.js (live-server)
npx live-server

# Menggunakan PHP
php -S localhost:8000
```

### **3. Akses Website**
Buka browser dan akses:
```
http://localhost:8000
```

## 🎨 Kustomisasi

### **1. Mengubah Warna Tema**
Edit CSS variables di `css/style.css`:
```css
:root {
  --first-color: hsl(166, 80%, 40%);      /* Warna utama */
  --first-color-alt: hsl(166, 78%, 38%);  /* Warna alternatif */
  --title-color: hsl(166, 95%, 15%);      /* Warna judul */
  --text-color: hsl(166, 12%, 40%);       /* Warna teks */
  --body-color: hsl(166, 56%, 18%);       /* Background */
}
```

### **2. Menambah Produk Baru**
Tambah produk di section popular atau products:
```html
<article class="popular__card swiper-slide">
  <div class="popular__images">
    <!-- Gambar produk -->
  </div>
  <div class="popular__data">
    <h2 class="popular__name">NAMA PRODUK</h2>
    <p class="popular__description">Deskripsi produk</p>
    <button class="button button-dark add-to-cart" 
            data-name="NAMA PRODUK" 
            data-price="25000">Add to Cart</button>
  </div>
</article>
```

### **3. Mengubah Kontak WhatsApp**
Edit nomor WhatsApp di `js/main.js`:
```javascript
const phoneNumber = '628123456789'; // Ganti dengan nomor WhatsApp kafe
```

### **4. Mengubah Link Social Media**
Edit link di section contact dan footer:
```html
<a href="https://wa.me/62123456789" target="_blank">
<a href="https://www.instagram.com/username" target="_blank">
<a href="https://t.me/username" target="_blank">
```

## 📊 Menu & Produk

### **Produk Populer (Carousel):**
- **Vanilla Latte** - Rp35.000
- **Classic Coffee** - Rp20.000
- **Mocha Coffee** - Rp42.000

### **Produk Grid:**
- **Iced Coffee Mocha** - Rp37.000
- **Coffee With Cream** - Rp25.000
- **Espresso** - Rp18.000
- **Cappuccino** - Rp28.000
- **Caramel Macchiato** - Rp32.000
- **Americano** - Rp22.000

## 🛒 Sistem Keranjang Belanja

### **Fitur Cart:**
- ✅ Add to cart dari multiple sections
- ✅ Quantity increment/decrement
- ✅ Remove individual items
- ✅ Persistent storage (localStorage)
- ✅ Auto-calculate total price
- ✅ WhatsApp checkout integration
- ✅ Empty cart state handling

### **Cart Functions:**
```javascript
addToCart(item)     // Tambah item ke keranjang
renderCart()        // Render ulang keranjang
updateQuantity()    // Update quantity item
removeFromCart()    // Hapus item dari keranjang
```

## 📱 Responsiveness

### **Breakpoints:**
- **Mobile**: < 576px
- **Small devices**: 330px - 576px
- **Medium devices**: 576px - 768px
- **Large devices**: 768px - 1150px
- **Extra large**: > 1150px
- **2K displays**: > 2048px (dengan zoom 1.3)

### **Mobile Features:**
- Hamburger menu dengan smooth animation
- Touch-friendly carousel navigation
- Optimized image sizes
- Compressed layouts untuk small screens

## 🎪 Animasi & Efek

### **ScrollReveal Animations:**
```javascript
// Home section elements dengan delay bertingkat
sr.reveal('.home__coffee', {delay: 1000, distance: '200px'})
sr.reveal('.home__splash', {delay: 1600, scale: 0})
sr.reveal('.home__bean-1, .home__bean-2', {delay: 2200, rotate: {z: 180}})
```

### **Hover Effects:**
- Coffee cup movement pada product cards
- Bean floating animation
- Button scale dan shadow effects
- Social media icon bounce

## ⚡ Performance & SEO

### **Optimizations:**
- Minified CSS dan JavaScript
- Optimized images dengan proper alt tags
- Semantic HTML5 structure
- Meta tags untuk SEO
- Favicon implementation
- Smooth scrolling behavior

### **Loading Strategy:**
- Critical CSS inline (bisa ditambahkan)
- External libraries dari CDN
- Local storage untuk cart persistence
- Lazy loading untuk images (bisa ditambahkan)

## 🔧 Troubleshooting

### **Common Issues:**

**1. Carousel tidak berfungsi:**
```bash
# Pastikan Swiper.js loaded dengan benar
# Check browser console untuk error
# Pastikan markup HTML sesuai dengan Swiper structure
```

**2. Animations tidak muncul:**
```bash
# Pastikan ScrollReveal.js loaded
# Check viewport height untuk trigger animations
# Verify CSS transform properties
```

**3. Cart tidak persistent:**
```bash
# Check localStorage support di browser
# Pastikan domain consistent (tidak mixed http/https)
# Clear browser cache dan localStorage
```

**4. WhatsApp checkout tidak berfungsi:**
```bash
# Verify nomor WhatsApp format (+628...)
# Check URL encoding untuk message
# Test di mobile device untuk WhatsApp app
```

## 🌐 Browser Support

- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+
- ✅ Opera 47+
- ⚠️ Internet Explorer (tidak disupport)

## 📈 Future Enhancements

### **Planned Features:**
- [ ] Online ordering system dengan payment gateway
- [ ] User authentication dan account management
- [ ] Loyalty points system
- [ ] Multiple language support (EN/ID)
- [ ] Dark/Light mode toggle
- [ ] Progressive Web App (PWA) features
- [ ] Real-time order tracking
- [ ] Customer reviews dan rating system
- [ ] Advanced filtering dan search
- [ ] Email newsletter integration

### **Technical Improvements:**
- [ ] Image lazy loading
- [ ] Critical CSS inlining
- [ ] Service Worker untuk offline support
- [ ] Bundle optimization dengan Webpack
- [ ] CSS purging untuk production
- [ ] Automated testing setup

## 🤝 Kontribusi

Kontribusi sangat welcome! Berikut guidelines:

### **Development Setup:**
1. Fork repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

### **Code Style:**
- Gunakan 2 spaces untuk indentation
- BEM methodology untuk CSS classes
- ES6+ syntax untuk JavaScript
- Semantic HTML5 elements
- Mobile-first CSS approach

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Developer

**adrptr.p**
- Website: [Your Portfolio](https://yourportfolio.com)
- Instagram: [@adrptr.p](https://instagram.com/adrptr.p)
- Email: contact@yourportfolio.com

## 🙏 Acknowledgments

- **[Bedimcode](https://www.youtube.com/c/Bedimcode)** - Original design inspiration
- **[Swiper.js](https://swiperjs.com/)** - Amazing carousel library
- **[ScrollReveal](https://scrollrevealjs.org/)** - Smooth scroll animations
- **[Remix Icons](https://remixicon.com/)** - Beautiful icon set
- **[Google Fonts](https://fonts.google.com/)** - Typography
- Coffee shop community untuk feedback dan suggestions

## 📞 Support

Jika Anda mengalami masalah atau memiliki pertanyaan:

1. Check [Issues](https://github.com/username/lunette-cafe/issues) di GitHub
2. Buat issue baru dengan detail yang lengkap
3. Contact developer: contact@yourportfolio.com
4. Join [Discord Community](https://discord.gg/your-server) untuk diskusi

---

**⭐ Jika project ini membantu Anda, silakan berikan star di GitHub!**

**☕ Selamat menikmati kopi dan coding! 🚀**
