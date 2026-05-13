<script setup lang="ts">
import { ref } from 'vue'

const contador = ref<number>(0)
const estado = ref<string>('Valor inicial')

function aumentar(): void {
  contador.value++
  estado.value = 'El valor aumentó'
}

function disminuir(): void {
  contador.value--
  estado.value = 'El valor disminuyó'
}

function reiniciar(): void {
  contador.value = 0
  estado.value = 'Valor inicial'
}
</script>

<template>
  <section class="page-header">
    <span class="badge">Característica 1</span>
    <h1>Reactividad</h1>
    <p>
      La reactividad permite que Vue actualice automáticamente la interfaz cuando cambia un dato.
    </p>
  </section>

  <section class="demo-layout">
    <article class="demo-card">
      <h2>Ejemplo práctico</h2>
      <p class="counter">{{ contador }}</p>

      <div class="button-group">
        <button @click="aumentar">Aumentar</button>
        <button @click="disminuir">Disminuir</button>
        <button class="muted" @click="reiniciar">Reiniciar</button>
      </div>

      <p class="result">Estado: {{ estado }}</p>
    </article>

    <article class="explanation-card">
      <h2>¿Qué demuestra?</h2>
      <p>
        El número mostrado en pantalla está conectado con una variable reactiva. Cuando el usuario
        presiona un botón, el dato cambia y Vue actualiza la vista automáticamente.
      </p>

      <div class="code-box">
        <code>const contador = ref&lt;number&gt;(0)</code>
        <code>const estado = ref&lt;string&gt;('Valor inicial')</code>
        <code>@click="aumentar"</code>
        <code>@click="disminuir"</code>
      </div>
    </article>
  </section>
</template>
