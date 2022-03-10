const header = document.querySelector('#header');
const nav = document.querySelector('.primary-navigation');
const toggle = document.querySelector('.mobile-menu-toggle');

toggle.addEventListener('click', () => {
    let visible = header.getAttribute('data-mobile-menu-visible');
    if (visible == 'true') {
        hideMenu();
    } else {
        showMenu();
    }
});

/* Close menu when click on navigation links */
const navLinks = nav.querySelectorAll('a');
console.log(navLinks);
navLinks.forEach((link) => {
    link.addEventListener('click', () => {
        hideMenu();
    });
});

/* Also close menu when click outisde */
document.addEventListener('click', (e) => {
    var isClickOnToggle = toggle.contains(e.target);
    var isClickInsideNav = nav.contains(e.target);

    if (!isClickOnToggle && !isClickInsideNav) {
        hideMenu();
    }
})

function showMenu() {
    header.setAttribute('data-mobile-menu-visible', 'true');
}

function hideMenu() {
    header.setAttribute('data-mobile-menu-visible', 'false');
}