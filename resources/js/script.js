"use strict";

/* ###### DOM ELEMENTS ##########*/
const menu = document.querySelector("header");
const mobileOverlay = document.querySelector(".mobile-menu-overlay");
const skillCardContainer = document.querySelector("#skills-card-container");
const skillsRadioBtn = document.querySelectorAll('input[name="skillset"]');

let skillsArr = [];
/*##### APP DATA ####### */
class Skill {
  constructor(name, exp, imgName, type) {
    this.name = name;
    this.exp = exp;
    this.img = `./assets/images/${imgName}`;
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
    skillsRadioBtn.forEach((btn) =>
      btn.addEventListener("click", this._toggleSkillsCards.bind(this))
    );
  }

  /* ----- DOM Manip. Functions ----- */

  _clearSkillCards() {
    document.querySelectorAll(".skill-card").forEach((el) => el.remove());
  }

  _renderSkillsCards(arr, type = "all") {
    this._clearSkillCards();
    if (type !== "all")
      arr = arr.filter((skillObj) => skillObj.type.includes(type));

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

  /* ----- Event Listener Functions ----- */
  _toggleMobileMenu(e) {
    console.log(e);
    if (e.target.classList.contains("fa-bars"))
      mobileOverlay.classList.toggle("open");
    if (e.target.classList.contains("fa-x"))
      mobileOverlay.classList.toggle("open");
  }

  _toggleSkillsCards(e) {
    this._renderSkillsCards(skillsArr, e.target.id);
  }
}

const skill_HTML5 = new Skill("HTML5", "5+", "html5.svg", [
  "design-dev",
  "technology",
]);

const skill_CSS = new Skill("CSS3", "5+", "html5.svg", ["design-dev"]);

const app = new App();
