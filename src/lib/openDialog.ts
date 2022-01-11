import { createApp, h } from 'vue'
import Dialog from './Dialog.vue'
export const openDialog = (options) => {
    const { title, content, ok, cancel } = options
    const div = document.createElement('div') // 创建临时div
    document.body.appendChild(div) // 把div 放到body里面
    // createApp(Dialog).mount(div) // 把dialog 挂载到div里面
    document.body.appendChild(div)
    const close = () => {
        app.unmount(div)
        div.remove()
    }
    const app = createApp({
        render(){
            return h(Dialog, 
            { 
                visible: true,
                'onUpdate:visible': newVisible => {
                    if(newVisible == false){
                        close()
                    }
                },
                ok,
                cancel
            },
            { 
                title: title,
                content: content
            })
        }
    })
    app.mount(div)
}