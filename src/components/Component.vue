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

const emit = defineEmits(['changeName'])

const newName = ref('')
const changeName = () => {
   const userInput = prompt("Enter New Name: ")
   if (userInput !== null) {
      newName.value = userInput ?? ''
      emit('changeName', newName.value)
   }

}


</script>

<template>
  <h1>Personal Information</h1>

  <div class="card">
      <p>Name: {{ person.name }}</p>
      <p>Age: {{ person.age }}</p>
      <p>Address: {{ person.address }}</p>
      <button @click="changeName">Change Name</button>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
