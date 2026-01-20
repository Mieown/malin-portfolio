<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import projects from "../data/projects.js"; // ändra sökväg om din fil ligger annorlunda

const route = useRoute();

const crumbs = computed(() => {
  // Bygg crumbs från matchade routes
  const matched = route.matched
    .filter((r) => r.meta?.breadcrumb)
    .map((r) => ({
      label: r.meta.breadcrumb,
      to: r.path.includes(":slug") ? `/projects/${route.params.slug}` : r.path,
    }));

  // Om vi är på ett projekt: byt "Project" till projekttiteln
  if (route.name === "ProjectDetail" || route.path.startsWith("/projects/")) {
    const project = projects.find((p) => p.slug === route.params.slug);
    if (project) {
      matched[matched.length - 1].label = project.title;
    }
  }

  // Se till att Home alltid finns först
  if (!matched.length || matched[0].to !== "/") {
    matched.unshift({ label: "Home", to: "/" });
  }

  return matched;
});
</script>

<template>
  <nav class="breadcrumbs" aria-label="Breadcrumb">
    <ol class="breadcrumbs__list">
      <li v-for="(c, i) in crumbs" :key="c.to" class="breadcrumbs__item">
        <router-link
          v-if="i < crumbs.length - 1"
          :to="c.to"
          class="breadcrumbs__link"
        >
          {{ c.label }}
        </router-link>
        <span v-else class="breadcrumbs__current">{{ c.label }}</span>
        <span v-if="i < crumbs.length - 1" class="breadcrumbs__sep">/</span>
      </li>
    </ol>
  </nav>
</template>
