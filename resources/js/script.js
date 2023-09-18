"use strict";

/* ###### DOM ELEMENTS ##########*/
const menu = document.querySelector("header");
const mobileOverlay = document.querySelector(".mobile-menu-overlay");
const skillCardContainer = document.querySelector("#skills-card-container");

let skillsArr = [];
/*##### SKILLS & CASESTUDIES CLASSES ####### */
class Skill {
  constructor(name, exp, imgURL, type) {
    this.name = name;
    this.exp = exp;
    this.img = imgURL;
    this.type = [...type];
    this._pushToArray();
  }

  _pushToArray() {
    skillsArr.push(this);
  }
}

/* ######### APP CLASS / INITIATOR ######### */
class App {
  #skills = [];
  constructor() {
    menu.addEventListener("click", this._toggleMobileMenu);
    this._renderSkillsCards(skillsArr);
  }

  _toggleMobileMenu(e) {
    console.log(e);
    if (e.target.classList.contains("fa-bars"))
      mobileOverlay.classList.toggle("open");
    if (e.target.classList.contains("fa-x"))
      mobileOverlay.classList.toggle("open");
  }

  _renderSkillsCards(arr, type = "all") {
    arr.forEach((skill) => {
      const html = `
      <div class="skill-card">
        <div class="skill-icon-box">
          <img src="${skill.img}" />
        </div>
        <div class="skill-text">
          <p class="skill-card-title">${skill.name}</p>
          <p class="skill-card-subtitle">${skill.exp} years experience</p>
        </div>
      </div>`;

      skillCardContainer.insertAdjacentHTML("beforeend", html);
    });
  }
}

const skill_HTML5 = new Skill("HTML5", "5+", "./assets/images/html5.svg", [
  "design-dev",
  "technology",
]);

const skill_CSS = new Skill("CSS3", "5+", "./assets/images/html5.svg", [
  "design-dev",
]);

const app = new App();
