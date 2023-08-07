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
  <div class="card" style="width: 18rem;">
    <img src="https://worldrefiningassociation.com/wp-content/uploads/placeholder-speaker-l-8.jpg" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Name: {{ person.name }}</h5>
      <p class="card-text">Age: {{ person.age }}, Address: {{ person.address }}</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div> 
</template>
