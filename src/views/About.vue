<script setup>
import MalinGif from "../assets/hero/malinwave.gif";
import Breadcrumbs from "../components/Breadcrumbs.vue";
</script>

<template>
  <main class="about">
          <div class="about__container">
            <Breadcrumbs />
    <div class="about__container-content">
      <div class="about__container-content-text">
        <h1 class="about__container-content-text-title">Introduction</h1>
        <p class="about__container-content-text-paragraph">
          Jag heter Malin Olofsson och är född och uppvuxen i Jämtland. Under
          årens gång har jag rört mig från småstad -> storstad och är idag
          stationerad på landet en kort bit utanför Östersund. Min yrkesresa
          började inom grafisk design och förpackningsdesign och har senare
          utvecklats vidare genom studier och arbete inom frontendutveckling och
          UX/UI design.<br></br><br></br> Jag trivs allra bäst när jag får arbeta just där – i
          gränslandet mellan design och teknik. Den röda tråden i mitt arbete
          har alltid varit att försöka förstå människors behov och skapa
          lösningar som gör deras vardag enklare och bättre (och lite snyggare).
        </p>
      </div>
      <div class="about__container-content-gif">
        <img
          :src="MalinGif"
          class="about__container-content-gif-img"
          alt="Presentation gif"
        />
      </div>
    </div>
    <div class="about__container-content-experience">
      <div class="about__container-content-experience-education">
        <h2 class="about__container-content-experience-education-title">Education</h2>
        <ul class="about__container-content-experience-education-list">
          <li class="about__container-content-experience-education-list-item">
            <h3 class="about__container-content-experience-education-list-item-title">
              Inkluderande UX-design
            </h3>
            <p class="about__container-content-experience-education-list-item-subtitle">
              Nackademin | 2024 - 2025
            </p>
          </li>
          <li class="about__container-content-experience-education-list-item">
            <h3 class="about__container-content-experience-education-list-item-title">
              Frontend Developer & UX/UI Designer
            </h3>
            <p class="about__container-content-experience-education-list-item-subtitle">
              Hyper Island | 2020 - 2022
            </p>
          </li>
          <li class="about__container-content-experience-education-list-item">
            <h3 class="about__container-content-experience-education-list-item-title">
              Graphic design & Packaging Development
            </h3>
            <p class="about__container-content-experience-education-list-item-subtitle">
              Nackademin | 2014 - 2016
            </p>
          </li>
          <li class="about__container-content-experience-education-list-item">
            <h3 class="about__container-content-experience-education-list-item-title">
              Fashion Science
            </h3>
            <p class="about__container-content-experience-education-list-item-subtitle">
              Stockholms universitet | 2011 - 2012
            </p>
          </li>
        </ul>
      </div>
      <div class="about__container-content-experience-skills">
        <h2 class="about__container-content-experience-skills-title">Skills</h2>
        <div class="about__container-content-experience-skills-lists">
          <div class="about__container-content-experience-skills-lists-list">
            <h3 class="about__container-content-experience-skills-lists-list-title">
              Development
            </h3>
            <ul>
              <li>HTML & CSS (SCSS)</li>
              <li>JavaScript</li>
              <li>Vue.js</li>
              <li>WCAG</li>
              <li>Accessibility (a11y)</li>
              <li>DOS Act</li>
              <li>Version Control (Git)</li>
              <li>React.js</li>
              <li>SEO Basics</li>
              <li>Scrum</li>
            </ul>
          </div>
          <div class="about__container-content-experience-skills-lists-list">
            <h3 class="about__container-content-experience-skills-lists-list-title">
              Design
            </h3>
            <ul>
              <li>Graphic Design</li>
              <li>UI Design</li>
              <li>UX Research</li>
              <li>Responsive Design</li>
              <li>Wireframing & Prototyping</li>
              <li>User Testing</li>
              <li>Branding</li>
              <li>Motion design</li>
              <li>Packaging design</li>
              <li>Packaging development</li>
            </ul>
          </div>
          <div class="about__container-content-experience-skills-lists-list third-list">
            <h2 class="about__container-content-experience-skills-lists-list-title">
              Design Tools
            </h2>
            <ul>
              <li>Adobe Illustrator</li>
              <li>Adobe Photoshop</li>
              <li>Adobe InDesign</li>
              <li>Figma</li>
              <li>Adobe XD</li>
              <li>Adobe Premiere</li>
              <li>Powepoint</li>
              <li>Excel</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    </div>
  </main>
</template>

<script setup></script>

<style src="../styles/pages/about.scss" scoped></style>
