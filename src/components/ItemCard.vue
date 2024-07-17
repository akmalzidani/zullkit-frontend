<script setup>
import Card from "./Card.vue";

const props = defineProps({
  id: Number,
  title: String,
  category: String,
  image: String,
});
</script>

<template>
  <div class="w-full px-1 my-1 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
    <Card :id="id" :title="title" :subtitle="category" :image="image" />
  </div>
</template>
