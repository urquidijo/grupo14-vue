<script setup lang="ts">
import { ref } from 'vue'

const mensaje = ref<string>('Presiona un botón para generar un mensaje.')
const totalClicks = ref<number>(0)
const textoDigitado = ref<string>('')

function saludar(): void {
  totalClicks.value++
  mensaje.value = 'Hola, este mensaje fue generado por un evento @click.'
}

function limpiar(): void {
  totalClicks.value = 0
  mensaje.value = 'Presiona un botón para generar un mensaje.'
  textoDigitado.value = ''
}
</script>

<template>
  <section class="page-header">
    <span class="badge">Característica 5</span>
    <h1>Eventos</h1>
    <p>
      Vue permite responder a acciones del usuario, como clics, escritura o envío de formularios.
    </p>
  </section>

  <section class="demo-layout">
    <article class="demo-card">
      <h2>Ejemplo práctico</h2>

      <div class="button-group">
        <button @click="saludar">Mostrar mensaje</button>
        <button class="muted" @click="limpiar">Limpiar</button>
      </div>

      <p class="result">{{ mensaje }}</p>
      <p>Total de clics: {{ totalClicks }}</p>

      <label>Evento al escribir</label>
      <input v-model="textoDigitado" placeholder="Escribe algo..." />

      <p class="preview">Texto digitado: {{ textoDigitado || 'Sin texto' }}</p>
    </article>

    <article class="explanation-card">
      <h2>¿Qué demuestra?</h2>
      <p>
        Los eventos permiten ejecutar métodos cuando el usuario interactúa con la interfaz.
        En Vue se pueden usar eventos como @click, @input y @submit.
      </p>

      <div class="code-box">
        <code>@click="saludar"</code>
        <code>function saludar(): void</code>
        <code>v-model="textoDigitado"</code>
      </div>
    </article>
  </section>
</template>
