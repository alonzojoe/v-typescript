<template>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">

        <div class="offcanvas-header" v-if="!isLoadingProfile">
            <h5 class="offcanvas-title" id="offcanvasRightLabel">Profile</h5>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body" v-if="!isLoadingProfile && profile.location">
            <div class="d-flex-row align-items-start mb-7 pb-1 align-items-center justify-content-between">
                <div class="d-flex align-items-center gap-2">
                    <img :src="profile.picture" alt="user8" width="72" height="72" class="rounded-circle">
                    <div>
                        <h6 class="fw-semibold fs-5 mb-0">{{ profile.firstName }} {{ profile.lastName }}</h6>
                        <p class="mb-0 text-secondary fs-6">{{ profile.email }}</p>
                    </div>
                </div>
            
            </div>
            <div class="row mt-4">
                <div class="col-sm-12 col-lg-6">
                    <p class="mb-1 fs-6 text-secondary">Title</p>
                    <h6 class="fw-semibold fs-6 mb-2">"{{ profile.title }}."</h6>
                </div>
                <div class="col-sm-12 col-lg-6">
                    <p class="mb-1 fs-6 text-secondary">Gender</p>
                    <h6 class="fw-semibold fs-6 mb-2">{{ profile.gender }}</h6>
                </div>
                <div class="col-sm-12 col-lg-6">
                    <p class="mb-1 fs-6 text-secondary">Birthdate</p>
                    <h6 class="fw-semibold fs-6 mb-2">{{ profile.dateOfBirth }}</h6>
                </div>
                <div class="col-sm-12 col-lg-6">
                    <p class="mb-1 fs-6 text-secondary">Phone number</p>
                    <h6 class="fw-semibold fs-6 mb-2">{{ profile.phone }}</h6>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-12 col-lg-12">
                    <p class="mb-1 fs-6 text-secondary">Location</p>
                    <h6 class="fw-semibold fs-6 mb-2">{{ profile.location.street }}, {{ profile.location.city }} {{ profile.location.state }}</h6>
                </div>
                <div class="col-sm-12 col-lg-6">
                    <p class="mb-1 fs-6 text-secondary">Country</p>
                    <h6 class="fw-semibold fs-6 mb-2">{{ profile.location.country }}</h6>
                </div>
                <div class="col-sm-12 col-lg-6">
                    <p class="mb-1 fs-6 text-secondary">Timezone</p>
                    <h6 class="fw-semibold fs-6 mb-2">{{ profile.location.timezone }}</h6>
                </div>
            </div>
        </div>
        <div v-if="isLoadingProfile" class="d-flex justify-content-center align-items-center mt-5">
            <div class="spinner-border text-secondary" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
        <div v-else class="d-flex justify-content-start align-items-center p-3" style="height: 30vh;">
            <button class="btn btn-danger" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight"
                aria-controls="offcanvasRight">
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

        const fetchProfile = async () => {
            isLoadingProfile.value = true
            await store.dispatch('viewProfile', props.personId)
            isLoadingProfile.value = false

        }


        watch(async () => {
            props.personId
            console.log('Person ID CHange', props.personId)
            await fetchProfile()
        })


        return {
            profile,
            isLoadingProfile
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

.d-flex-row{
    display: flex !important;
    flex-direction: row !important;
}

</style>
    