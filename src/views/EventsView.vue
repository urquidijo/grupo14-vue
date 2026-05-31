<script setup lang="ts">
import { ref } from 'vue'

const mensaje = ref<string>('Escribe un texto y envía el formulario.')
const totalEnvios = ref<number>(0)
const textoDigitado = ref<string>('')

function actualizarTexto(event: Event): void {
  const input = event.target as HTMLInputElement
  textoDigitado.value = input.value
  mensaje.value = 'El usuario está escribiendo...'
}

function enviarFormulario(): void {
  if (textoDigitado.value.trim() === '') {
    mensaje.value = 'Primero debes escribir algo antes de enviar.'
    return
  }

  totalEnvios.value++
  mensaje.value = `Texto enviado correctamente: ${textoDigitado.value}`
}

function limpiar(): void {
  totalEnvios.value = 0
  mensaje.value = 'Escribe un texto y envía el formulario.'
  textoDigitado.value = ''
}
</script>

<template>
  <section class="page-header">
    <span class="badge">Característica 5</span>
    <h1>Eventos</h1>
    <p>
      Vue permite responder a acciones del usuario, como escribir en un input,
      enviar formularios o interactuar con elementos de la interfaz.
    </p>
  </section>

  <section class="demo-layout">
    <article class="demo-card">
      <h2>Ejemplo práctico</h2>

      <form class="form-inline" @submit.prevent="enviarFormulario">
        <input
          :value="textoDigitado"
          @input="actualizarTexto"
          placeholder="Escribe un mensaje..."
        />

        <button type="submit">Enviar</button>
      </form>

      <button class="muted" @dblclick="limpiar">
        Limpiar con doble clic
      </button>

      <p class="result">{{ mensaje }}</p>
      <p>Total de envíos: {{ totalEnvios }}</p>

      <p class="preview">
        Texto digitado: {{ textoDigitado || 'Sin texto' }}
      </p>
    </article>

    <article class="explanation-card">
      <h2>¿Qué demuestra?</h2>
      <p>
        Este ejemplo muestra cómo Vue puede escuchar eventos reales del navegador.
        El evento @input se ejecuta cada vez que el usuario escribe en el campo,
        @submit.prevent se ejecuta cuando se envía el formulario y @dblclick se ejecuta
        cuando el usuario hace doble clic sobre el botón de limpiar.
      </p>

      <div class="code-box" v-pre>
        <code>const textoDigitado = ref&lt;string&gt;('')</code>
        <code>const mensaje = ref&lt;string&gt;('Escribe un texto...')</code>
        <code>const totalEnvios = ref&lt;number&gt;(0)</code>

        <code>&lt;form @submit.prevent="enviarFormulario"&gt;</code>
        <code>&lt;input :value="textoDigitado" @input="actualizarTexto" /&gt;</code>
        <code>&lt;button type="submit"&gt;Enviar&lt;/button&gt;</code>
        <code>&lt;/form&gt;</code>

        <code>&lt;button @dblclick="limpiar"&gt;Limpiar con doble clic&lt;/button&gt;</code>

        <code>function actualizarTexto(event: Event) { ... }</code>
        <code>function enviarFormulario() { totalEnvios.value++ }</code>

        <code>&lt;p&gt;{{ mensaje }}&lt;/p&gt;</code>
        <code>&lt;p&gt;Texto digitado: {{ textoDigitado }}&lt;/p&gt;</code>
      </div>
    </article>
  </section>
</template>