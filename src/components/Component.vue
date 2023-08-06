<script setup lang="ts">
import { ref } from 'vue'
import { Person } from '../types/Types';

// const props = defineProps({
//     person: {
//       type: Object as () => Person,
//       required: true
//     }
// })

const props = defineProps<{
  person: Person
}>()

const emit = defineEmits()

const modifiedObject = ref<Person>({
    name: "",
    age: 0,
    address: ""
})

const changeMe = () => {
   const name = prompt("Enter New Name: ")
   const age = prompt("Enter New Age: ")
   const address = prompt("Enter New Address: ")
   if (name !== null && age !== null && address !== null) {
      modifiedObject.value.name = name ?? ''
      modifiedObject.value.age = parseInt(age) ?? ''
      modifiedObject.value.address = address ?? ''
      console.log(modifiedObject.value)
      emit('change-name', modifiedObject.value)
   }

}


</script>

<template>
  <h1>Personal Information</h1>

  <div class="card">
      <p>Name: {{ person.name }}</p>
      <p>Age: {{ person.age }}</p>
      <p>Address: {{ person.address }}</p>
      <button @click="changeMe">Change Name</button>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
