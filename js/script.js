const currentYear = new Date().getFullYear();
const footer = document.querySelector("footer");
footer.innerHTML = `Copyright © ${currentYear} Ian McDonald`;

// NavBar
const primaryNav = document.querySelector('.primary-navbar');
const navToggle = document.querySelector('.mobile-nav-toggle');

navToggle.addEventListener('click', () => {
    const visibility = primaryNav.getAttribute('data-visible');

    if (visibility === 'false') {
        primaryNav.setAttribute('data-visible', 'true');
        navToggle.setAttribute('aria-expanded', 'true');
    }
    else {
        primaryNav.setAttribute('data-visible', 'false');
        navToggle.setAttribute('aria-expanded', 'false');
    }
    }
);