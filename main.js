// --------------- Анимация при скролле ---------------
const elements = document.querySelectorAll('.anim-item');

function scrollAnim() {
   let scroll = window.scrollY + window.innerHeight;
   elements.forEach(element => {
      const elementHeight = element.offsetTop + element.offsetHeight * 0.4;
      if (scroll > elementHeight) {
         element.classList.add('active')
      }
   })
}
window.addEventListener('scroll', scrollAnim);
scrollAnim();
// --------------- Анимация при скролле ---------------





// --------------- Бургер меню ---------------
const navIconBtn = document.querySelector('.nav-icon-btn');
const navIcon = document.querySelector('.nav-icon');
const mobileNav = document.querySelector('.header-content');
const html = document.querySelector('html')
const burgerLinks = document.querySelectorAll('.burger-link')

navIcon.addEventListener('click', () => {
   navIcon.classList.toggle('nav-icon--active');
   mobileNav.classList.toggle('header-content__mobile');
   html.classList.toggle('no-scroll');
});

burgerLinks.forEach(index => {
   index.addEventListener('click', () => {
      navIcon.classList.remove('nav-icon--active');
      mobileNav.classList.remove('header-content__mobile');
      html.classList.remove('no-scroll');
   })
});
// --------------- Бургер меню ---------------