<script setup>
import projects from "../data/projects.js";
import ProjectCard from "../components/ProjectCard.vue";
import waveGif from "../assets/hero/malinwave.gif";
import logo from "../assets/hero/malinlogo.svg";
// import landscapeGif from "../assets/hero/landskapgifslutgiltig.gif";
import testGif from "../assets/hero/utanram.png";
import star from "../assets/hero/star.png";
import snurr from "../assets/hero/ikonsnurr2.png";
import cloud from "../assets/hero/cloud9.png";
import cloudwhite from "../assets/hero/cloudwhite.png";
import { ref, computed, onMounted, onBeforeUnmount } from "vue";
import heroDesktop from "../assets/hero/landskapgifslutgiltig.gif";
import heroMobile from "../assets/hero/landskap.gif";

const hoverFrame = ref(null); // aktuell bild-URL
const previewX = ref(0); // musens X
const previewY = ref(0); // musens Y
const previewVisible = ref(false); // visa/dölj

function showPreview(src) {
  hoverFrame.value = src;
  previewVisible.value = true;
}
function movePreview(e) {
  const pad = 16; // avstånd från muspekaren
  const w = 280; // samma bredd som i din CSS (.projects__cursorPreview)

  let x = e.clientX + pad;
  let y = e.clientY + pad;

  // Om bilden sticker utanför högerkanten → placera den till vänster om musen
  if (x + w > window.innerWidth) {
    x = e.clientX - w - pad;
  }

  previewX.value = x;
  previewY.value = y;
}
function hidePreview() {
  previewVisible.value = false;
}

// Hantera responsiv bild
const isMobile = ref(window.innerWidth <= 768);

function handleResize() {
  isMobile.value = window.innerWidth <= 768;
}

onMounted(() => {
  window.addEventListener("resize", handleResize);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", handleResize);
});

const heroImage = computed(() =>
  isMobile.value ? heroMobile : heroDesktop
);
</script>

<template>
  <main>
    <section class="main">
      <div class="main__presentation">
        <div class="main__presentation-header">
          <div class="main__presentation-header-about">
               <img
            :src="logo"
            class="main__presentation-header-about-logo"
            alt="Logo"
          />
          <div class="main__presentation-header-about-text">
            <p class="main__presentation-header-about-text-intro">
              This is what I do in the digital design space and
              beyond. 
            </p>
            <p class="main__presentation-header-about-text-qualities"> UX/UI Design &nbsp;|&nbsp; Frontend Development &nbsp;|&nbsp; Graphic Design</p>
          </div>
          </div>
        </div>
        <div>
          <img
            :src="heroImage"
            class="main__presentation-landscapegif"
            alt="Presentation image"
          />
        </div>
      </div>
    </section>

    <!-- <section id="midpresentation" class="midpresentation">
  <div class="midpresentation__content">
    <div class="midpresentation__content-container">
      <img
        :src="snurr"
        class="midpresentation__content-container-imgsnurr"
        alt="Ikon snurr"
      />
      <span class="midpresentation__content-container-rotatingtext">
        See selected<br />work
      </span>
    </div>
  </div>
</section> -->

    <!-- Projektdelen (scrollmålet) -->
    <section id="projects" class="projects">
      <div class="projects__presentation">
        <div class="projects__presentation-header">
          <h2>Selected work</h2>
        </div>
        <ol class="projects__presentation-list">
          <li
            v-for="(p, i) in projects"
            :key="p.slug"
            class="projects__presentation-listRow"
            @mouseenter="showPreview(p.cover)"
            @mousemove="movePreview"
            @mouseleave="hidePreview"
          >
            <router-link
              :to="`/projects/${p.slug}`" 
              class="projects__presentation-listRowLink"
            >
              <span class="projects__presentation-listRowLink-index">{{
                String(i + 1).padStart(2, "0")
              }}</span>
              <span class="projects__presentation-listRowLink-title">{{
                p.title
              }}</span>
              <span class="projects__presentation-listRowLink-tags">
                <span v-for="tag in p.tags" :key="tag" class="projects__tag">{{
                  tag
                }}</span>
              </span>
            </router-link>
            <img
              v-if="hoverFrame"
              :src="hoverFrame"
              :alt="p.title"
              aria-hidden="true"
              class="projects__cursorPreview"
              :class="{ 'is-visible': previewVisible }"
              :style="{ left: previewX + 16 + 'px', top: previewY + 16 + 'px' }"
            />
          </li>
        </ol>
      </div>
    </section>

    <section id="footer" class="footer">
      <div class="footer__inner">
        <div class="footer__inner-left">
          <h2>
            You've hit the footer, thanks for stopping by. <br></br>Still curious?
            <br></br><br></br> © Malin Olofsson 2025
          </h2>
        </div>
        <div class="footer__inner-right">
          <div class="footer__inner-right-links">
          <div class="footer__inner-right-links-link">
              <a href="mailto:maline.olofsson@hotmail.com" class="footer__inner-right-links-link-mail">
            <span class="footer__inner-right-links-link-linktext">
→ <u>maline.olofsson@hotmail.com</u></span>
            </a>
          </div>
          <div class="footer__inner-right-links-link">
            <a
  href="https://www.linkedin.com/in/malin-olofsson-611619a6/"
  target="_blank"
  rel="noopener noreferrer"
  class="footer__inner-right-links-link-linktext"
>
  → LinkedIn
</a>
          </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style src="../styles/pages/home.scss" scoped></style>
