<template lang="">
  <div class="bg-gray-100 h-full">
    
      <Navbar />
      <main class="bg-gray-100 ">
        <router-view/>
    </main>
  </div>
</template>
<script setup>
import Navbar from './Navbar.vue';
</script>
<style lang=""></style>
