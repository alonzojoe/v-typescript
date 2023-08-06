<script setup lang="ts">
import Card from '../components/Card.vue'
import { onMounted, reactive } from 'vue';
import { Person } from '../types/Types.ts'

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


</script>

<template>
  <div>
    <Card :person="person" @change-name="handleChangeName($event)" />
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
