<script setup>
import useProducts from '@/composables/useProducts';
import ItemCard from '../ItemCard.vue';
import { onMounted } from 'vue';

const { products, getAllProducts, limit } = useProducts();

onMounted(() => {
  limit.value = 3;
  getAllProducts();
});
</script>

<template>
    <div class="container px-4 mx-auto my-16 md:px-12">
      <h2 class="mb-4 text-xl font-medium md:mb-0 md:text-lg">New Items</h2>
      <div class="flex flex-wrap -mx-1 lg:-mx-4">
        <ItemCard v-for="product in products" :key="product.id" v-bind="product" :subtitle="null"/>
      </div>
    </div>
</template>


