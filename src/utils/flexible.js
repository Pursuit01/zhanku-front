import { computed, ref } from 'vue'
import { PC_DEVICE_WIDTH } from '@/constants'
import { useWindowSize } from '@vueuse/core'

const { width } = useWindowSize()

/**
 * 判断当前设备是否为移动设备，判断依据屏幕宽度是否小于一个指定宽度（1280px）
 */
export const isMobileTerminal = computed(() => {
    return width.value < PC_DEVICE_WIDTH
})

/**
 * 动态指定 rem 基准值, 最大为 40px
 * 根据屏幕宽度进行计算，再赋值给html根标签，作为 fontsize 大小
 */
export const useREM = () => {
    // 定义最大的屏幕宽度
    const MAX_FONT_SIZE = 40
    // 监听 html 文档被解析完成的事件
    document.addEventListener('DOMContentLoaded', () => {
        // 获取html标签
        const html = document.querySelector('html')
        // 计算基准值
        let fontSize = Math.min(window.innerWidth / 10, MAX_FONT_SIZE)
        // 赋值
        html.style.fontSize = fontSize + 'px'
    })
}