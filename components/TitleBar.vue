<script setup>
const title = "The Defsafe Cat Facts Page";
</script>

<template>
  <div
    class="flex items-center justify-center w-screen md:text-6xl sm:text-2xl font-bolder bg-purple-darker text-rose-lighter h-48 text-center uppercase mb-12"
  >
    <p :title="title">{{ title }}</p>
  </div>
</template>
