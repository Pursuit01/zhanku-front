<template>
  <div class="py-2 h-[80vh] flex flex-col">
    <h2 class="text-zinc-900 font-bold text-xl mb-2 px-1">所有分类</h2>
    <ul class="overflow-y-auto">
      <li
        v-for="(item, index) in categorys"
        :key="item.id"
        class="p-1 text-lg text-zinc-900 py-1.5 duration-100 active:bg-zinc-200"
        @click="$emit('onItemClick', index)"
      >
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script setup>
const props = defineProps({
  categorys: {
    type: Array,
    require: true
  }
})
const emits = defineEmits(['onItemClick'])
</script>

<style lang="scss" scoped></style>
