import { defineAsyncComponent } from 'vue'
export default {
    install(app) {
        // 1.获取当前路径下所有文件夹的index.vue文件
        const components = import.meta.glob('./*/index.vue')
        console.log(Object.entries(components));
        // 2.遍历获取到的组件模块
        for (const [fullPath, fn] of Object.entries(components)) {
            const name = 'm-' + fullPath.split('/')[1]
            // 3.利用 app.component 进行注册
            app.component(name, defineAsyncComponent(fn))
        }
    }
}