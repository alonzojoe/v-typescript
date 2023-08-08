<script setup lang="ts">
import Card from '../components/Card.vue'
import { onMounted, reactive, computed } from 'vue';
import { Person } from '../types/Types.ts'
import store from '../store';

const persons = computed(()=> store.getters.getPersons)

const person: Person = reactive({
  name: "John Doe",
  age: 23,
  address: "123 Main Street America"
})

const handleChangeName = ({ name, age , address }: Person) => {
  person.name = name
  person.age = age
  person.address = address
}

onMounted(() => {
  store.dispatch('fetchPersons')
})
</script>

<template>
  {{ persons }}
  <div class="row justify-content-center">
    <div class="col-sm-12 col-md-6 col-lg-3 mb-3">
      <Card :person="person" @change-name="handleChangeName($event)" />
    </div>
    <div class="col-sm-12 col-md-6 col-lg-3 mb-3">
      <Card :person="person" @change-name="handleChangeName($event)" />
    </div>
    <div class="col-sm-12 col-md-6 col-lg-3 mb-3">
      <Card :person="person" @change-name="handleChangeName($event)" />
    </div>
    <div class="col-sm-12 col-md-6 col-lg-3 mb-3">
      <Card :person="person" @change-name="handleChangeName($event)" />
    </div>
    <div class="col-sm-12 col-md-6 col-lg-3 mb-3">
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
