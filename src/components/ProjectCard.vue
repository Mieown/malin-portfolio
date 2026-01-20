<script setup>
defineProps({ project: Object });
</script>

<template>
  <article class="project-card">
    <router-link :to="`/projects/${project.slug}`">
      <img
        :src="project.cover"
        :alt="project.alt"
        class="project-card__coverimg"
      />
      <h3>{{ project.title }}</h3>
      <p>{{ project.summary }}</p>
    </router-link>
    <ul v-if="project.tags?.length" class="tags">
      <li v-for="tag in project.tags" :key="tag" class="tag">{{ tag }}</li>
    </ul>
  </article>
</template>
