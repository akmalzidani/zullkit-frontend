<script setup>
import ItemCard from '@/components/ItemCard.vue';
import useCategories from '@/composables/useCategories';
import { ref, watch, onMounted } from 'vue';

const { category, getCategoryById } = useCategories();
const products = ref([]);

onMounted(() => {
  getCategoryById();
  console.log(category);
  console.log(products);
});

watch(
  () => category.value,
  (newCategory) => {
    if (newCategory && newCategory.products) {
      products.value = newCategory.products;
    }
  }
);

</script>

<template>
  <div class="container px-4 mx-auto my-16 md:px-12" v-if="category && category.name">
    <h2 class="mb-4 text-xl font-medium md:mb-0 md:text-lg">{{ category.name }}</h2>
    <div class="flex flex-wrap -mx-1 lg:-mx-4" v-if="products.length > 0">
      <ItemCard v-for="product in products" :key="product.id" v-bind="product" :category="category" />
    </div>
    <div class="flex flex-wrap -mx-1 justify-center lg:-mx-4" v-else>
      <h2 class="mb-4 text-xl font-medium md:mb-0 md:text-lg">Belum ada produk pada kategori ini</h2>
    </div>
  </div>
  <div class="container px-4 mx-auto my-16 md:px-12 text-center" v-else>
    Loading...
  </div>
</template>
