<template>
  <img class="avatar" :src="src" />
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
  src: { type: String, default: '' }
});
</script>
