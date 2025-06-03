/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== ADD SHADOW HEADER ===============*/
function scrollHeader(){
    const header = document.getElementById('header')
    if(window.scrollY >= 50) header.classList.add('shadow-header')
    else header.classList.remove('shadow-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== SWIPER POPULAR ===============*/
let swiperPopular = new Swiper('.popular__swiper', {
    loop: true,
    spaceBetween: 32,
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        1150: {
            spaceBetween: 80,
        },
    },
})

/*=============== SHOW SCROLL UP ===============*/
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up')
    if(window.scrollY >= 350) scrollUp.classList.add('show-scroll')
    else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 58
        const sectionId = current.getAttribute('id')
        const navLink = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if(navLink){
            if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
                navLink.classList.add('active-link')
            }else{
                navLink.classList.remove('active-link')
            }
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 300,
    // reset: true // Animation repeat
})

sr.reveal(`.popular__swiper, .footer__container, .footer__copy`)
sr.reveal(`.home__shape`, {origin: 'bottom'})
sr.reveal(`.home__coffee`, {delay: 1000, distance: '200px', duration: 1500})
sr.reveal(`.home__splash`, {delay: 1600, scale: 0, duration: 1500})
sr.reveal(`.home__bean-1, .home__bean-2`, {delay: 2200, scale: 0, duration: 1500, rotate: {z: 180}})
sr.reveal(`.home__ice-1, .home__ice-2`, {delay: 2600, scale: 0, duration: 1500, rotate: {z: 180}})
sr.reveal(`.home__leaf`, {delay: 2800, scale: 0, duration: 1500, rotate: {z: 90}})
sr.reveal(`.home__title`, {delay: 3500})
sr.reveal(`.home__data, .home__sticker`, {delay: 4000})
sr.reveal(`.about__data`, {origin: 'left'})
sr.reveal(`.about__images`, {origin: 'right'})
sr.reveal(`.about__coffee`, {delay: 1000})
sr.reveal(`.about__leaf-1, .about__leaf-2`, {delay: 1400, rotate: {z: 90}})
sr.reveal(`.products__card, .contact__info`, {interval: 100})

/*=============== CART FUNCTIONALITY ===============*/
const cart = document.getElementById('cart');
const cartOverlay = document.getElementById('cart-overlay');
const cartClose = document.getElementById('cart-close');
const cartItems = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');
const cartForm = document.getElementById('cart-form');

let cartData = [];

// Show/hide cart
function showCart() { cart.classList.add('show'); }
function hideCart() { cart.classList.remove('show'); }
cartOverlay.addEventListener('click', hideCart);
cartClose.addEventListener('click', hideCart);

// Add to cart from any menu
document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
  btn.addEventListener('click', function(e) {
    e.preventDefault();
    let card = btn.closest('.products__card') || btn.closest('.popular__card');
    if (!card) return;
    const name = card.querySelector('.products__name, .popular__name').textContent;
    const price = card.querySelector('.products__price') 
      ? card.querySelector('.products__price').textContent 
      : (btn.textContent.match(/Rp[\d.]+/) ? btn.textContent.match(/Rp[\d.]+/)[0] : 'Rp0');
    const img = card.querySelector('.products__coffee, .popular__coffee').getAttribute('src');
    addToCart({ name, price, img });
    showCart();
  });
});

function addToCart(item) {
  const found = cartData.find(i => i.name === item.name);
  if (found) {
    found.qty += 1;
  } else {
    cartData.push({ ...item, qty: 1, checked: true });
  }
  renderCart();
}

function renderCart() {
  cartItems.innerHTML = '';
  let total = 0;
  cartData.forEach((item, idx) => {
    // Only sum checked items
    const priceNum = parseInt(item.price.replace(/[^\d]/g, ''));
    if (item.checked) total += priceNum * item.qty;
    cartItems.innerHTML += `
      <div class="cart__item">
        <input type="checkbox" class="cart__item-checkbox" data-idx="${idx}" ${item.checked ? 'checked' : ''}>
        <img src="${item.img}" class="cart__item-img" alt="${item.name}">
        <div class="cart__item-info">
          <div>${item.name}</div>
          <div class="cart__item-qty">
            <button type="button" class="cart__item-qty-btn" data-action="dec" data-idx="${idx}">-</button>
            <span>${item.qty}</span>
            <button type="button" class="cart__item-qty-btn" data-action="inc" data-idx="${idx}">+</button>
          </div>
          <div>${item.price}</div>
        </div>
        <button class="cart__item-remove" data-idx="${idx}" title="Remove"><i class="ri-delete-bin-6-line"></i></button>
      </div>
    `;
  });
  cartTotal.textContent = 'Rp' + total.toLocaleString('id-ID');

  // Checkbox event
  document.querySelectorAll('.cart__item-checkbox').forEach(cb => {
    cb.addEventListener('change', function() {
      const idx = cb.getAttribute('data-idx');
      cartData[idx].checked = cb.checked;
      renderCart();
    });
  });
  // Qty event
  document.querySelectorAll('.cart__item-qty-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      const idx = btn.getAttribute('data-idx');
      if (btn.dataset.action === 'inc') cartData[idx].qty++;
      if (btn.dataset.action === 'dec' && cartData[idx].qty > 1) cartData[idx].qty--;
      renderCart();
    });
  });
  // Remove event
  document.querySelectorAll('.cart__item-remove').forEach(btn => {
    btn.addEventListener('click', function() {
      const idx = btn.getAttribute('data-idx');
      cartData.splice(idx, 1);
      renderCart();
    });
  });
}

// Place Order (checkout)
cartForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const selected = cartData.filter(i => i.checked);
  if (selected.length === 0) {
    alert('Pilih minimal 1 item untuk dipesan!');
    return;
  }
  // Simulasi submit
  alert('Pesanan berhasil dikirim:\n' + selected.map(i => `${i.name} x${i.qty}`).join('\n'));
  // Hapus item yang di-checkout dari cart
  cartData = cartData.filter(i => !i.checked);
  renderCart();
  hideCart();
});

// Tambahkan tombol cart di header/nav jika belum ada
const nav = document.querySelector('.nav');
if(nav && !document.querySelector('.nav__cart')) {
  const cartBtn = document.createElement('button');
  cartBtn.className = 'nav__cart';
  cartBtn.innerHTML = '<i class="ri-shopping-cart-2-line"></i>';
  cartBtn.style.background = 'none';
  cartBtn.style.border = 'none';
  cartBtn.style.fontSize = '1.5rem';
  cartBtn.style.cursor = 'pointer';
  cartBtn.title = 'Lihat Keranjang';
  cartBtn.addEventListener('click', showCart);
  nav.appendChild(cartBtn);
}

// Render awal jika ada data
renderCart();