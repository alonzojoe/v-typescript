<script setup lang="ts">
import Card from '../components/Card.vue'
import { onMounted, reactive, computed } from 'vue';
import { Person } from '../types/Types.ts'
import store from '../store';

const persons = computed(()=> store.getters.getPersons)

onMounted(() => {
  store.dispatch('fetchPersons')
})
</script>

<template>
  <div class="row justify-content-center">
    <div v-for="p in persons" :key="p.id" class="col-sm-12 col-md-6 col-lg-4 mb-3">
      <Card :person="p" />
    </div>
    <div class="col-sm-12 col-md-3 col-lg-3 mb-3">
      <div class="card" aria-hidden="true">
        <svg class="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect></svg>
        <div class="card-body">
          <h5 class="card-title placeholder-glow">
            <span class="placeholder col-6"></span>
          </h5>
          <p class="card-text placeholder-glow">
            <span class="placeholder col-7"></span>
            <span class="placeholder col-4"></span>
            <span class="placeholder col-4"></span>
            <span class="placeholder col-6"></span>
            <span class="placeholder col-8"></span>
          </p>
          <a class="btn btn-primary disabled placeholder col-6" aria-disabled="true"></a>
        </div>
      </div>
    </div>
  </div>
  
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
