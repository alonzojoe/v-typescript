<script lang="ts">
import { ref } from 'vue'
import { Person } from '../types/Types';


export default {
  props: [
      'person'
  ],
  emits: [
    'transferId', 'transferFunction'
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
  <div class="card border-cst-primary">
    <div class="card-body p-4 text-center border-bottom position-relative">
      <router-link :to="{name: 'person-posts', params: { id: person.id }}" class="view-posts btn btn-primary">View Posts</router-link>
      <img :src="person.picture" alt="" class="rounded-circle mb-3" width="80" height="80">
      <h5 class="fw-semibold fs-4 mb-0"><a href="javascript:void(0);" @click="checkProfile(person.id)" class="text-decoration-none" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">{{ person.title }}. {{ person.firstName }} {{ person.lastName }}</a></h5>
      <span class="text-dark fs-6">{{ person.id }}</span>
      <ul class="px-2 py-2 bg-light list-unstyled d-flex align-items-center justify-content-center mb-0">
        <li class="position-relative">
          <a class="text-primary d-flex align-items-center justify-content-center p-2 mx-1 fs-5 cst-bg-primary rounded-circle fw-semibold" href="javascript:void(0)">
            <i class='bx bxl-facebook text-white'></i>
          </a>
        </li>
        <li class="position-relative">
          <a class="text-danger d-flex align-items-center justify-content-center p-2 mx-1 fs-5 cst-bg-pink rounded-circle fw-semibold " href="javascript:void(0)">
            <i class='bx bxl-instagram text-white'></i>
          </a>
        </li>
        <li class="position-relative">
          <a class="text-info d-flex align-items-center justify-content-center p-2 mx-1 fs-5 cst-bg-info rounded-circle fw-semibold " href="javascript:void(0)">
            <i class='bx bxl-linkedin text-white'></i>
          </a>
        </li>
        <li class="position-relative">
          <a class="text-secondary d-flex align-items-center justify-content-center p-2 mx-1 bg-danger fs-5 rounded-circle fw-semibold " href="javascript:void(0)">
            <i class='bx bxl-youtube text-white'></i>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>

a {
  text-decoration: none;
}

.view-posts {
  position:absolute;
  top: 0;
  right: 0;
}
.cst-bg-primary {
  background-color: #5972FB;
}

.cst-bg-pink {
  background-color: #F40072;
}

.cst-bg-info {
  background-color: #49B2FC;
}

.border-cst-primary {
  
  box-shadow: 1px 1px rgba(0, 0, 0, 0.2) !important;
}
.cst-img{
  height: 3rem;
  width: auto;
}


</style>
