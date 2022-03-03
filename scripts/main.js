const nav = document.querySelector('.primary-navigation');
const toggle = document.querySelector('.mobile-menu-toggle');

toggle.addEventListener('click', () => {
    let visible = nav.getAttribute('data-visible');
    if (visible == 'true') {
        nav.setAttribute('data-visible', 'false');
    } else {
        nav.setAttribute('data-visible', 'true');
    }
});

/* Also close menu when click outisde */
document.addEventListener('click', (e) => {
    var isClickOnToggle = toggle.contains(e.target);
    var isClickInsideNav = nav.contains(e.target);

    if (!isClickOnToggle && !isClickInsideNav) {
        nav.setAttribute('data-visible', 'false');
    }
})