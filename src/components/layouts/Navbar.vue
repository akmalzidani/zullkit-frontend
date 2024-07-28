<script setup>
import Logo from './Logo.vue';
import NavigationLinks from './NavigationLinks.vue';
import AuthButton from './AuthButton.vue';
import UserInfo from './UserInfo.vue';
import { ref } from 'vue';

const isLoggedIn = ref(false);
</script>


<template>
  <div>
    <nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
      <div class="container flex flex-wrap items-center justify-between mx-auto my-2">
        <Logo />
        <NavigationLinks />
        <UserInfo v-if="isLoggedIn" />
        <AuthButton />
      </div>
    </nav>
  </div>
</template>