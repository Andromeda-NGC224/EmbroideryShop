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

// HEADER SCROLL

const scrollHeader = document.querySelector('.header');

const addHeaderScroll = () => {
    scrollHeader.classList.add('scrolled');
}

const removeHeaderScroll = () => {
    scrollHeader.classList.remove('scrolled');
}

window.addEventListener('scroll', function () {
    let getScrollPosition = window.scrollY;

    if (getScrollPosition > 1) {
        console.log(addHeaderScroll);
        addHeaderScroll();
    } else {
        removeHeaderScroll();
    }
})

// SMOOTH SCROLLING WHEN CLICKING AN ANCHOR LINK

const anchorlinks = document.querySelectorAll('a[href^="#"]');
for (let anchor of anchorlinks) {
    anchor.addEventListener('click', function (event) {
        const value = anchor.getAttribute('href');
        const target = document.querySelector(value);
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
        history.pushState(null, null, value)
        event.preventDefault()
    })
}



