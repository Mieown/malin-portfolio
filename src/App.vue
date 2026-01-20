<script setup>
import NavBar from "./components/NavBar.vue";
</script>

<template>
  <!-- Global header -->
  <NavBar />

  <!-- Här renderas sidorna (Home, About, Contact, ProjectDetail) -->
  <router-view />
</template>
