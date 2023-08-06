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
  <h2>Persons List</h2>

  <div class="card">
      <span><i class='bx bx-game' ></i></span>
      <span>Name: {{ person.name }}</span>
      <span>Age: {{ person.age }}</span>
      <span>Address: {{ person.address }}</span>
      <button @click="changeMe">Change Name</button>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}

.card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #616460;
  border-radius: .4rem;
  padding: 10px 15px;
  width: 100%;
}
</style>
