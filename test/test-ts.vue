<template>
  <div>
    {{ this.a }}
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const a = ref('hello')
const arr: String[] = ['1', '2', '3']
const str: String = '123'
</script>
