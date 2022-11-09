'use strict';

const RETBA_MENU = document.querySelector(".retba__menu");
const RETBA_TITLE = document.querySelector(".retba__title");
const RETBA_GALLERY = document.querySelector(".image__gallery-retba");
const CLOSE_BTN_RETBA = document.querySelector(".close-retba");
CLOSE_BTN_RETBA.addEventListener("click", () => {
    RETBA_MENU.classList.toggle("retba__menu-active");
    RETBA_TITLE.classList.toggle("retba__title-active");
    RETBA_GALLERY.classList.toggle("image__gallery-active");
});
RETBA_TITLE.addEventListener("click", () => {
    RETBA_MENU.classList.toggle("retba__menu-active");
    RETBA_TITLE.classList.toggle("retba__title-active");
    RETBA_GALLERY.classList.toggle("image__gallery-active");
});

const SOKOTRA_MENU = document.querySelector(".sokotra__menu");
const SOKOTRA_TITLE = document.querySelector(".sokotra__title");
const SOKOTRA_GALLERY = document.querySelector(".image__gallery-sokotra");
const CLOSE_BTN_SOKOTRA = document.querySelector(".close-sokotra");
CLOSE_BTN_SOKOTRA.addEventListener("click", () => {
    SOKOTRA_MENU.classList.toggle("sokotra__menu-active");
    SOKOTRA_TITLE.classList.toggle("sokotra__title-active");
    SOKOTRA_GALLERY.classList.toggle("image__gallery-active-sokotra");
});
SOKOTRA_TITLE.addEventListener("click", () => {
    SOKOTRA_MENU.classList.toggle("sokotra__menu-active");
    SOKOTRA_TITLE.classList.toggle("sokotra__title-active");
    SOKOTRA_GALLERY.classList.toggle("image__gallery-active-sokotra");
});

const UYUNI_MENU = document.querySelector(".uyuni__menu");
const UYUNI_TITLE = document.querySelector(".uyuni__title");
const CLOSE_BTN_UYUNI = document.querySelector(".close-uyuni");

UYUNI_TITLE.addEventListener("click", () => {
    UYUNI_MENU.classList.toggle("uyuni__menu-active");
   
});

CLOSE_BTN_UYUNI.addEventListener("click", () => {
    UYUNI_MENU.classList.toggle("uyuni__menu-active");
   
});

const FLY_MENU = document.querySelector(".fly__menu");
const FLY_TITLE = document.querySelector(".fly__title");
const CLOSE_BTN_FLY = document.querySelector(".close-fly");

FLY_TITLE.addEventListener("click", () => {
FLY_MENU.classList.toggle("fly__menu-active");
FLY_TITLE.classList.toggle("fly__title-active");
   
});

CLOSE_BTN_FLY.addEventListener("click", () => {
    FLY_MENU.classList.toggle("fly__menu-active");
    FLY_TITLE.classList.toggle("fly__title-active");
       
    });

const GIANTS_MENU = document.querySelector(".giants__menu");
const GIANTS_TITLE = document.querySelector(".giants__title");
const CLOSE_BTN_GIANTS = document.querySelector(".close-giants");

GIANTS_TITLE.addEventListener("click", () => {
GIANTS_MENU.classList.toggle("giants__menu-active");
});
CLOSE_BTN_GIANTS.addEventListener("click", () => {
GIANTS_MENU.classList.toggle("giants__menu-active");
  
    });


const accordion = document.querySelector(".accordion__inner");
const accordionItem = document.querySelectorAll(".accordion__item");
const trigger = document.querySelectorAll(".accordion__trigger");
const content = document.querySelectorAll("accordion__content");



accordionItem.forEach(el => {
    el.addEventListener("click", (e) => {
        const self = e.currentTarget;
        const control = self.querySelector(".accordion__control");
        const content = self.querySelector(".accordion__content");

        self.classList.toggle('open');

        if(self.classList.contains('open')){
            control.setAttribute('aria-expanded', true);
            control.setAttribute('aria-expanded', false);
            content.style.maxHeight = content.scrollHeight + 'px';
        } else{
            control.setAttribute('aria-expanded', false);
            control.setAttribute('aria-expanded', true);
            content.style.maxHeight = null;
        }
    });
});

const buttonNav = document.querySelector(".nav__button");
const navigation = document.querySelector(".navigation");

buttonNav.addEventListener("click", ()=> {
    navigation.classList.toggle("navigation-active");
})


const before = document.querySelector(".container__before");
const after = document.querySelector(".container__after");
const wrapper = document.querySelector(".yellowstone");
const slider = document.getElementById("myRange");
slider.oninput = function() {
    let sliderVal = slider.value;
    before.style.width = sliderVal + "vw";
}

