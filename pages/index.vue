<script setup>
import { CatFactsService } from "~/services/cat_facts_service";

onBeforeMount(async () => {
  await new CatFactsService().fetchMeowFacts();
});
</script>

<template>
  <div
    class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 md:m-12"
  >
    <div>
      <div>
        <FactSlot />
      </div>
    </div>

    <div class="flex">
      <div class="p-3">
        <ImageSlot image="/kitten_1.jpeg" />
      </div>
      <div class="p-3">
        <div class="flex mb-8">
          <ImageSlot image="/kitten_2.jpeg" />
        </div>
        <div>
          <ImageSlot image="/kitten_3.jpeg" />
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
