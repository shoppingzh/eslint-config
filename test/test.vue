<template>
  <div>
    <div v-html="text">{{ this.text }}</div>
    <div style="display: none;" class="hello"></div>
    <input v-model="a" id="123" />
    <template v-if="a" :key="a"></template>

    <div v-is />
  </div>
</template>

<script setup>
import { ref } from 'vue'

const text = '123'
const a = ref()
if (true) {
  text = 3
    const b = 1
}

const obj = {
  a: 1,
  b: '2'
}

</script>
