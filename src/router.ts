
import { createWebHashHistory, createRouter }  from 'vue-router'
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import Switchdemo from './components/Switchdemo.vue'
import Buttondemo from './components/Buttondemo.vue'
import Dialogdemo from './components/Dialogdemo.vue'
import Tabsdemo from './components/Tabsdemo.vue'

import { h } from 'vue'
import Markdown from './components/Markdown.vue'
const md = filename => h(Markdown, { path: `../markdown/${filename}.md`, key: filename })
const history = createWebHashHistory()

const router = createRouter({
    history,
    routes: [
        { path: '/',  component: Home },
        { 
            path: '/doc', component: Doc,
            children: [
                {path: "", redirect: '/doc/intro' },
                { path: "intro", component: md('intro') },
                { path: "get-started", component: md('get-started') },
                { path: "install", component: md('install') },
                { path: 'switch', component: Switchdemo },
                { path: 'button', component: Buttondemo },
                { path: 'dialog', component: Dialogdemo },
                { path: 'tabs', component: Tabsdemo },
            ]
        }
    ]
})
router.afterEach(() => {
    console.log('路由切换了')
})

export default router
