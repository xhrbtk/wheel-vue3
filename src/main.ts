
import "./lib/wheel.scss"
import './index.scss'
import 'github-markdown-css'
import { createApp } from 'vue'
import App from './App.vue'
import Markdown from './components/Markdown.vue'
import router from './router'

import "./lib/iconfont.js"


const app = createApp(App)
app.use(router)
app.mount('#app')
app.component("Markdown", Markdown)
