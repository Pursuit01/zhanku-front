import { createRouter, createWebHashHistory } from 'vue-router'
import { isMobileTerminal } from '@/utils/flexible'
import mobileRoutes from './modules/mobile-routes'
import pcRoutes from './modules/pc-routes'

const router = createRouter({
    history: createWebHashHistory(),
    routes: isMobileTerminal.value ? mobileRoutes : pcRoutes
})
export default router