"use strict";

/* ###### DOM ELEMENTS ##########*/
const menu = document.querySelector("header");
const mobileOverlay = document.querySelector(".mobile-menu-overlay");
const skillCardContainer = document.querySelector("#skills-card-container");

/* ######### APP CLASS / INITIATOR ######### */
class App {
  #skills = [];
  constructor() {
    menu.addEventListener("click", this._toggleMobileMenu);
  }

  _toggleMobileMenu(e) {
    console.log(e);
    if (e.target.classList.contains("fa-bars"))
      mobileOverlay.classList.toggle("open");
    if (e.target.classList.contains("fa-x"))
      mobileOverlay.classList.toggle("open");
  }
}

const app = new App();
