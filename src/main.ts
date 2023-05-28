import { createApp } from 'vue'
import './style.css'
import router from "./router"
import App from './App.vue'
import DUI from './components/index'

createApp(App).use(DUI).use(router).mount('#app')
