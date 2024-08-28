<template>
  <div class="app">
    <h2>webpack-vue3-ts</h2>
    <img :src="smallImg" alt="小于10kb的图片"/>
    <img :src="bigImg" alt="大于10kb的图片"/>
    <h2>webpack</h2>
  </div>
</template>

<script lang="ts" setup>
import '@/app.css'
import '@/app.scss'
import smallImg from '@/assets/imgs/666.jpg'
import  bigImg from '@/assets/imgs/pic4.jpg'
</script>

<style scoped>

</style>
