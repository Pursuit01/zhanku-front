<template>
  <svg aria-hidden="true">
    <use :xlink:href="symbolId" :fill="color" :class="fillClass" />
  </svg>
</template>

<script setup>
import { computed } from 'vue'
const props = defineProps({
  // 显示svg
  name: {
    type: String,
    required: true
  },
  // svg的颜色
  color: {
    type: String
  },
  // tailwind中指定 svg 颜色的类名
  fillClass: {
    type: String
  }
})

// 真实显示的icon图标 (拼接 #icon-)
const symbolId = computed(() => `#icon-${props.name}`)
</script>
