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
        Este ejemplo demuestra dos herramientas importantes de Vue. Pinia permite guardar
        datos globales que pueden usarse en diferentes pantallas, como el contador y la lista
        de tecnologías. Vue Router permite navegar entre páginas usando enlaces internos
        sin recargar toda la aplicación.
      </p>

      <h3>Store global con Pinia: demoStore.ts</h3>
      <div class="code-box" v-pre>
        <code>export const useDemoStore = defineStore('demo', {</code>
        <code>  state: () =&gt; ({</code>
        <code>    contadorGlobal: 0,</code>
        <code>    tecnologias: ['Vue 3', 'TypeScript']</code>
        <code>  }),</code>

        <code>  actions: {</code>
        <code>    aumentarContador() { this.contadorGlobal++ }</code>
        <code>    reiniciarContador() { this.contadorGlobal = 0 }</code>
        <code>    agregarTecnologia(nombre) { this.tecnologias.push(nombre) }</code>
        <code>  }</code>
        <code>})</code>
      </div>

      <h3>Uso del store en la vista</h3>
      <div class="code-box" v-pre>
        <code>const store = useDemoStore()</code>
        <code>const nuevaTecnologia = ref&lt;string&gt;('')</code>

        <code>&lt;p&gt;{{ store.contadorGlobal }}&lt;/p&gt;</code>
        <code>&lt;button @click="store.aumentarContador"&gt;Aumentar&lt;/button&gt;</code>
        <code>&lt;button @click="store.reiniciarContador"&gt;Reiniciar&lt;/button&gt;</code>

        <code>&lt;input v-model="nuevaTecnologia" /&gt;</code>
        <code>&lt;button @click="agregar"&gt;Agregar&lt;/button&gt;</code>

        <code>&lt;li v-for="tecnologia in store.tecnologias" :key="tecnologia"&gt;</code>
        <code>  {{ tecnologia }}</code>
        <code>&lt;/li&gt;</code>

        <code>&lt;p&gt;Total: {{ store.totalTecnologias }}&lt;/p&gt;</code>
      </div>

      <h3>Navegación con Vue Router</h3>
      <div class="code-box" v-pre>
        <code>&lt;RouterLink to="/"&gt;Ir al inicio&lt;/RouterLink&gt;</code>
        <code>&lt;RouterLink to="/reactividad"&gt;Ir a Reactividad&lt;/RouterLink&gt;</code>
        <code>&lt;RouterLink to="/directivas"&gt;Ir a Directivas&lt;/RouterLink&gt;</code>
      </div>

      <div class="router-demo">
        <RouterLink to="/">Ir al inicio</RouterLink>
        <RouterLink to="/reactividad">Ir a Reactividad</RouterLink>
        <RouterLink to="/directivas">Ir a Directivas</RouterLink>
      </div>
    </article>
  </section>
</template>
