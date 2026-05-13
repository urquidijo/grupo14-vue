import { defineStore } from 'pinia'

export const useDemoStore = defineStore('demo', {
  state: () => ({
    contadorGlobal: 0,
    framework: 'Vue.js',
    tecnologias: ['Vue 3', 'TypeScript', 'Vue Router', 'Pinia']
  }),

  getters: {
    totalTecnologias: (state) => state.tecnologias.length
  },

  actions: {
    aumentarContador() {
      this.contadorGlobal++
    },

    reiniciarContador() {
      this.contadorGlobal = 0
    },

    agregarTecnologia(nombre: string) {
      if (nombre.trim() !== '') {
        this.tecnologias.push(nombre)
      }
    }
  }
})
