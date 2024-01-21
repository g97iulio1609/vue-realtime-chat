<template>
  <div class="container-sm mt-20">
    <div class="mx-5">
      <Message
        v-for="{ id, text, userPhotoURL, userName, userId } in messages"
        :key="id"
        :name="userName"
        :photo-url="userPhotoURL"
        :sender="userId === user?.uid"
      >
        {{ text }}
      </Message>
    </div>
  </div>

  <div ref="bottom" class="mt-20" />

  <div class="bottom">
    <div class="container-sm">
      <form v-if="isLogin" @submit.prevent="send">
        <input v-model="message" placeholder="Message" required />
        <button type="submit">
          <SendIcon />
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, nextTick } from 'vue';
import { useAuth, useChat } from '@/firebase';
import SendIcon from './SendIcon.vue';
import Message from './MessageChat.vue';

const { user, isLogin } = useAuth();
const { messages, sendMessage } = useChat();

const bottom = ref(null);
const message = ref('');

watch(messages, () => {
  nextTick(() => {
    bottom.value?.scrollIntoView({ behavior: 'smooth' });
  });
}, { deep: true });

const send = () => {
  sendMessage(message.value);
  message.value = '';
};
</script>
