<template>
  <div>
    <teleport to="body">
      <!-- 蒙版 -->
      <transition name="fade">
        <div
          v-if="isVisable"
          class="w-screen h-screen fixed bg-zinc-900/80 z-40 top-0 left-0"
          @click="isVisable = false"
        ></div>
      </transition>
      <!-- 内容 -->
      <transition name="popup">
        <div
          v-bind="$attrs"
          class="fixed left-0 bottom-0 w-screen bg-white z-50 rounded-t-lg text-base p-1"
          v-if="isVisable"
        >
          <slot />
        </div>
      </transition>
    </teleport>
  </div>
</template>

<script setup>
import { useScrollLock, useVModel } from '@vueuse/core'
import { watch } from 'vue'
const props = defineProps({
  modelValue: {
    type: Boolean,
    require: true
  }
})
const emits = defineEmits(['update:modelValue'])

const isVisable = useVModel(props)
// 锁定滚动事件
const isLocked = useScrollLock(document.body)
watch(
  isVisable,
  (val) => {
    isLocked.value = val
  },
  {
    immediate: true
  }
)
</script>

<style lang="scss" scoped>
// 进入中 离开中
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s;
}
// 准备进入 离开结束
.fade-enter-from,
.fade-leave-to {
  background-color: #fff;
}

.popup-enter-active,
.popup-leave-active {
  transition: all 0.3s;
}
.popup-enter-from,
.popup-leave-to {
  transform: translateY(100%);
}
// .popup-enter-to,
// .popup-leave-from {
//   top: 20%;
// }
</style>
