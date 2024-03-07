import { CatFactsRepository } from "../repositories/cat_facts_repository";
import { useCatFactsStore } from "@/stores/cat_facts_store";

export class CatFactsService {
  catFactsStore = useCatFactsStore();

  async fetchMeowFacts() {
    const factsQuantity = 90;
    if (this.catFactsStore.catFacts.length === 0) {
      try {
        const response = await CatFactsRepository.requestFacts(factsQuantity);
        console.log(response.data);
        this.catFactsStore.catFacts = response.data.data;
        this.catFactsStore.chooseRandomFact();
      } catch (error) {
        console.error("Error fetching meow facts:", error);
        throw error;
      }
    }
  }
}
