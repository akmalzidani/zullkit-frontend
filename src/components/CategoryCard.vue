<script setup>
import Card from './Card.vue';

const props = defineProps({
  title: String,
  item: Number,
  image: String,
});
</script>

<template>
  <div class="w-full px-1 my-1 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4">
    <Card :title="title" :subtitle='`${item} items`' :image="image" />
  </div>
</template>