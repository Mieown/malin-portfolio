<template>
  <div>
    <nav style="display: flex; gap: 1rem; padding: 1rem 0">
      <router-link to="/">Home</router-link>
      <router-link to="/projects">Projects</router-link>
    </nav>

    <router-view />
  </div>
</template>
