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
      <FeatureCard v-for="item in ejemplos" :key="item.titulo" :titulo="item.titulo" :descripcion="item.descripcion"
        :ruta="item.ruta" :etiqueta="item.etiqueta" />
    </div>
  </section>

  <section class="explanation-card full">
    <h2>¿Qué demuestra?</h2>
    <p>
      En Vue, un componente puede recibir datos mediante propiedades y mostrarse varias veces.
      En este ejemplo, la vista principal recorre una lista de datos y envía esa información
      al componente FeatureCard.vue mediante props.
    </p>

    <h3>Vista principal: ComponentesView.vue</h3>
    <div class="code-box" v-pre>
      <code>import FeatureCard from '../components/FeatureCard.vue'</code>

      <code>const ejemplos = [{ titulo: 'Tarjeta reutilizable', descripcion: '...', ruta: '/componentes', etiqueta: 'Componente' }]</code>

      <code>&lt;FeatureCard</code>
      <code>  v-for="item in ejemplos"</code>
      <code>  :key="item.titulo"</code>
      <code>  :titulo="item.titulo"</code>
      <code>  :descripcion="item.descripcion"</code>
      <code>  :ruta="item.ruta"</code>
      <code>  :etiqueta="item.etiqueta"</code>
      <code>/&gt;</code>
    </div>

    <h3>Componente reutilizable: FeatureCard.vue</h3>
    <div class="code-box" v-pre>
      <code>&lt;script setup lang="ts"&gt;</code>
      <code>interface Props {</code>
      <code>  titulo: string</code>
      <code>  descripcion: string</code>
      <code>  ruta: string</code>
      <code>  etiqueta: string</code>
      <code>}</code>

      <code>defineProps&lt;Props&gt;()</code>
      <code>&lt;/script&gt;</code>

      <code>&lt;template&gt;</code>
      <code>  &lt;RouterLink :to="ruta" class="feature-card"&gt;</code>
      <code>    &lt;span class="feature-tag"&gt;{{ etiqueta }}&lt;/span&gt;</code>
      <code>    &lt;h3&gt;{{ titulo }}&lt;/h3&gt;</code>
      <code>    &lt;p&gt;{{ descripcion }}&lt;/p&gt;</code>
      <code>    &lt;strong&gt;Ver ejemplo →&lt;/strong&gt;</code>
      <code>  &lt;/RouterLink&gt;</code>
      <code>&lt;/template&gt;</code>
    </div>
  </section>
</template>
