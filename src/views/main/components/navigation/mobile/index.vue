<template>
  <div class="bg-white sticky top-0 left-0 z-10">
    <ul
      ref="ulTarget"
      class="relative flex overflow-x-auto p-1 text-xs text-zinc-600 overflow-hidden"
    >
      <!-- 滑块 -->
      <li
        :style="sliderStyle"
        class="absolute h-[22px] bg-zinc-900 rounded-lg duration-200"
      ></li>
      <!-- 汉堡按钮 -->
      <li
        class="z-20 fixed top-0 right-[-1px] h-4 px-1 flex items-center bg-white shadow-l-white"
        @click="onShowPopup"
      >
        <m-svg-icon class="w-1.5 h-1.5" name="hamburger"></m-svg-icon>
      </li>
      <!-- items -->
      <li
        v-for="(item, index) in data"
        :key="item.id"
        class="shrink-0 px-1.5 py-0.5 z-10 duration-200 last:mr-4"
        :class="{
          'text-zinc-100': currentItemIndex === index
        }"
        :ref="setItemRef"
        @click="onItemClick(index)"
      >
        {{ item.name }}
      </li>
    </ul>
    <m-popup v-model="isVisble">
      <Menu :categorys="data" @onItemClick="onItemClick" />
    </m-popup>
  </div>
</template>

<script setup>
import { reactive, ref, onBeforeUpdate, watch } from 'vue'
import { useScroll } from '@vueuse/core'
import Menu from '../../menu/index.vue'
defineProps({
  data: {
    type: Array,
    default: []
  }
})

// 滑块移动逻辑
// 1.选中的 item 下标：currentCategoryIndex
// 2.所有 item 元素：itemRefs
// 3.ul 的横向滚动偏离位置：ulScrollLeft
// 4.最后在 currentCategoryIndex 发生改变时，获取 item 下标元素的 left 和 width，计算 sliderStyle 即可

// 滑块样式
const sliderStyle = ref({
  transform: 'translateX(0px)',
  width: '52px'
})

// 点击的item元素的索引
const currentItemIndex = ref(0)

// 用来存放item实例
let itemRefs = []
// 向数组中添加item
const setItemRef = (el) => {
  if (el) {
    itemRefs.push(el)
  }
}
// 数据更新后，模板更新前清空item数组
onBeforeUpdate(() => {
  itemRefs = []
})

const ulTarget = ref(null)
const { x: ulOffset } = useScroll(ulTarget)

watch(currentItemIndex, (val) => {
  const { left, width } = itemRefs[val].getBoundingClientRect()
  sliderStyle.value = {
    transform: `translateX(${ulOffset.value + left - 10}px)`,
    width: width + 'px'
  }
})
const onItemClick = (index) => {
  currentItemIndex.value = index
  isVisble.value = false
}

// 控制popup展示
const isVisble = ref(false)
const onShowPopup = () => {
  isVisble.value = true
}
</script>
