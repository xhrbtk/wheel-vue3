
import "./lib/wheel.scss"
import './index.scss'
import 'github-markdown-css'
import { createApp } from 'vue'
import App from './App.vue'

import router from './router'

import "../src/assets/iconfont/iconfont.js"


const app = createApp(App)
app.use(router)
app.mount('#app')
