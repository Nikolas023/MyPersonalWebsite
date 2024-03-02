/*Here we will add the click effect so our menu button animates*/

/*we use document.querySelector() to target certain aspects from html. */
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

/*To target the ul in html: */
menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});
