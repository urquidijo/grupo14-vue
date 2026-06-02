<script setup lang="ts">
import FeatureCard from '../components/FeatureCard.vue'

const caracteristicas = [
  {
    titulo: 'Reactividad',
    descripcion: 'La interfaz se actualiza automáticamente cuando cambian los datos.',
    ruta: '/reactividad',
    etiqueta: 'Datos dinámicos'
  },
  {
    titulo: 'Renderizado declarativo',
    descripcion: 'Vue permite mostrar datos en pantalla de forma clara usando plantillas.',
    ruta: '/renderizado-declarativo',
    etiqueta: 'Interpolación'
  },
  {
    titulo: 'Directivas',
    descripcion: 'Instrucciones como v-if, v-for y v-model agregan comportamiento dinámico.',
    ruta: '/directivas',
    etiqueta: 'v-if / v-for'
  },
  {
    titulo: 'Componentes',
    descripcion: 'Permiten dividir la interfaz en partes reutilizables y fáciles de mantener.',
    ruta: '/componentes',
    etiqueta: 'Reutilización'
  },
  {
    titulo: 'Eventos',
    descripcion: 'Vue responde a acciones del usuario como clics, escritura o envío de formularios.',
    ruta: '/eventos',
    etiqueta: '@click'
  },
  {
    titulo: 'Router y Pinia',
    descripcion: 'Vue Router permite navegar entre pantallas y Pinia maneja estado global.',
    ruta: '/router-pinia',
    etiqueta: 'Ecosistema Vue'
  },
  {
    titulo: 'Consumo de APIs',
    descripcion: 'Integración con servicios externos usando Fetch, Axios y VueUse.',
    ruta: '/consumo-api',
    etiqueta: 'Peticiones HTTP'
  }
]
</script>

<template>
  <section class="hero">
    <div class="hero-content">
      <span class="badge">Proyecto de exposición</span>
      <h1>Guía interactiva de Vue.js</h1>
      <p>
        Esta aplicación demuestra las características principales de Vue.js mediante ejemplos
        prácticos desarrollados en Fedora Linux con Vue 3, TypeScript, Vue Router y Pinia.
      </p>

      <div class="hero-actions">
        <RouterLink to="/reactividad" class="btn primary">Comenzar ejemplos</RouterLink>
        <RouterLink to="/router-pinia" class="btn secondary">Ver ecosistema</RouterLink>
      </div>
    </div>
  </section>

  <section class="intro-card">
    <h2>¿Qué es Vue.js?</h2>
    <p>
      Vue.js es un framework progresivo de JavaScript utilizado para construir interfaces web
      dinámicas e interactivas. Se caracteriza por su reactividad, renderizado declarativo,
      componentes reutilizables y facilidad para organizar aplicaciones frontend modernas.
    </p>
  </section>

  <section>
    <div class="section-title">
      <span>Características principales</span>
      <h2>Lo más importante de Vue.js</h2>
    </div>

    <div class="features-grid">
      <FeatureCard
        v-for="item in caracteristicas"
        :key="item.titulo"
        :titulo="item.titulo"
        :descripcion="item.descripcion"
        :ruta="item.ruta"
        :etiqueta="item.etiqueta"
      />
    </div>
  </section>
</template>
