import './css/normalize.css'
import './css/theme.css'
import './css/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from '@app/router'
import App from './App.vue'
const pinia = createPinia()
export default createApp(App).use(pinia).use(router)
