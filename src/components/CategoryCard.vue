<script setup>
import Card from './Card.vue';

const props = defineProps({
  id: Number,
  name: String,
  products_count: Number,
  thumbnails: String,
});

console.log(props.id, props.name, props.items, props.image);

</script>

<template>
  <div class="w-full px-1 my-1 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4">
    <Card :id="id" :title="name" :subtitle='`${products_count ?? 0} items`' :image="thumbnails" type="category"/>
  </div>
</template>