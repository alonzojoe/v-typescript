import { createApp } from 'vue'
import App from './App.vue'
import router from './routes/index'
<<<<<<< HEAD
import store from './store/index'
=======
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
>>>>>>> 76ccd643eda0df1b05a3312886981601762dbb32

const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')
