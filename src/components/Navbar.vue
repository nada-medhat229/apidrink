<template>
  <header class="bg-white shadow h-16 flex justify-between items-strech px-5">
    <router-link
      :to="{ name: 'home' }"
      class="inline-flex items-center h-full px-5 font-bold mb-4 text-2xl text-blue-600"
      >Home</router-link
    >
    <div class="flex items-center gap-1 title-small">
      <router-link
        :to="{ name: 'byName' }"
        class="px-2 transition-colors hover:bg-blue-100 h-full inline-flex items-center"
        >SearchDrink</router-link
      >
      <router-link
        :to="{ name: 'byLetter' }"
        class="px-2 transition-colors hover:bg-blue-100 h-full inline-flex items-center"
        >Drink by Letter</router-link
      >
      <router-link
        :to="{ name: 'ingredients' }"
        class="px-2 transition-colors hover:bg-blue-100 h-full inline-flex items-center"
        >Drink by ingredients</router-link
      >
    </div>
  </header>
</template>
<style scoped>
@media (max-width: 575.98px) {
  .title-small {
    font-size: 12px;
  }
}
</style>
