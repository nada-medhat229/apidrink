import { createStore } from "vuex";
import * as state from "./state.js";
import * as actions from "./actions.js";
import * as mutations from "./mutations.js";
import * as getters from "./getters.js";

const store=createStore({
  state:  {
    searcheddrink:[],
    drinkbyletter:[],
    drinkbyIngredient:[]
  },
  actions,
  mutations,
  getters
})
export default store;

