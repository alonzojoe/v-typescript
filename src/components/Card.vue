<script lang="ts">
import { ref } from 'vue'
import { Person } from '../types/Types';


export default {
  props: [
      'person'
  ],
  emits: [
    'transferId'
  ],
  setup(props, { emit }) {
    
    const idToCheck = ref('')
    const checkProfile = (id: string) => {
        emit('transferId', id)
    }

    return {
      idToCheck,
      checkProfile
    }
  }
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
