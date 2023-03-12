<template>
    <div
      
      class="bg-white shadow rounded-xl"
    >
      <router-link :to="{name:'drinkDetail',params:{id:drink.idDrink}}">
        <img
          :src="drink.strDrinkThumb"
          alt=""
          class="rounded-t-xl w-full h-48 object-cover"
        />
      </router-link>

      <div class="px-3">
        <h3 class="px-3 py-2 font-semibold">{{ drink.strDrink }}</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, quia
          praesentium impedit possimus ipsum exercitationem maiores dolor fugit
        </p>
        <div class="px-3 py-2 my-3 flex items-center justify-between">
       
          <router-link :to="{name:'drinkDetail',params:{id:drink.idDrink}}"   class="px-3 py-2 rounded border-2 border-blue-600 bg-blue-500 text-white hover:bg-blue-600 transition-colors"
          >
            Details
          </router-link>
            
        
        </div>
      </div>
    </div>
</template>
<script setup>

const {drink}=defineProps({
  drink:Object
})
</script>