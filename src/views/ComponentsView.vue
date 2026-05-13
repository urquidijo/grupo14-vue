<script setup lang="ts">
import FeatureCard from '../components/FeatureCard.vue'

const ejemplos = [
  {
    titulo: 'Tarjeta reutilizable',
    descripcion: 'Este mismo componente se usa varias veces cambiando sus propiedades.',
    ruta: '/componentes',
    etiqueta: 'Componente'
  },
  {
    titulo: 'Menos código repetido',
    descripcion: 'Los componentes permiten reutilizar estructura, estilos y comportamiento.',
    ruta: '/componentes',
    etiqueta: 'Reutilización'
  },
  {
    titulo: 'Mejor organización',
    descripcion: 'Cada parte de la interfaz puede separarse en archivos independientes.',
    ruta: '/componentes',
    etiqueta: 'Orden'
  }
]
</script>

<template>
  <section class="page-header">
    <span class="badge">Característica 4</span>
    <h1>Componentes</h1>
    <p>
      Los componentes permiten dividir una interfaz en partes pequeñas, reutilizables y fáciles de
      mantener.
    </p>
  </section>

  <section class="demo-card full">
    <h2>Ejemplo práctico</h2>
    <p>
      Las siguientes tarjetas usan el mismo componente llamado <strong>FeatureCard.vue</strong>,
      pero muestran información diferente.
    </p>

    <div class="features-grid small">
      <FeatureCard
        v-for="item in ejemplos"
        :key="item.titulo"
        :titulo="item.titulo"
        :descripcion="item.descripcion"
        :ruta="item.ruta"
        :etiqueta="item.etiqueta"
      />
    </div>
  </section>

  <section class="explanation-card full">
    <h2>¿Qué demuestra?</h2>
    <p>
      En Vue, un componente puede recibir datos mediante propiedades y mostrarse varias veces.
      Esto mejora la organización del proyecto y evita repetir código innecesario.
    </p>

    <div class="code-box">
      <code>&lt;FeatureCard titulo="..." descripcion="..." /&gt;</code>
      <code>defineProps&lt;Props&gt;()</code>
    </div>
  </section>
</template>
