<script setup lang="ts">
import { ref } from 'vue'
import { Person } from '../types/Types';
import OffCanvas from '../components/OffCanvas.vue'


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

const idToCheck = ref('')
const checkProfile = (id) => {
    idToCheck.value = id
}


</script>

<template>
  <div class="card" style="width: 20rem;">
    <div class="card-body">
      <div class="d-flex justify-content-start align-items-center mb-2">
        <img :src="person.picture" class="cursor-pointer rounded-circle cst-img border border-primary" alt="...">
        <div>
          <p class="mx-2 fs-6 text-secondary p-0 m-0">{{person.id}}</p>
          <a href="javascript:void(0);" @click="checkProfile(person.id)" class="mx-2 fs-6 text-decoration-none" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">{{ person.title }}. {{ person.firstName }} {{ person.lastName }}</a>
        </div>
        
      </div>
      
      <OffCanvas v-show="person.id == idToCheck" :personId="person.id"/>
      <!-- <p class="card-text">{{ person }}</p> -->
      <div class="d-flex justify-content-end">
        <router-link :to="{name: 'person-posts', params: { id: person.id }}" class="btn btn-sm btn-primary">View Posts</router-link>
      </div>
    </div>
  </div> 
</template>

<style scoped>

.cst-img{
  height: 3rem;
  width: auto;
}


</style>
