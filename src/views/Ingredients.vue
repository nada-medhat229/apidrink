<template>
   <div class="p-6 pb-0">
   <h1 class="font-bold mb-4 text-4xl text-blue-600">
    Drink By Ingredient
   </h1>
  </div>
  <div class="p-8 row">
    <div
      v-for="(ing, i) in ingredients"
      :key="i"
      class=" bg-white shadow rounded p-3 mb-3 col-md-6"
    >
      <h3 class="text-2xl font-bold mb-2">
        {{ ing.strIngredient1 }}
      </h3>
    </div>
  </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
import axiosUrl from "../axiosUrl.js";
const ingredients = ref([]);
onMounted(() => {
  axiosUrl.get(`/list.php?i=list`).then(({ data }) => {
    // debugger;
    ingredients.value = data.drinks;
  });
});
</script>
<style lang=""></style>
