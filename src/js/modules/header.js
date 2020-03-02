const header = document.querySelector('.js-header');
const drawer = document.querySelector('.js-content-header');
const burger = document.querySelector('.js-burger')

const headerBackgroundHandler = () => {
    if (window.innerWidth > 980) {
        window.scrollY > 0 ? header.classList.add('l-header--scrolled') : header.classList.remove('l-header--scrolled');
    }

}

window.addEventListener('scroll', headerBackgroundHandler);

/* Hide / Show mobile menu
   ========================================================================== */

const handleMobile = () => {
    burger.classList.toggle('is-active');
    drawer.classList.toggle('u-nav--isActive');
}

burger.addEventListener("click", handleMobile);