<template>
   <div class="p-6 pb-0">
   <h1 class="font-bold mb-4 text-4xl text-blue-600">
    Drink By Ingredient
   </h1>
  </div>
<div class="grid grid-cols-1 md:grid-cols-3 gap-3 p-8">
    <DrinkItem
      v-for="drink of drinks"
      :key="drink.idDrink"
      :drink="drink"
    />
        
      </div>
</template>
<script setup>
import { computed } from "@vue/reactivity";
import { onMounted } from "vue";
import store from "../Store";
import DrinkItem from "../components/DrinkItem.vue";
import { useRoute } from "vue-router";
const route = useRoute();
const drinks = computed(() => store.state.drinkbyIngredient);
onMounted(() => {
  // debugger;
  store.dispatch('searchbyIngredient',route.params.ingredient);
});
</script>
<style lang=""></style>
