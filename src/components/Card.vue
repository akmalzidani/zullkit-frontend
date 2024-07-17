<script setup>
import { RouterLink } from 'vue-router';
import { getImageUrl } from '@/utils/helper';

const props = defineProps({
  id: Number,
  title: String,
  subtitle: String,
  image: String,
});


</script>

<template>
    <div class="overflow-hidden border border-gray-200 rounded-xl">
      <RouterLink :to="`/product/${id}`">
        <div class="m-4 overflow-hidden rounded-xl">
          <img :alt="title" class="block w-full h-auto" :src=getImageUrl(image) />
        </div>
      </RouterLink>

      <header class="px-4 mb-4 leading-tight">
        <h1 class="text-lg">
          <a class="font-semibold text-black no-underline hover:underline" href="#">
            {{ title }}
          </a>
        </h1>
        <span class="block text-sm font-light text-gray-500 no-underline">
          {{ subtitle }} 
        </span>
      </header>
    </div>
</template>

