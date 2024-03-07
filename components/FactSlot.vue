<script setup>
import { useCatFactsStore } from "@/stores/cat_facts_store";

const catFactsStore = useCatFactsStore();
const fadeInOut = ref(false);

function toggleFadeInOut() {
  fadeInOut.value = !fadeInOut.value;
  setTimeout(() => {
    fadeInOut.value = !fadeInOut.value;
  }, 1000);
  catFactsStore.chooseRandomFact();
}
</script>

<template>
  <div class="h-full flex flex-col justify-between px-12 mx-12">
    <div
      class="flex flex-col text-purple-darker text-3xl font-medium uppercase py-6"
      title="Cat Fact"
    >
      <p>Cat Fact:</p>
    </div>
    <div
      class="flex flex-col text-purple-medium text-2xl py-6 min-h-48 max-h-48 overflow-y-auto"
    >
      <p v-if="!catFactsStore.currentFact">
        <span>Loading...</span>
      </p>
      <p :class="{ 'fade-in': fadeInOut }">
        <span :title="catFactsStore.currentFact">
          {{ catFactsStore.currentFact }}
        </span>
      </p>
    </div>
    <div class="pt-12 mt-6">
      <DefaultButton
        label="Get A Random Catfact"
        hasPrependIcon
        @click="toggleFadeInOut"
        title="Get A Random Catfact Button"
      >
        <template #prepend-icon>
          <Icon
            class="mr-3"
            name="material-symbols:refresh"
            color="text-rose-lighter"
            size="2rem"
          />
        </template>
      </DefaultButton>
    </div>
  </div>
</template>

<style>
.fade-in {
  animation: fadeIn 1s ease-in-out;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
