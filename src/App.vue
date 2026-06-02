<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="navbar">
    <div class="brand">
      <span class="logo">V</span>
      <div>
        <strong>Vue.js</strong>
        <small>Grupo 14 - Fedora Linux</small>
      </div>
    </div>

    <nav>
      <RouterLink to="/">Inicio</RouterLink>
      <RouterLink to="/reactividad">Reactividad</RouterLink>
      <RouterLink to="/directivas">Directivas</RouterLink>
      <RouterLink to="/router-pinia">Router y Pinia</RouterLink>
      <RouterLink to="/consumo-api">Consumo de APIs</RouterLink>
    </nav>
  </header>

  <main class="container">
    <RouterView />
  </main>
</template>
