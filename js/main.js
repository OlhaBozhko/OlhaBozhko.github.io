
const slides = document.querySelectorAll('#slides .slide');
const round = document.querySelectorAll('.round');

let currentSlide = 0;
let currentRound = 0;


round.forEach((item) => {
    item.addEventListener('click', roundChange);
})

let slideInterval = setInterval(nextSlide, 10000);



function nextSlide() {
    slides[currentSlide].classList = 'slide';
    round[currentRound].classList = 'round';
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList = 'slide showing';
    currentRound = (currentRound + 1) % round.length;
    round[currentRound].classList = 'round active'
}

function roundChange(event) {

    let target = event.target;

    document.querySelector('ul li.showing').classList.remove('showing')
    document.querySelector('.carusel-nav div.active').classList.remove('active')
    let x = target.dataset.atr;
    document.querySelector(`li[data-atr="${x}"]`).classList.add('showing')

    target.classList.add('active');
    clearInterval(slideInterval)
}

let updownElem = document.querySelector("#updown");

function trackScroll() {
    var scrolled = window.pageYOffset;
    var coords = document.documentElement.clientHeight;

    if (scrolled > coords) {
        updownElem.classList.add('show');
    }
    if (scrolled < coords) {
        updownElem.classList.remove('show');
    }

}

function backToTop() {
    if (window.pageYOffset > 0) {
        window.scrollBy(0, -80);
        setTimeout(backToTop, 20);
    }

}

window.addEventListener('scroll', trackScroll);
updownElem.addEventListener('click', backToTop);


let burgerMenu = document.querySelector(".icon");

burgerMenu.addEventListener('click', () => {
    document.querySelectorAll('.hamburger').forEach((el) => {
        el.classList.toggle('active1');

    });
   
    if (document.querySelector('.hamburger').classList.value == "hamburger active1") {
        document.querySelector('.burger-menu').classList.add('active');
    } else {
        document.querySelector('.burger-menu').classList.remove('active');
    }
    
})









