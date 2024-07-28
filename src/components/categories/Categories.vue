<script setup>
import CategoriesCard from '../CategoryCard.vue';
import { onMounted } from 'vue';
import useCategories from '@/composables/useCategories';

const { categories, getAllCategories} = useCategories()

onMounted(() => {
  getAllCategories();
});
</script>

<template>
  <div>
    <div class="container px-4 mx-auto my-16 md:px-12">
      <h2 class="mb-4 text-xl font-medium md:mb-0 md:text-lg">
        All Categories
      </h2>
      <div class="flex flex-wrap -mx-1 lg:-mx-4">
        <CategoriesCard v-for="category in categories" :key="category.id" v-bind="category" />
      </div>
    </div>
  </div>
</template>
