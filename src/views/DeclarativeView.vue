<script setup lang="ts">
import { computed, ref } from 'vue'

const nombre = ref<string>('Estudiante')
const tecnologia = ref<string>('Vue.js')

const mensaje = computed<string>(() => {
  return `Hola ${nombre.value}, estás aprendiendo ${tecnologia.value}`
})
</script>

<template>
  <section class="page-header">
    <span class="badge">Característica 2</span>
    <h1>Renderizado declarativo</h1>
    <p>
      Vue permite declarar qué datos se mostrarán en la interfaz usando una sintaxis clara.
    </p>
  </section>

  <section class="demo-layout">
    <article class="demo-card">
      <h2>Ejemplo práctico</h2>

      <label>Nombre</label>
      <input v-model="nombre" placeholder="Escribe tu nombre" />

      <label>Tecnología</label>
      <input v-model="tecnologia" placeholder="Ej: Vue.js" />

      <div class="preview">
        <strong>{{ mensaje }}</strong>
      </div>
    </article>

    <article class="explanation-card">
      <h2>¿Qué demuestra?</h2>
      <p>
        En lugar de modificar el HTML manualmente, Vue permite declarar los datos en la plantilla.
        Cuando los datos cambian, el mensaje se vuelve a renderizar automáticamente.
      </p>

      <div class="code-box" v-pre>
        <code>const nombre = ref&lt;string&gt;('Estudiante')</code>
        <code>const tecnologia = ref&lt;string&gt;('Vue.js')</code>
        <code>const mensaje = computed(() =&gt; `Hola ${nombre.value}, estás aprendiendo ${tecnologia.value}`)</code>
        <code>&lt;input v-model="nombre" /&gt;</code>
        <code>&lt;input v-model="tecnologia" /&gt;</code>
        <code>&lt;strong&gt;{{ mensaje }}&lt;/strong&gt;</code>
      </div>
    </article>
  </section>
</template>
