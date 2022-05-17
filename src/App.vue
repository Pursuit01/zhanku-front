<template>
  <div>
    <!-- 一级路由出口 -->
    <router-view />
  </div>
</template>

<script setup>
import { isMobileTerminal } from './utils/flexible'
</script>

<style lang="scss" scoped></style>
