<template>
  <div class="p-6 pb-0">
    <input
      type="text"
      v-model="keywords"
      class="rounded border-2 border-gray-200 w-full"
      placeholder="Search For Your Fav Drink"
      @input="searchdrink"
    />
  </div>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-3 p-8">
    <DrinkItem
      v-for="drink of drinks"
      :key="drink.idDrink"
      :drink="drink"
    />
        <!-- <div>{{ drinks }}</div> -->
      </div>
</template>
<script setup>
import { computed } from "@vue/reactivity";
import { onMounted, ref,watch } from "vue";
import { useRoute } from "vue-router";
import DrinkItem from "../components/DrinkItem.vue";
import store from "../Store/index.js";
const route = useRoute();
const keywords = ref("");
const drinks = computed(() => store.state.searcheddrink);
// console.log(drinks);
function searchdrink() {
  if (keywords.value) {
  store.dispatch("searchdrink", keywords.value);
}else{
  store.commit("setsearchdrink", []);

}
}

onMounted(() => {
  keywords.value = route.params.name;
  if (keywords.value) {
    searchdrink();
  }
});
</script>
<style lang=""></style>
