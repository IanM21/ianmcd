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

// Cards on mobile
const cardHeaders = document.querySelectorAll('.card-header');

cardHeaders.forEach(cardHeader => {
  cardHeader.addEventListener('click', () => {
    const card = cardHeader.parentNode;
    card.classList.toggle('expanded');
  });
});

// Get all the <p> elements within .card-header
const expandableParagraphs = document.querySelectorAll('.card-header p');

// Attach a click event listener to each expandable paragraph
expandableParagraphs.forEach((paragraph) => {
  paragraph.addEventListener('click', function () {
    // Toggle the display of the next sibling <p> element with the "expandable-content" class
    const expandableContent = this.nextElementSibling;
    expandableContent.style.display = (expandableContent.style.display === 'none') ? 'block' : 'none';
  });
});