<script setup lang="ts">
interface Props {
  titulo: string
  descripcion: string
  ruta: string
  etiqueta: string
}

defineProps<Props>()
</script>

<template>
  <RouterLink :to="ruta" class="feature-card">
    <span class="feature-tag">{{ etiqueta }}</span>
    <h3>{{ titulo }}</h3>
    <p>{{ descripcion }}</p>
    <strong>Ver ejemplo →</strong>
  </RouterLink>
</template>
