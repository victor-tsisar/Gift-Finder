"use strict";

const menu = document.querySelector(".modal");
const menuBtn = document.querySelectorAll(".main-btn");
const menuClose = document.querySelector(".modal__close");
const secondScreenBtn = document.querySelector('.second-screen__btn');
const contactHow = document.querySelector('.contact__how');
const modalForm = document.querySelector('.modal__form');
const personName = document.querySelector('.person-name');
const personPhone = document.querySelector('.person-phone');
const personMessage = document.querySelector('.person-message');
const personSend = document.querySelector('.person-send');

const overlay = document.createElement('div');
overlay.classList.add('overlay');
document.body.insertAdjacentElement('beforeend', overlay);

function allertWindow() {
    swal({
        text: "This is a demo version!",
        icon: "success",
        button: "OK!",
    });
}

function toggleModal() {
    menu.classList.toggle('active');
    overlay.classList.toggle('active');
    modalForm.reset();
    personMessage.style.height = '100px';
}

personMessage.addEventListener('keyup', function () {
    if (this.scrollTop > 0) {
        this.style.height = this.scrollHeight + "px";
    } 
});

secondScreenBtn.addEventListener('click', allertWindow);
contactHow.addEventListener('click', allertWindow);
for (let i = 0; i < menuBtn.length; i++) {
    menuBtn[i].addEventListener('click', () => {
        toggleModal();
        personName.focus();
    } 
    );
}
menuClose.addEventListener('click', () => {
    toggleModal();
    modalForm.reset();
});
overlay.addEventListener('click', toggleModal);
personSend.addEventListener('click', (event) => {
    if (personName.value && personPhone.value && personMessage.value) {
        event.preventDefault();
        setTimeout(allertWindow, 200);
        toggleModal();
    } else {
        alert(`
        Enter your information about the desired gifts and we will call you.

        Or you call us)
        `);
    }
});

// Закриття модального вікна по кнопці ESC
document.addEventListener('keydown', (event) => {
    if (event.code === 'Escape') {
        toggleModal();
    };
});

$(document).ready(function () {
    $('.blog__items').slick({
        arrows: false,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        centerMode: true,
        adaptiveHeight: true,
        responsive: [{
            breakpoint: 999,
            settings: {
                slidesToShow: 1,
                centerMode: false,
                adaptiveHeight: false,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                autoplay: false,
            }
        }
        ]
    });

    $("a#gallery-image").fancyboxPlus({
        'transitionIn': 'elastic',
        'autoDimensions': true,
    });
});
