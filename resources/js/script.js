"use strict";

/* ###### DOM ELEMENTS ##########*/
const menu = document.querySelector("header");
const mobileOverlay = document.querySelector(".mobile-menu-overlay");
const skillCardContainer = document.querySelector("#skills-card-container");
const skillsRadioBtn = document.querySelectorAll('input[name="skillset"]');
const casestudyRadioBtn = document.querySelectorAll('input[name="casestudy"]');
const casestudyContainer = document.querySelector("#casestudy-card-container");
const nextCasestudy = document.querySelector(".fa-arrow-right");
const prevCasestudy = document.querySelector(".fa-arrow-left");

let skillsArr = [];
let casestudyArr = [];
/*##### APP DATA ####### */
class Skill {
  constructor(name, exp, imgName, typeArr) {
    this.name = name;
    this.exp = exp;
    this.img = `./assets/icons/${imgName}`;
    this.type = typeArr;
    this._pushToArray();
  }

  _pushToArray() {
    skillsArr.push(this);
  }
}

class Casestudy {
  constructor(name, desc, logoName, bgImgName, tagArr, typeArr) {
    this.name = name;
    this.description = desc;
    this.logo = `./assets/images/case-study/${logoName}`;
    this.bgImage = `./assets/images/case-study/${bgImgName}`;
    this.tags = tagArr;
    this.type = typeArr;
    this._pushToArray();
  }

  _pushToArray() {
    casestudyArr.push(this);
  }
}

/* ######### APP CLASS / INITIATOR ######### */
class App {
  #skills = [];
  constructor() {
    this._init();
  }

  /* ----- Initialize Site -------*/

  _init() {
    menu.addEventListener("click", this._toggleMobileMenu);
    this._initiateSkills();
    this._renderSkillsCards(skillsArr);
    this._initiateCasestudies();
    this._renderCasestudyCards(casestudyArr);
    skillsRadioBtn.forEach((btn) =>
      btn.addEventListener("click", this._toggleSkillsRadio.bind(this))
    );

    casestudyRadioBtn.forEach((btn) => {
      btn.addEventListener("click", this._toggleCasestudyRadio.bind(this));
    });
    nextCasestudy.addEventListener("click", this._scrollCaseStudies);
    prevCasestudy.addEventListener("click", this._scrollCaseStudies);

    document
      .querySelectorAll(".experience-card")
      .forEach((card) =>
        card.addEventListener("click", this._toggleExperienceCard)
      );
  }

  /* ----- DOM Manip. Functions ----- */

  _clearSkillCards() {
    document.querySelectorAll(".skill-card").forEach((el) => el.remove());
  }

  _clearCasestudies() {
    document
      .querySelectorAll(".casestudy-card")
      .forEach((card) => card.remove());
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

  _renderCasestudyCards(arr, type = "all") {
    this._clearCasestudies();

    if (type !== "all")
      arr = arr.filter((casestudyObj) => casestudyObj.type.includes(type));

    document.querySelector(
      "#casestudy-count"
    ).textContent = `/${arr.length}/ Projects`;
    arr.forEach((casestudy) => {
      let tagsHTML = "";
      casestudy.tags.forEach(
        (tag) => (tagsHTML += `<p class="casestudy-tag">${tag}</p>`)
      );
      const html = `
    <div
    class="casestudy-card"
    style="
      background: linear-gradient(
          rgba(86, 86, 86, 0.7),
          rgba(86, 86, 86, 0.7)
        ),
        url('${casestudy.bgImage}');
      background-size: cover;
    "
  >
          <p class="casestudy-title">${casestudy.name}</p>
          <p class="casestudy-description">
            ${casestudy.description}
          </p>
          <img
            src="${casestudy.logo}"
            class="casestudy-logo"
          />
          <div class="casestudy-tag-container">
            ${tagsHTML}
          </div>
  </div>`;

      casestudyContainer.insertAdjacentHTML("beforeend", html);
    });
  }

  _scrollCaseStudies(e) {
    e.target.dataset.slide === "next"
      ? (casestudyContainer.scrollLeft += 370)
      : (casestudyContainer.scrollLeft -= 370);
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

  _toggleCasestudyRadio(e) {
    // console.log(e);
    this._renderCasestudyCards(casestudyArr, e.target.value);
  }

  _toggleExperienceCard(e) {
    const el = this;
    const icon = el.querySelector("i");

    el.lastElementChild.toggleAttribute("hidden");
    icon.classList.toggle("fa-eye");
    icon.classList.toggle("fa-eye-slash");
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
    new Skill("Zapier", "4-5", "zapier.png", ["technology"]);
    new Skill("Pabbly Connect", "1-2", "pabbly.png", ["technology"]);
    new Skill("Make", "1-2", "make.png", ["technology"]);
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

  _initiateCasestudies() {
    new Casestudy(
      "PullsPlus",
      "Local service company | Scaled to over 6-figures. Scaled to over 6-figures.",
      "PullsPlus-Logo-White.png",
      "PullsPlus-bg.jpg",
      ["Lead Gen.", "PPC", "Email", "A/B Testing", "Automation"],
      ["design-dev", "marketing", "technology"]
    );

    new Casestudy(
      "Example 1",
      "Local service company | Scaled to over 6-figures. Scaled to over 6-figures.",
      "PullsPlus-Logo-White.png",
      "PullsPlus-bg.jpg",
      ["Lead Gen.", "PPC", "Email", "A/B Testing", "Automation"],
      ["technology"]
    );

    new Casestudy(
      "Example 2",
      "Local service company | Scaled to over 6-figures. Scaled to over 6-figures.",
      "PullsPlus-Logo-White.png",
      "PullsPlus-bg.jpg",
      ["Lead Gen.", "SEO", "Social", "eCommerce", "Automation"],
      ["technology"]
    );

    new Casestudy(
      "Example 3",
      "Local service company | Scaled to over 6-figures. Scaled to over 6-figures.",
      "PullsPlus-Logo-White.png",
      "PullsPlus-bg.jpg",
      ["Lead Gen.", "SEO", "Social", "eCommerce", "Automation"],
      ["marketing"]
    );

    new Casestudy(
      "Example 4",
      "Local service company | Scaled to over 6-figures. Scaled to over 6-figures.",
      "PullsPlus-Logo-White.png",
      "PullsPlus-bg.jpg",
      ["Lead Gen.", "SEO", "Social", "eCommerce", "Automation"],
      ["marketing", "design-dev"]
    );

    new Casestudy(
      "Example 5",
      "Local service company | Scaled to over 6-figures. Scaled to over 6-figures.",
      "PullsPlus-Logo-White.png",
      "PullsPlus-bg.jpg",
      ["Lead Gen.", "SEO", "Social", "eCommerce", "Automation"],
      ["design-dev", "technology"]
    );

    new Casestudy(
      "Example 6",
      "Local service company | Scaled to over 6-figures. Scaled to over 6-figures.",
      "PullsPlus-Logo-White.png",
      "PullsPlus-bg.jpg",
      ["Lead Gen.", "SEO", "Social", "eCommerce", "Automation"],
      ["marketing"]
    );
  }
}

const app = new App();
