<script setup lang="ts">
import Component from './components/Component.vue'
import { onMounted, reactive } from 'vue';
import { Person } from './types/Types'
const person: Person = reactive({
  name: "John Doe",
  age: 23,
  address: "123 Main Street America"
})

const handleChangeName = (newName: string) => {
  person.name = newName
}

</script>

<template>
  <div>
    <h1>Main Parent</h1>
    <h3>Child Components</h3>
    <Component :person="person" @changeName="handleChangeNames" />
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
