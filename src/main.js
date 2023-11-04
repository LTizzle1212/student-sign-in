import { createApp } from 'vue'
import { createPinia } from 'pinia'

import 'bootstrap/dist/css/bootstrap.min.css' // added this and line 3 or the bootstap syles from src
import 'bootstrap-icons/font/bootstrap-icons.json'

import './style.css'

import App from './App.vue'

//createApp(App).mount('#app')

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)

app.mount('#app')
