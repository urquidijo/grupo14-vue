<script setup lang="ts">
import { ref } from 'vue'
import { useDemoStore } from '../stores/demoStore'

const store = useDemoStore()
const nuevaTecnologia = ref<string>('')

function agregar(): void {
  store.agregarTecnologia(nuevaTecnologia.value)
  nuevaTecnologia.value = ''
}
</script>

<template>
  <section class="page-header">
    <span class="badge">Característica 6</span>
    <h1>Vue Router y Pinia</h1>
    <p>
      Vue Router permite navegar entre pantallas y Pinia permite manejar datos globales dentro de
      la aplicación.
    </p>
  </section>

  <section class="demo-layout">
    <article class="demo-card">
      <h2>Ejemplo con Pinia</h2>

      <p class="counter">{{ store.contadorGlobal }}</p>

      <div class="button-group">
        <button @click="store.aumentarContador">Aumentar contador global</button>
        <button class="muted" @click="store.reiniciarContador">Reiniciar</button>
      </div>

      <h3>Tecnologías registradas</h3>

      <div class="form-inline">
        <input v-model="nuevaTecnologia" placeholder="Ej: Vite" />
        <button @click="agregar">Agregar</button>
      </div>

      <ul class="list">
        <li v-for="tecnologia in store.tecnologias" :key="tecnologia">
          <span>{{ tecnologia }}</span>
        </li>
      </ul>

      <p>Total: {{ store.totalTecnologias }}</p>
    </article>

    <article class="explanation-card">
      <h2>¿Qué demuestra?</h2>
      <p>
        La navegación entre las diferentes pantallas de esta aplicación usa Vue Router.
        El contador y la lista de tecnologías se manejan desde un store global de Pinia.
      </p>

      <div class="code-box">
        <code>createRouter()</code>
        <code>defineStore('demo')</code>
        <code>store.contadorGlobal</code>
      </div>

      <div class="router-demo">
        <RouterLink to="/">Ir al inicio</RouterLink>
        <RouterLink to="/reactividad">Ir a Reactividad</RouterLink>
        <RouterLink to="/directivas">Ir a Directivas</RouterLink>
      </div>
    </article>
  </section>
</template>
