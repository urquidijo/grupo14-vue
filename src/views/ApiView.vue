<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import axios from 'axios'
import { useFetch } from '@vueuse/core'

// --- PARTE 1: Fetch Nativo ---
const randomDogImage = ref<string>('')
const isLoadingRandom = ref<boolean>(false)

async function fetchRandomDog(): Promise<void> {
  isLoadingRandom.value = true

  try {
    const response = await fetch('https://dog.ceo/api/breeds/image/random')
    const data = await response.json()
    randomDogImage.value = data.message
  } catch (error) {
    console.error('Error fetching random dog:', error)
  } finally {
    isLoadingRandom.value = false
  }
}

onMounted(() => {
  fetchRandomDog()
})

// --- PARTE 2: Axios ---
const breedsList = ref<string[]>([])
const selectedBreed = ref<string>('')
const isLoadingBreeds = ref<boolean>(false)

async function fetchBreeds(): Promise<void> {
  isLoadingBreeds.value = true

  try {
    const response = await axios.get('https://dog.ceo/api/breeds/list/all')
    breedsList.value = Object.keys(response.data.message)

    if (breedsList.value.length > 0) {
      selectedBreed.value = breedsList.value[0] ?? ''
    }
  } catch (error) {
    console.error('Error fetching breeds:', error)
  } finally {
    isLoadingBreeds.value = false
  }
}

onMounted(() => {
  fetchBreeds()
})

// --- PARTE 3: VueUse ---
const breedUrl = ref<string>('')

watch(
  selectedBreed,
  (newBreed) => {
    if (newBreed) {
      breedUrl.value = `https://dog.ceo/api/breed/${newBreed}/images`
    }
  },
  { immediate: true }
)

const { data: breedImagesData, isFetching: isFetchingImages } = useFetch(
  breedUrl,
  { refetch: true }
).json()
</script>

<template>
  <section class="page-header">
    <span class="badge">Consumo de APIs</span>
    <h1>Dog API 🐶</h1>
    <p>
      Descubre diferentes formas de conectar tu aplicación Vue.js con servidores
      y servicios externos.
    </p>
  </section>

  <!-- Parte 1: Fetch -->
  <section class="demo-layout">
    <article class="demo-card">
      <h2>1. API Fetch Nativa</h2>
      <p>
        Usamos fetch para obtener una imagen aleatoria desde una API.
      </p>

      <div class="button-group">
        <button @click="fetchRandomDog" :disabled="isLoadingRandom">
          {{ isLoadingRandom ? 'Cargando...' : 'Otro perrito' }}
        </button>
      </div>

      <div v-if="randomDogImage" class="image-container">
        <img :src="randomDogImage" alt="Un perro aleatorio" />
      </div>
    </article>

    <article class="explanation-card">
      <h2>¿Cómo funciona?</h2>
      <p>
        Se hace una petición a la API y la URL recibida se muestra como imagen.
      </p>

      <div class="code-box" v-pre>
        <code>API: https://dog.ceo/api/breeds/image/random</code>
        <code>const response = await fetch('https://dog.ceo/api/breeds/image/random')</code>
        <code>const data = await response.json()</code>
        <code>randomDogImage.value = data.message</code>
        <code>&lt;img :src="randomDogImage" /&gt;</code>
      </div>
    </article>
  </section>

  <hr class="divider" />

  <!-- Parte 2: Axios -->
  <section class="demo-layout">
    <article class="demo-card">
      <h2>2. Axios</h2>
      <p>
        Usamos Axios para obtener la lista de razas de perros.
      </p>

      <div v-if="isLoadingBreeds">
        Cargando razas...
      </div>

      <select v-else v-model="selectedBreed" class="custom-select">
        <option v-for="breed in breedsList" :key="breed" :value="breed">
          {{ breed }}
        </option>
      </select>

      <p v-if="selectedBreed" class="preview">
        Raza seleccionada: {{ selectedBreed }}
      </p>
    </article>

    <article class="explanation-card">
      <h2>Axios</h2>
      <p>
        Axios realiza la petición y devuelve los datos listos para trabajar.
      </p>

      <div class="code-box" v-pre>
        <code>API: https://dog.ceo/api/breeds/list/all</code>
        <code>import axios from 'axios'</code>
        <code>const response = await axios.get('https://dog.ceo/api/breeds/list/all')</code>
        <code>breedsList.value = Object.keys(response.data.message)</code>
        <code>&lt;select v-model="selectedBreed"&gt;</code>
        <code>  &lt;option v-for="breed in breedsList" :key="breed" :value="breed"&gt;</code>
        <code>    {{ breed }}</code>
        <code>  &lt;/option&gt;</code>
        <code>&lt;/select&gt;</code>
      </div>
    </article>
  </section>

  <hr class="divider" />

  <!-- Parte 3: VueUse -->
  <section class="demo-layout">
    <article class="demo-card">
      <h2>3. VueUse useFetch</h2>
      <p>
        Muestra imágenes de la raza seleccionada:
        <strong>{{ selectedBreed }}</strong>
      </p>

      <div v-if="isFetchingImages">
        Cargando galería...
      </div>

      <div v-else-if="breedImagesData && breedImagesData.message" class="gallery-grid">
        <div v-for="(img, index) in breedImagesData.message.slice(0, 6)" :key="index" class="gallery-item">
          <img :src="img" alt="Perro de la raza seleccionada" />
        </div>
      </div>
    </article>

    <article class="explanation-card">
      <h2>VueUse</h2>
      <p>
        useFetch consume la API usando una URL reactiva.
      </p>

      <div class="code-box" v-pre>
        <code>API: https://dog.ceo/api/breed/{raza}/images</code>

        <code>const selectedBreed = ref&lt;string&gt;('')</code>
        <code>const breedUrl = ref&lt;string&gt;('')</code>

        <code>watch(selectedBreed, (newBreed) =&gt; {</code>
        <code>  breedUrl.value = `https://dog.ceo/api/breed/${newBreed}/images`</code>
        <code>}, { immediate: true })</code>

        <code>const { data, isFetching } = useFetch(breedUrl, { refetch: true }).json()</code>

        <code>&lt;p&gt;Raza seleccionada: {{ selectedBreed }}&lt;/p&gt;</code>
        <code>&lt;div v-if="isFetching"&gt;Cargando galería...&lt;/div&gt;</code>
        <code>&lt;img v-for="img in data.message" :src="img" /&gt;</code>
      </div>
    </article>
  </section>
</template>

<style scoped>
.image-container {
  margin-top: 1rem;
  border-radius: 8px;
  overflow: hidden;
  max-width: 100%;
}

.image-container img {
  width: 100%;
  height: auto;
  border-radius: 8px;
  object-fit: cover;
  max-height: 300px;
}

.custom-select {
  width: 100%;
  padding: 0.8rem;
  border-radius: 6px;
  border: 1px solid var(--border);
  background-color: var(--surface);
  color: var(--text);
  font-size: 1rem;
  margin-top: 1rem;
  cursor: pointer;
}

.preview {
  margin-top: 1rem;
  font-weight: 600;
}

.divider {
  margin: 3rem 0;
  border: 0;
  border-top: 1px dashed var(--border);
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
}

.gallery-item img {
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
  border-radius: 8px;
  border: 1px solid var(--border);
}
</style>