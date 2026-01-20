<script setup>
import { useRoute } from "vue-router";
import projects from "../data/projects.js";
import Breadcrumbs from "../components/Breadcrumbs.vue";

const route = useRoute();
const project = projects.find((p) => p.slug === route.params.slug);
</script>

<template>
  <div class="projectDetail">
    <main v-if="project">
      <Breadcrumbs />

      <div class="projectDetail__info">
        <div class="projectDetail__info-title">
          <h1>{{ project.title }}</h1>
        </div>
        <div class="projectDetail__info-tag">
          <ul v-if="project.tags?.length" class="projectDetail__info-tag-list">
            <li v-for="tag in project.tags" :key="tag">{{ tag }}</li>
          </ul>
        </div>
        <div class="projectDetail__info-summary">
          <p>{{ project.summary }}</p>
          <!-- <img :src="project.cover" :alt="project.alt" /> -->
        </div>
      </div>
      <div class="projectDetail__imgs">
        <img
          v-for="(src, i) in project.images"
          :key="i"
          :src="src"
          :alt="`${project.title} bild ${i + 1}`"
        />
      </div>
    </main>
  </div>
</template>

<style src="../styles/pages/projectdetail.scss" scoped></style>
