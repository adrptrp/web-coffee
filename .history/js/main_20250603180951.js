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

/*=============== CHECKOUT MODAL ===============*/
const checkoutModal = document.getElementById('checkout-modal');
const checkoutModalOverlay = document.getElementById('checkout-modal-overlay');
const checkoutModalClose = document.getElementById('checkout-modal-close');
const checkoutModalBody = document.getElementById('checkout-modal-body');
const checkoutModalConfirm = document.getElementById('checkout-modal-confirm');

// Show checkout modal
function showCheckoutModal(orderList) {
  checkoutModalBody.innerHTML = orderList.map(i =>
    `<div>${i.name} x${i.qty} (${i.price})</div>`
  ).join('');
  checkoutModal.style.display = 'flex';
}
// Hide checkout modal
function hideCheckoutModal() {
  checkoutModal.style.display = 'none';
}
checkoutModalOverlay.addEventListener('click', hideCheckoutModal);
checkoutModalClose.addEventListener('click', hideCheckoutModal);

// Intercept cart checkout
document.getElementById('cart-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const selected = cartData.filter(i => i.checked);
  if (selected.length === 0) {
    alert('Pilih minimal 1 item untuk dipesan!');
    return;
  }
  showCheckoutModal(selected);
});

// Konfirmasi & Kirim (WhatsApp)
checkoutModalConfirm.addEventListener('click', function() {
  const selected = cartData.filter(i => i.checked);
  let pesan = 'Halo, saya ingin memesan:\n';
  selected.forEach(i => {
    pesan += `- ${i.name} x${i.qty} (${i.price})\n`;
  });
  const nomorWA = '6289632372161'; // Ganti dengan nomor WA cafe kamu
  const urlWA = `https://wa.me/${nomorWA}?text=${encodeURIComponent(pesan)}`;
  window.open(urlWA, '_blank');
  // Hapus item yang di-checkout dari cart
  cartData = cartData.filter(i => !i.checked);
  renderCart();
  hideCheckoutModal();
  hideCart();
});
