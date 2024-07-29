<script setup>
import { ref } from "vue";

const show = ref(false);
const isMobileMenuOpen = ref(false);
const links = [
  { name: 'Home', to: '/' },
  { name: 'Categories', to: '/categories' },
  { name: 'Pricing', to: '/pricing' },
  { name: 'Study Case', to: '/study-case' },
];

const toggleMobileMenu = function () {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
}

const toggleDropdown = function () {
  show.value = !show.value;
}

const props = defineProps({
  user: Object,
});

</script>

<template>
  <div class="md:order-2 flex flex-wrap">
    <div class="flex items-center">
      <div class="mr-2 text-sm font-regular">Halo, {{ user.name }}</div>
      <button type="button"
        class="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300"
        id="user-menu-button" aria-expanded="false" data-dropdown-toggle="dropdown" @click="toggleDropdown">
        <span class="sr-only">Open user menu</span>
        <img class="w-8 h-8 rounded-full" :src="user.profile_photo_url" alt="user photo" />
      </button>
    </div>

    <div
      class="z-50 fixed right-20 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow"
      id="dropdown" :class="{ hidden: !show }">
      <div class="px-4 py-3">
        <span class="block text-sm text-gray-900 ">{{ user.name }}</span>
        <span class="block text-sm text-gray-500 truncate font-regular">{{ user.email }}</span>
      </div>
      <ul class="py-1" aria-labelledby="dropdown">
        <li>
          <a href="#"
            class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ">Subscriptions</a>
        </li>
        <li>
          <a href="#"
            class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ">Settings</a>
        </li>
        <li>
          <a href="" @click="logout"
            class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ">Sign
            out</a>
        </li>
      </ul>
    </div>
    <button
      type="button"
      class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
      aria-controls="mobile-menu-2"
      aria-expanded="false"
      @click="toggleMobileMenu"
    >
      <span class="sr-only">Open main menu</span>
      <svg
        class="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
          clip-rule="evenodd"
        />
      </svg>
      <svg
        class="hidden w-6 h-6"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
          clip-rule="evenodd"
        />
      </svg>
    </button>

    <!-- Menu Mobile -->
    <div
      id="mobile-menu-2"
      :class="{ hidden: !isMobileMenuOpen }"
      class="fixed top-16 right-0 w-full bg-white  shadow-lg md:hidden"
    >
      <ul class="flex flex-col p-4 space-y-4">
        <li v-for="link in links" :key="link.name">
          <RouterLink
            :to="link.to"
            class="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50  "
            aria-current="page"
          >
            {{ link.name }}
          </RouterLink>
        </li>
      </ul>
    </div>
  </div>
</template>