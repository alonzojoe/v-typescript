import { createApp } from 'vue'
import App from './App.vue'
import router from './routes/index'
import store from './store/index'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'

const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')