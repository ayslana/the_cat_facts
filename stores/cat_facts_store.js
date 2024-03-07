import { defineStore } from "pinia";

export const useCatFactsStore = defineStore(
  "catFacts",
  () => {
    const catFacts = ref([]);
    const currentFact = ref("");

    const chooseRandomFact = () => {
      const randomIndex = Math.floor(Math.random() * catFacts.value.length);
      currentFact.value = catFacts.value[randomIndex];
    };

    return {
      catFacts,
      currentFact,
      chooseRandomFact,
    };
  },
  {
    persist: true,
  }
);
