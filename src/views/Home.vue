<template>
  <div class="p-6 pb-0">
   <h1 class="font-bold mb-4 text-4xl text-blue-600">Drinks</h1>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-3 p-8">
    <DrinkItem
      v-for="drink of alldrinks"
      :key="drink.idDrink"
      :drink="drink"
    />
        <!-- <div>{{ alldrinks }}</div> -->
      </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
import DrinkItem from "../components/DrinkItem.vue";
import axiosUrl from "../axiosUrl.js";
const alldrinks = ref([]);
onMounted(async() => {
  for (let i = 0; i < 10; i++) {
    axiosUrl.get(`/random.php`).then(({ data }) => {
    // debugger;
    alldrinks.value.push(data.drinks[0]) 
  });
  }

});

</script>
<style lang=""></style>
