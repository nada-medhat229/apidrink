<template><div class="p-6 pb-0">
  <h1 class="font-bold mb-4 text-4xl text-blue-600">
   Drink By Letter
  </h1>
 </div>
 
    <div>
    <div class="flex justify-center gap-2 mt-2 flex-wrap">
      <router-link
        :to="{ name: 'byLetter', params: { letter } }"
        v-for="letter of letters"
        :key="letter"
      >
        {{ letter }}</router-link
      >
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-3 p-8">
    <DrinkItem
      v-for="drink of drinks"
      :key="drink.idDrink"
      :drink="drink"
    />
        
      </div>
  </div>
</template>
<script setup>
import { computed } from "@vue/reactivity";
import { onMounted,watch } from "vue";
import store from "../Store";
import DrinkItem from "../components/DrinkItem.vue";
import { useRoute } from "vue-router";
const route = useRoute();

const letters='ABCDEFJHIJKLMNOPQRSTUVWXYZ'.split('');

const drinks = computed(() => store.state.drinkbyletter);
watch(route,()=>{


  store.dispatch('searchbyletter',route.params.letter);

})
onMounted(() => {

  store.dispatch('searchbyletter',route.params.letter);
});
</script>
<style lang=""></style>
