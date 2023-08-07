import { createApp } from 'vue'
// import './style.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import App from './App.vue'
import router from './routes/index'

const app = createApp(App)
app.use(router)
app.mount('#app')
