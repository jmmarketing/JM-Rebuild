"use strict";

const menu = document.querySelector("header");
const mobileOverlay = document.querySelector(".mobile-menu-overlay");

const toggleMobileMenu = function (e) {
  if (e.target.classList.contains("fa-bars"))
    mobileOverlay.classList.toggle("open");
  if (e.target.classList.contains("fa-x"))
    mobileOverlay.classList.toggle("open");
};

menu.addEventListener("click", toggleMobileMenu);
