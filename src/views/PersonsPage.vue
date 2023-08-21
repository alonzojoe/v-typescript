<script setup lang="ts">
import Card from '../components/Card.vue'
// import OffCanvas from '../components/OffCanvas.vue'
import ViewPerson from '../components/ViewPerson.vue'
import { onMounted, ref, computed, watch } from 'vue';
import { useStore } from 'vuex';

const store = useStore()

const persons = computed(() => store.getters.getPersons)
const isLoadingPost = ref(false)
onMounted(async () => {
  isLoadingPost.value = true
  await store.dispatch('fetchPersons')
  isLoadingPost.value = false
})
const profileId = ref('')

let functionCallback = null

const offCanvasShow = ref(false)
const getIdFromChild = (data, callback) => {
  offCanvasShow.value = true
  profileId.value = data
  console.log(data)

}





</script>

<template>
  <div class="row justify-content-center">
    <ViewPerson v-show="offCanvasShow && profileId" :personId="profileId" />
    <div class="col-12">
      <div v-if="isLoadingPost" class="d-flex justify-content-center align-items-center">
        <div class="spinner-border text-secondary" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    </div>
    <div v-if="!isLoadingPost" v-for="p in persons" :key="p.id" class="col-sm-12 col-md-6 col-lg-4 mb-3">
      <Card @transferId="getIdFromChild($event)" :person="p" />
    </div>

    <div class="col-sm-12 col-md-6 col-lg-3 mb-3">
      <div class="card" aria-hidden="true">
        <svg class="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg"
          role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false">
          <title>Placeholder</title>
          <rect width="100%" height="100%" fill="#868e96"></rect>
        </svg>
        <div class="card-body">
          <h5 class="card-title placeholder-glow">
            <span class="placeholder col-6"></span>
          </h5>
          <p class="card-text placeholder-glow">
            <span class="placeholder col-7"></span>
            <span class="placeholder col-4"></span>
            <span class="placeholder col-4"></span>
            <span class="placeholder col-6"></span>
            <span class="placeholder col-8"></span>
          </p>
          <a class="btn btn-primary disabled placeholder col-6" aria-disabled="true"></a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}</style>
