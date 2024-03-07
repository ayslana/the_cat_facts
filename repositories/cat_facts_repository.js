import axios from "axios";

const BASE_URL = "https://meowfacts.herokuapp.com/";

export class CatFactsRepository {
  static requestFacts(count) {
    return axios.get(`${BASE_URL}?count=${count}`);
  }
}
