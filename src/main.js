import { createApp } from 'vue'
import App from './App.vue'
import './styles/index.scss'
import { useREM } from '@/utils/flexible'
import mLibs from './libs'
import router from './router'
// 注册svg-icons
import 'virtual:svg-icons-register'

useREM()
createApp(App).use(router).use(mLibs).mount('#app')
