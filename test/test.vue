<template>
  <div>
    <div v-html="text">{{ this.text }}</div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const text = '123'
if (true) {
  text = 3
    const b = 1
}

const obj = {
  a: 1,
  b: '2'
}

</script>
