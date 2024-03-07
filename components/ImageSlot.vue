<script setup>
const props = defineProps({
  image: String,
});
</script>

<template>
  <img
    class="rounded-[20px] drop-shadow-2xl h-auto"
    :src="props.image"
    alt="Image"
    :title="props.image"
  />
</template>

<style></style>
