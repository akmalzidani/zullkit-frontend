<script setup>
import Card from "./Card.vue";

const props = defineProps({
  id: Number,
  name: String,
  category: {
    type: Object,
    required: true,
  },
  subtitle: String,
  thumbnails: String,
});


</script>

<template>
  <div class="w-full px-1 my-1 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
    <Card :id="id" :title="name" :subtitle="subtitle || category.name" :image="thumbnails" type="product"/>
  </div>
</template>
