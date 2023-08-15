<template>
  <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="offcanvasRightLabel">Profile <span class="text-secondary fs-6">#{{ profile.id
      }}</span></h5>
      <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">

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
    <!-- <pre>{{ profile }}</pre> -->
    <div class="d-flex justify-content-start align-items-center p-3" style="height: 30vh;">
      <button class="btn btn-danger">
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

    onBeforeMount(() => {
      store.commit('clearProfile')
    }),

      onMounted(() => {
        store.dispatch('viewProfile', props.personId)
      })


    return {
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
  