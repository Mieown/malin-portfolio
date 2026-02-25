<script setup>
import NavBar from "./components/NavBar.vue";
</script>

<template>
  <NavBar />

  <RouterView v-slot="{ Component, route }">
    <Transition name="page" mode="out-in" appear>
      <div class="pageWrap" :key="route.name + '-' + (route.params.slug || '')">
        <component :is="Component" />
      </div>
    </Transition>
  </RouterView>
</template>
