<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
import logo from "../assets/hero/malinlogo.png";
import { ref } from "vue";
import { onMounted, onBeforeUnmount } from "vue";

function goProjects() {
  router.push({ path: "/", hash: "#projects" });
  isMenuOpen.value = false;
}

const isMenuOpen = ref(false);

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}

function closeMenu() {
  isMenuOpen.value = false;
}

function handleResize() {
  if (window.innerWidth > 768) {
    isMenuOpen.value = false;
  }
}

onMounted(() => {
  window.addEventListener("resize", handleResize);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", handleResize);
});
</script>

<template>
  <header class="navbar">
    <div class="navbar__container">
      <nav class="navbar__container-inner">
        <router-link to="/">✧ &nbsp;|&nbsp; home</router-link>
        <button class="navbar__container-inner-linklike" @click="goProjects">
          ⌘ &nbsp;|&nbsp; projects
        </button>
        <router-link to="/about">? &nbsp;|&nbsp; about</router-link>
        <a
          href="mailto:mailadress@example.com"
          class="navbar__container-inner-contact"
        >
          ⌲ &nbsp;|&nbsp; contact</a
        >
      </nav>
      <button
        class="navbar__menuToggle"
        type="button"
        @click="toggleMenu"
        aria-label="Open menu"
      >
        ☰
      </button>
    </div>
    <nav v-if="isMenuOpen" class="navbar__mobileMenu">
      <router-link to="/" @click="closeMenu">
        ✧ &nbsp;|&nbsp; home
      </router-link>

      <button class="navbar__mobileMenu-linklike" @click="goProjects">
        ⌘ &nbsp;|&nbsp; projects
      </button>

      <router-link to="/about" @click="closeMenu">
        ? &nbsp;|&nbsp; about
      </router-link>

      <a href="mailto:mailadress@example.com" @click="closeMenu">
        ⌲ &nbsp;|&nbsp; contact
      </a>
    </nav>
  </header>
</template>
