// BURGER
const button = document.querySelector('.header__button');
const menu = document.querySelector('.header__menu');
const menuLink = document.querySelectorAll('.header__menu li a');

button.addEventListener('click', e => {
    menu.classList.toggle('active');
    button.classList.toggle('active');
    e.stopPropagation();

    document.addEventListener('click', closeMenuOnClickOutside);
});

function closeMenuOnClickOutside(e) {
    if (!menu.contains(e.target)) {
        menu.classList.remove('active');
        button.classList.remove('active');
    }
}

//CAROUSEL
const slideNames = ['Home', 'Glory'];

let slideIndex = 1;

function plusSlides(n) {
    showSlides((slideIndex += n));
}

function currentSlide(n) {
    showSlides((slideIndex = n));
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName('carousel__item');
    let currentCount = document.getElementById('currentCount');
    let totalCount = document.getElementById('totalCount');
    let slideName = document.getElementById('slideName');

    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }

    slides[slideIndex - 1].style.display = 'block';
    currentCount.textContent = '0' + slideIndex;
    totalCount.textContent = '0' + slides.length;
    slideName.textContent = slideNames[slideIndex - 1];
}
showSlides(slideIndex);

//REVEAL
function reveal() {
    const reveals = document.querySelectorAll('.reveal');

    for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add('active');
        } else {
            reveals[i].classList.remove('active');
        }
    }
}

window.addEventListener('scroll', reveal);
