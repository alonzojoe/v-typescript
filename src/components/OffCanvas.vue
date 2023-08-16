<template>
  <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
 
    <div class="offcanvas-header" v-if="!isLoadingProfile">
      <h5 class="offcanvas-title" id="offcanvasRightLabel">Profile <span class="text-secondary fs-6">#{{ profile.id}}</span></h5>
      <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div> 
    <div class="offcanvas-body" v-if="!isLoadingProfile">

      <div class="row p-0 m-0">
        <div class="col-12">
          <div class="d-flex justify-content-center align-items-center mb-3">
            <img :src="profile.picture" class="cursor-pointer rounded-circle cst-img" alt="...">
          </div>
        </div>
        <div class="col-12">
          <div class="d-flex justify-content-center align-items-center mb-3">
            <h5 class="card-title">{{ profile.title }} {{ profile.firstName }} {{ profile.lastName }}</h5>
          </div>
        </div>
        <div class="col-12">
          <div class="d-flex justify-content-center align-items-center mb-3">
            <h6 class="card-subtitle mb-2 text-body-secondary">{{ profile.email }} / {{ profile.phone }}</h6>
          </div>
        </div>
      </div>

      <p class="card-text p-0 m-2">Gender: {{ profile.gender }}</p>
      <p class="card-text p-0 m-2">Birthday: {{ profile.dateOfBirth }}</p>
      <p class="card-text p-0 m-2">Address: {{ profile.location.street }} {{ profile.location.city }} {{
        profile.location.state }}</p>
      <p class="card-text p-0 m-2">Country: {{ profile.location.country }}</p>
      <p class="card-text p-0 m-2">GMT Timezone: {{ profile.location.timezone }}</p>
    </div>
    <div v-if="isLoadingProfile" class="d-flex justify-content-center align-items-center mt-5">
      <div class="spinner-border text-secondary" role="status">
          <span class="visually-hidden">Loading...</span>
      </div>
    </div>
    <div v-else class="d-flex justify-content-start align-items-center p-3" style="height: 30vh;">
      <button class="btn btn-danger" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
        Close
      </button>
    </div>
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
    const isLoadingProfile = ref(true)

    // onBeforeMount(() => {
    //   store.commit('clearProfile')
    // }),

    //   onMounted(async () => {
    //     isLoadingProfile.value = true
    //     await store.dispatch('viewProfile', props.personId)
    //     isLoadingProfile.value = false
    //   })

    // watch(() => {
    //   profile.value
    //   if (Object.keys(profile.value).length !== 0) {
    //     console.log('doesnt have property')
    //   } else {
    //     console.log('has property')
    //   }
    // })

    const executeFunction = () => {
      console.log(`Function executed for person with ID: ${props.personId}`);
      // You can perform any actions here based on the personId
    };



    return {
      executeFunction,
      isLoadingProfile,
      profile
    }

  },
};
</script>

<style scoped>
.cst-img {
  height: 7rem;
  width: auto;
  border: 2px solid #0d6efd;
}
</style>
  