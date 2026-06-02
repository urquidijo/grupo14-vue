<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import axios from 'axios'
import { useFetch } from '@vueuse/core'

// --- PARTE 1: Fetch Nativo ---
const randomDogImage = ref<string>('')
const isLoadingRandom = ref<boolean>(false)

async function fetchRandomDog() {
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

// Cargar un perrito al iniciar
onMounted(() => {
  fetchRandomDog()
})

// --- PARTE 2: Axios ---
const breedsList = ref<string[]>([])
const selectedBreed = ref<string>('')
const isLoadingBreeds = ref<boolean>(false)

async function fetchBreeds() {
  isLoadingBreeds.value = true
  try {
    const response = await axios.get('https://dog.ceo/api/breeds/list/all')
    // Las razas vienen como claves de un objeto
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
// Para hacer la URL reactiva
const breedUrl = ref<string>('')

// Cuando cambie la raza seleccionada, actualizamos la URL
watch(selectedBreed, (newBreed) => {
  if (newBreed) {
    breedUrl.value = `https://dog.ceo/api/breed/${newBreed}/images`
  }
}, { immediate: true })

// useFetch es reactivo: data, isFetching, error se actualizan solos
const { data: breedImagesData, isFetching: isFetchingImages } = useFetch(breedUrl, { refetch: true }).json()

</script>

<template>
  <section class="page-header">
    <span class="badge">Consumo de APIs</span>
    <h1>Dog API 🐶</h1>
    <p>
      Descubre diferentes formas de conectar tu aplicación Vue.js con servidores y servicios externos.
    </p>
  </section>

  <!-- Parte 1: Fetch -->
  <section class="demo-layout">
    <article class="demo-card">
      <h2>1. API Fetch Nativa</h2>
      <p>Usamos la función integrada en el navegador para traer una foto aleatoria.</p>
      
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
      <div class="code-box" v-pre>
        <code>const res = await fetch('url')</code>
        <code>const data = await res.json()</code>
      </div>
      <p>El código usa async/await para manejar la promesa devuelta por `fetch`.</p>
    </article>
  </section>

  <hr class="divider" />

  <!-- Parte 2: Axios -->
  <section class="demo-layout">
    <article class="demo-card">
      <h2>2. Axios</h2>
      <p>Usamos Axios para obtener la lista de todas las razas de perros. Selecciona una:</p>
      
      <div v-if="isLoadingBreeds">Cargando razas...</div>
      <select v-else v-model="selectedBreed" class="custom-select">
        <option v-for="breed in breedsList" :key="breed" :value="breed">
          {{ breed }}
        </option>
      </select>
    </article>

    <article class="explanation-card">
      <h2>Axios es un estándar</h2>
      <div class="code-box" v-pre>
        <code>import axios from 'axios'</code>
        <code>const res = await axios.get('url')</code>
      </div>
      <p>Axios automáticamente transforma la respuesta a JSON, lo que ahorra un paso en comparación con `fetch`.</p>
    </article>
  </section>

  <hr class="divider" />

  <!-- Parte 3: VueUse -->
  <section class="demo-layout">
    <article class="demo-card">
      <h2>3. VueUse (useFetch)</h2>
      <p>Muestra las imágenes de la raza seleccionada arriba: <strong>{{ selectedBreed }}</strong></p>
      
      <div v-if="isFetchingImages">Cargando galería...</div>
      
      <div v-else-if="breedImagesData && breedImagesData.message" class="gallery-grid">
        <!-- Mostramos solo las primeras 6 imágenes para no saturar -->
        <div v-for="(img, index) in breedImagesData.message.slice(0, 6)" :key="index" class="gallery-item">
          <img :src="img" alt="Perro de la raza seleccionada" />
        </div>
      </div>
    </article>

    <article class="explanation-card">
      <h2>Reactividad pura</h2>
      <div class="code-box" v-pre>
        <code>import { useFetch } from '@vueuse/core'</code>
        <code>const url = ref('...')</code>
        <code>const { data, isFetching } = useFetch(url).json()</code>
      </div>
      <p>`useFetch` reacciona a los cambios en la URL, maneja su propio estado de carga y parsea el JSON. ¡Es magia!</p>
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
