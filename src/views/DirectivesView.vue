<script setup lang="ts">
import { ref } from 'vue'

const nuevaTecnologia = ref<string>('')
const tecnologias = ref<string[]>(['Vue 3', 'TypeScript', 'Router'])

function agregarTecnologia(): void {
  if (nuevaTecnologia.value.trim() === '') return
  tecnologias.value.push(nuevaTecnologia.value)
  nuevaTecnologia.value = ''
}

function eliminarTecnologia(index: number): void {
  tecnologias.value.splice(index, 1)
}
</script>

<template>
  <section class="page-header">
    <span class="badge">Característica 3</span>
    <h1>Directivas</h1>
    <p>
      Las directivas son instrucciones especiales que Vue usa dentro del HTML para agregar
      comportamiento dinámico.
    </p>
  </section>

  <section class="demo-layout">
    <article class="demo-card">
      <h2>Ejemplo con v-model, v-for y v-if</h2>

      <div class="form-inline">
        <input v-model="nuevaTecnologia" placeholder="Nueva tecnología" />
        <button @click="agregarTecnologia">Agregar</button>
      </div>

      <ul v-if="tecnologias.length > 0" class="list">
        <li v-for="(tecnologia, index) in tecnologias" :key="tecnologia">
          <span>{{ tecnologia }}</span>
          <button class="danger" @click="eliminarTecnologia(index)">Eliminar</button>
        </li>
      </ul>

      <p v-else class="empty">No hay tecnologías registradas.</p>
    </article>

    <article class="explanation-card">
      <h2>¿Qué demuestra?</h2>
      <p>
        Este ejemplo utiliza varias directivas importantes: v-model conecta el input con los datos,
        v-for recorre una lista y v-if muestra contenido según una condición.
      </p>

      <div class="code-box">
        <code>v-model="nuevaTecnologia"</code>
        <code>v-for="tecnologia in tecnologias"</code>
        <code>v-if="tecnologias.length &gt; 0"</code>
      </div>
    </article>
  </section>
</template>
