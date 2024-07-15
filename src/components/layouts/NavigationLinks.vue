<script setup>
import { ref } from 'vue';


const links = ref([
  { name: 'Home', to: '/' },
  { name: 'Categories', to: '/categories' },
  { name: 'Pricing', to: '/pricing' },
  { name: 'Study Case', to: '/study-case' },
]);
</script>

<template>
  <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="mobile-menu-2">
    <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-regular">
      <li v-for="link in links" :key="link.name">
        <RouterLink :to="link.to"
          active-class="block py-2 pl-3 pr-4 text-white bg-indigo-600 rounded md:bg-transparent md:text-indigo-600 md:p-0 dark:text-white"
          class="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-indigo-600 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
          aria-current="page">{{ link.name }}</RouterLink>
      </li>
    </ul>

  </div>
</template>


