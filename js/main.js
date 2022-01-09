const mobileNav = function () {
    const burgerMenu = document.querySelector('.mobile-nav-toggle');
    const navList = document.querySelector('.nav-list');
    const navListItems = document.querySelectorAll('.nav-list li');

    burgerMenu.addEventListener('click', function () {
        burgerMenu.classList.toggle('mobile-nav-toggle--active');
        navList.classList.toggle('nav-list--active');

        navListItems.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinksFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        })
    });
}

const app = () => {
    mobileNav();
}

app();