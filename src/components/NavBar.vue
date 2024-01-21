<template>
  <nav>
    <div>
      <h1><strong>Vue</strong> Chat App</h1>

      <div v-if="isLogin" class="login">
        <Avatar :src="user.photoURL" />
        <button class="text-gray-400 hover:text-white" @click="signOut">
          Sign Out
        </button>
      </div>

      <button v-else class="bg-green-500 hover:bg-green-600" @click="signIn">
        Sign in
      </button>
    </div>
  </nav>
</template>

<script setup>
import Avatar from './UserAvatar.vue';
import { useAuth } from '@/firebase';

const { user, isLogin, signOut, signIn } = useAuth();
</script>