//  Open and Close Mobile Menu

const mobileMenu = document.querySelector('.mobile');
function openMobileMenu(event) {
    mobileMenu.classList.toggle('is-open');
}

const mobileMenuOpen = document.querySelector('.header-burger-btn');
mobileMenuOpen.addEventListener('click', openMobileMenu);

function closeMobileMenu(event) {
    mobileMenu.classList.remove('is-open');
}

const mobileMenuClose = document.querySelector('.mobile-menu-btn');
mobileMenuClose.addEventListener('click', closeMobileMenu);




