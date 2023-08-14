<template>
  <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="offcanvasRightLabel">Profile</h5>
      <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">


      <h5 class="card-title">{{ profile.title }} {{ profile.firstName }} {{ profile.lastName }}</h5>
      <h6 class="card-subtitle mb-2 text-body-secondary">{{ profile.email }}</h6>
      <p class="card-text">BirthDate: {{ profile.dateOfBirth }}</p>
    </div>
    <pre>{{ profile }}</pre>
  </div>  
  </template>
  
  <script>
  import { ref, onMounted, onBeforeMount, computed, watch } from 'vue';
  import { useStore } from 'vuex'

  export default {
    props: [
      'personId'
    ],
    setup(props) {
      const profile = computed(() => store.getters.getPersonProfile)
      const store = useStore()

      onBeforeMount(() => {
          store.commit('clearProfile')
      }),

      onMounted(()=> {
          store.dispatch('viewProfile', props.personId)
      })

      watch(() => props.personId, (newPersonId) => {
        if (newPersonId) {
          store.dispatch('viewProfile', newPersonId);
        }
      });

      return {
        profile
      }
 
    },
  };
  </script>
  