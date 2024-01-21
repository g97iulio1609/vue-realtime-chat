<template>
  <div class="message">
    <span v-if="!sender">{{ name }}</span>
    <div class="flex" :class="sender ? 'flex-row-reverse' : ''">
      <UserAvatar class="mt-1" :src="photoUrl" />
      <div class="text w-3/4" :class="sender ? 'bg-green-800' : 'bg-gray-700'">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup>
import UserAvatar from './UserAvatar.vue';
import { defineProps } from 'vue';

defineProps({
  name: { type: String, default: '' },
  photoUrl: { type: String, default: '' },
  sender: { type: Boolean, default: false }
});
</script>
