import { createApp } from 'vue'
import App from './App.vue'
//library for event bus implementation (send data between components)
import mitt from 'mitt'

// createApp(App).mount('#app')

const emitter = mitt()
const app = createApp(App)

app.config.globalProperties.emitter = emitter
app.mount('#app')