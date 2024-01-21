<template>
  <div class="user-profile max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
    <h1 class="text-2xl font-semibold text-center text-gray-800 mb-4">Profilo Utente</h1>
    <div v-if="user" class="text-center">
      <img :src="user.photoURL" alt="Foto Utente" class="user-photo mx-auto mb-3 rounded-full border-2 border-gray-300">
      <p class="text-lg"><strong>Nome:</strong> {{ user.displayName }}</p>
      <p class="text-lg"><strong>Email:</strong> {{ user.email }}</p>
      <!-- Qui puoi aggiungere ulteriori dettagli sull'utente -->
    </div>
    <div v-else class="text-center text-gray-600">
      <p>L'utente non è loggato.</p>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useAuth } from '@/firebase'; // Assicurati che il percorso sia corretto

const { user } = useAuth();

onMounted(async () => {
console.log("UserProfile Mounted");
});
</script>

<style scoped>
.user-profile {
  /* Stili per la tua pagina del profilo utente */
}

.user-photo {
  width: 100px;
  height: 100px;
  border-radius: 50%;
}
</style>
