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
    this.img = `./assets/icons/${imgName}`;
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
    this._initiateSkills();
    this._renderSkillsCards(skillsArr);
    skillsRadioBtn.forEach((btn) =>
      btn.addEventListener("click", this._toggleSkillsRadio.bind(this))
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

  _toggleSkillsRadio(e) {
    this._renderSkillsCards(skillsArr, e.target.id);
  }

  /* ----- Data Creation ----- */
  _initiateSkills() {
    new Skill("HTML5", "5+", "html5.svg", ["design-dev"]);
    new Skill("Javascript", "2-3", "javascript.png", ["design-dev"]);
    new Skill("CSS3", "5+", "CSS3.png", ["design-dev"]);
    new Skill("Wordpress", "5+", "wordpress.png", ["design-dev"]);
    new Skill("Shopify", "5+", "shopify.png", ["design-dev"]);
    new Skill("Unbounce", "5+", "unbounce.png", ["design-dev", "marketing"]);
    new Skill("Swipe Pages", "2-3", "swipepages.png", [
      "design-dev",
      "marketing",
    ]);
    new Skill("Zapier", "4-5", "zapier.png", ["marketing", "technology"]);
    new Skill("Pabbly Connect", "1-2", "pabbly.png", [
      "technology",
      "marketing",
    ]);
    new Skill("Make", "1-2", "make.png", ["technology", "marketing"]);
    new Skill("Photoshop", "5+", "photoshop.png", ["design-dev", "marketing"]);
    new Skill("Figma", "0-1", "figma.png", ["design-dev"]);
    new Skill("Bootstrap", "1-2", "bootstrap.png", ["design-dev"]);
    new Skill("Analytics", "5+", "analytics.png", ["marketing", "technology"]);
    new Skill("Tag Manager", "5+", "gtm.png", ["marketing", "technology"]);
    new Skill("SASS", "0-1", "sass.png", ["design-dev"]);
    new Skill("React", "1-2", "react.png", ["design-dev"]);
    new Skill("Svelte", "0-1", "svelte.png", ["design-dev"]);

    new Skill("Git", "1-2", "git.png", ["design-dev"]);
    new Skill("Node.js", "0-1", "nodejs.png", ["design-dev"]);
    new Skill("SEO", "5+", "seo.png", ["marketing"]);
    new Skill("Stripe", "4-5", "stripe.png", ["design-dev", "technology"]);
    new Skill("Google Ads", "5+", "google-ads.png", ["marketing"]);
    new Skill("Ads Editor", "5+", "ad-editor.png", ["technology"]);
    new Skill("MailChimp", "5+", "mailchimp.png", ["marketing", "technology"]);
    new Skill("MailShake", "5+", "mailshake.png", ["technology"]);
    new Skill("Meta Ads", "2-3", "meta-ads.png", ["marketing"]);
    new Skill("Meta Apps", "5+", "meta.png", ["marketing"]);

    new Skill("RapidAPI", "1-2", "rapid-api.png", ["technology"]);
    new Skill("Postman", "1-2", "postman.png", ["technology"]);
  }
}

const app = new App();
