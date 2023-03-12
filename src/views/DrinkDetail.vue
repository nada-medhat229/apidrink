<template lang="">
  <div class="max-w-[800px] mx-auto p-8">
    <h1 class="text-5xl font-bold mb-5">{{ drink.strAlcoholic }}</h1>
    <img :src="drink.strDrinkThumb" :alt="drink.strDrink" class="w-full max-w-[100%] rounded-2xl"/>
    <div class="grid grid-cols-1 md:grid-cols-3">
      <div>
        <strong class="font-bold">Category: </strong>{{ drink.strCategory }}
      </div>
      <div>
        <strong class="font-bold">Area: </strong>{{ drink.strAlcoholic }}
      </div>
      <div><strong class="font-bold">Tags: </strong>{{ drink.strGlass }}</div>
    </div>
    <div class="">
      <div>
        <p class="text-2xl mb-3">{{ drink.strInstructionsDE }}</p>
      </div>
      <div>
        <h2 class="text-2xl font-semibold mb-3">Ingredient</h2>
          <ul class="">
            <template v-for="(el, ind) of new Array(20)">
              <li v-if="drink[`strIngredient${ind + 1}`]">
                {{ind+1}}.{{ drink[`strIngredient${ind + 1}`] }}
              </li>
            </template>
          </ul>
      </div>
    </div>
  </div>

</template>
<script setup>
import { useRoute } from "vue-router";
import { onMounted, ref } from "vue";
import axiosUrl from "../axiosUrl";
const route = useRoute();
const drink = ref({});
onMounted(() => {
  axiosUrl.get(`lookup.php?i=${route.params.id}`).then(({ data }) => {
    // debugger;
    drink.value = data.drinks[0] || {};
  });
});
</script>
<style lang=""></style>
