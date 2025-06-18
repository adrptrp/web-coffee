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

/*=============== CART LOGIC ===============*/
const cartItems = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');
const checkoutButton = document.getElementById('checkout-button');

let cartData = JSON.parse(localStorage.getItem('cartData')) || [];

// Add to cart from any menu
document.querySelectorAll('.add-to-cart').forEach(btn => {
  btn.addEventListener('click', function(e) {
    e.preventDefault();
    const name = btn.getAttribute('data-name');
    const price = 'Rp' + parseInt(btn.getAttribute('data-price')).toLocaleString('id-ID');
    addToCart({ name, price });
  });
});

function addToCart(item) {
  const found = cartData.find(i => i.name === item.name);
  if (found) {
    found.qty += 1;
  } else {
    cartData.push({ ...item, qty: 1 });
  }
  localStorage.setItem('cartData', JSON.stringify(cartData));
  renderCart();
}

function renderCart() {
  const emptyCartMessage = cartItems.querySelector('.cart__empty');
  if (cartData.length === 0) {
    emptyCartMessage.style.display = 'block';
  } else {
    emptyCartMessage.style.display = 'none';
    cartItems.innerHTML = '<p class="cart__empty">Your cart is empty.</p>';
    let total = 0;
    cartData.forEach((item, idx) => {
      const priceNum = parseInt(item.price.replace(/[^\d]/g, ''));
      total += priceNum * item.qty;
      const cartItem = document.createElement('div');
      cartItem.className = 'cart__item';
      cartItem.innerHTML = `
        <div class="cart__item-details">
          <h4 class="cart__item-name">${item.name}</h4>
          <p class="cart__item-price">${item.price}</p>
        </div>
        <div class="cart__item-quantity">
          <button class="cart__quantity-btn" data-action="dec" data-idx="${idx}">-</button>
          <span>${item.qty}</span>
          <button class="cart__quantity-btn" data-action="inc" data-idx="${idx}">+</button>
        </div>
        <button class="cart__remove-btn" data-idx="${idx}">Remove</button>
      `;
      cartItems.appendChild(cartItem);
    });
    cartTotal.textContent = 'Rp' + total.toLocaleString('id-ID');

    // Quantity buttons event
    document.querySelectorAll('.cart__quantity-btn').forEach(btn => {
      btn.addEventListener('click', function() {
        const idx = parseInt(btn.getAttribute('data-idx'));
        if (btn.getAttribute('data-action') === 'inc') {
          cartData[idx].qty++;
        } else if (btn.getAttribute('data-action') === 'dec' && cartData[idx].qty > 1) {
          cartData[idx].qty--;
        } else if (btn.getAttribute('data-action') === 'dec' && cartData[idx].qty === 1) {
          cartData.splice(idx, 1);
        }
        localStorage.setItem('cartData', JSON.stringify(cartData));
        renderCart();
      });
    });

    // Remove buttons event
    document.querySelectorAll('.cart__remove-btn').forEach(btn => {
      btn.addEventListener('click', function() {
        const idx = parseInt(btn.getAttribute('data-idx'));
        cartData.splice(idx, 1);
        localStorage.setItem('cartData', JSON.stringify(cartData));
        renderCart();
      });
    });
  }
}

// Checkout functionality
checkoutButton.addEventListener('click', function() {
  if (cartData.length === 0) {
    alert('Your cart is empty!');
    return;
  }
  let message = 'Halo, saya ingin memesan:\n';
  cartData.forEach(item => {
    message += `- ${item.name} x${item.qty} (${item.price})\n`;
  });
  const phoneNumber = '628123456789'; // Replace with actual cafe WhatsApp number
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, '_blank');
  cartData = [];
  localStorage.setItem('cartData', JSON.stringify(cartData));
  renderCart();
});

// Add cart link to navigation if not already present
const navList = document.querySelector('.nav__list');
if (navList && !document.querySelector('.nav__link[href="#cart"]')) {
  const cartLink = document.createElement('li');
  cartLink.innerHTML = '<a href="#cart" class="nav__link">CART</a>';
  navList.appendChild(cartLink);
}

// Initial render of cart
renderCart();
