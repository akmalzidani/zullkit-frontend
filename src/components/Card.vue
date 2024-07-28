<script setup>
import { computed } from 'vue';
import { RouterLink } from 'vue-router';
// import { getImageUrl } from '@/utils/helper';

const props = defineProps({
  id: Number,
  title: String,
  subtitle: String,
  image: String,
  type: {
    type: String,
    default: 'product',
  },
});
// const categoriesName =  props.name.split(' ').join('-').toLowerCase();
const computedLink = computed(() => {
  return props.type === 'category' ? `/categories/${props.id}` : `/product/${props.id}`;
});

</script>

<template>
    <div class="overflow-hidden border border-gray-200 rounded-xl">
      <RouterLink :to="computedLink">
        <div class="m-4 overflow-hidden rounded-xl">
          <!-- <img :alt="title" class="block w-full h-auto" :src=getImageUrl(image) /> -->
          <img :alt="title" class="block w-full h-auto" :src=image />
        </div>
      </RouterLink>

      <header class="px-4 mb-4 leading-tight">
        <h1 class="text-lg">
          <RouterLink :to="computedLink" class="font-semibold text-black no-underline hover:underline">
            {{ title }}
          </RouterLink>
        </h1>
        <span class="block text-sm font-light text-gray-500 no-underline">
          {{ subtitle }} 
        </span>
      </header>
    </div>
</template>

