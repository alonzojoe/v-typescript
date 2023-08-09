<script setup lang="ts">
import { ref } from 'vue'
import { Person } from '../types/Types';

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
      <h6 class="card-title">{{person.id}}. {{ person.name }}</h6>
      <p class="card-text">{{ person }}</p>
      <a href="#" class="btn btn-primary">View Profile</a>
    </div>
  </div> 
</template>
