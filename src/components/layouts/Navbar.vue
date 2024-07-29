<script setup>
import Logo from './Logo.vue';
import NavigationLinks from './NavigationLinks.vue';
import AuthButton from './AuthButton.vue';
import UserInfo from './UserInfo.vue';
import { onMounted, computed } from 'vue';
import { useUserStore } from '@/stores/user';

const store = useUserStore();
const user = computed(() => store.getUser);
const isLoggedIn = computed(() => store.isLoggedIn);

onMounted(() => {
  store.getUserData();
});
</script>

<template>
  <div>
    <nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
      <div class="container flex flex-wrap items-center justify-between mx-auto my-2">
        <Logo />
        <NavigationLinks />
        <UserInfo v-if="isLoggedIn" :user="user"/>
        <AuthButton v-else />
      </div>
    </nav>
  </div>
</template>
