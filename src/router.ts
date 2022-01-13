
import { createWebHashHistory, createRouter }  from 'vue-router'
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import Switchdemo from './components/Switchdemo.vue'
import Buttondemo from './components/Buttondemo.vue'
import Dialogdemo from './components/Dialogdemo.vue'
import Tabsdemo from './components/Tabsdemo.vue'
import Docdemo from './components/Docdemo.vue'
import Intro from './views/Intro.vue';
import GetStarted from './views/GetStarted.vue'
import Install from './views/Install.vue'

const history = createWebHashHistory()
const router = createRouter({
    history,
    routes: [
        { path: '/',  component: Home },
        { 
            path: '/doc', component: Doc,
            children: [
                { path: '', component: Docdemo },
                { path: "intro", component: Intro },
                { path: "get-started", component: GetStarted },
                { path: "install", component: Install },
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
