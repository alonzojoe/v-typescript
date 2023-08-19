<template>
    <div class="container">
        <div class="row">
            <div class="col-10 mx-auto">
                <div class="card position-relative mb-3">
                    <img src="../assets/cover.webp" class="card-img-top card-img" alt="...">
                    <div class="card-body p-0">
                        <div class="row align-items-center">
                            <div class="col-4 order-lg-1 order-2">
                                <div class="d-flex align-items-center justify-content-around m-4">
                                    <div class="text-center">
                                        <i class='bx bx-receipt fs-4 text-secondary'></i>
                                        <h4 class="mb-0 fw-semibold lh-1">37</h4>
                                        <p class="mb-0 fs-6 text-secondary">Posts</p>
                                    </div>
                                    <div class="text-center">
                                        <i class='bx bx-user-circle fs-4 text-secondary'></i>
                                        <h4 class="mb-0 fw-semibold lh-1">120</h4>
                                        <p class="mb-0 fs-6 text-secondary">Followers</p>
                                    </div>
                                    <div class="text-center">
                                        <i class='bx bx-user-check fs-4 text-secondary'></i>
                                        <h4 class="mb-0 fw-semibold lh-1">37</h4>
                                        <p class="mb-0 fs-6 text-secondary">Following</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-4 mt-n3 order-lg-2 order-1">
                                <div class="mt-n5">
                                    <div class="d-flex align-items-center justify-content-center mb-2">
                                        <div class="linear-gradient d-flex align-items-center justify-content-center rounded-circle"
                                            style="width: 110px; height: 110px;">
                                            <div class="border border-4 border-white d-flex align-items-center justify-content-center rounded-circle overflow-hidden"
                                                style="width: 100px; height: 100px;">
                                                <img :src="profile.picture" alt="" class="w-100 h-100">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="text-center">
                                        <h5 class="fs-5 mb-0 fw-semibold">{{ profile.firstName }} {{ profile.lastName }}
                                        </h5>
                                        <p class="mb-0 fs-6 text-secondary">Project Manager</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-4 order-last">
                                <div class="d-flex align-items-center justify-content-center">
                                    <ul
                                        class="list-unstyled d-flex align-items-center justify-content-center justify-content-lg-start my-3 gap-3">
                                        <li class="position-relative">
                                            <a href="javascript:void(0);"
                                                class="text-white d-flex align-items-center justify-content-center bg-primary p-2 fs-4 rounded-circle"
                                                width="30" height="30">
                                                <i class='bx bxl-facebook'></i>
                                            </a>
                                        </li>
                                        <li class="position-relative">
                                            <a href="javascript:void(0);"
                                                class="text-white d-flex align-items-center justify-content-center bg-info p-2 fs-4 rounded-circle"
                                                width="30" height="30">
                                                <i class='bx bxl-twitter'></i>
                                            </a>
                                        </li>
                                        <li class="position-relative">
                                            <a href="javascript:void(0);"
                                                class="text-white d-flex align-items-center justify-content-center bg-secondary p-2 fs-4 rounded-circle"
                                                width="30" height="30">
                                                <i class='bx bxl-linkedin'></i>
                                            </a>
                                        </li>
                                        <li class="position-relative">
                                            <a href="javascript:void(0);"
                                                class="text-white d-flex align-items-center justify-content-center bg-danger p-2 fs-4 rounded-circle"
                                                width="30" height="30">
                                                <i class='bx bxl-youtube'></i>
                                            </a>
                                        </li>
                                        <li>
                                            <button class="btn btn-primary">Follow <i class='bx bx-user-plus'></i></button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-10 mx-auto">
                <div class="row">
                    <div class="col-lg-4">
                        <div class="card shadow-none border">
                            <div class="card-body">
                                <h4 class="fw-semibold mb-3">About</h4>
                                <p>Hello, I am {{ profile.firstName }} {{ profile.lastName }}
                                    lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque aspernatur.
                                </p>
                                <ul class="list-unstyled mb-0">
                                    <li class="d-flex align-items-center gap-3 mb-4">
                                        <i class='bx bx-envelope fs-5'></i>
                                        <h6 class="fs-5 fw-semibold mb-0">{{ profile.email }}</h6>
                                    </li>
                                    <li class="d-flex align-items-center gap-3 mb-4">
                                        <i class='bx bx-phone fs-5'></i>
                                        <h6 class="fs-5 fw-semibold mb-0">{{ profile.phone }}</h6>
                                    </li>
                                    <li class="d-flex align-items-center gap-3 mb-4">
                                        <i class='bx bx-female-sign fs-5'></i>
                                        <h6 class="fs-5 fw-semibold mb-0">{{ profile.gender }}</h6>
                                    </li>
                                    <!-- <li class="d-flex align-items-center gap-3 mb-4">
                                        <i class='bx bxs-map fs-5'></i>
                                        <h6 class="fs-5 fw-semibold mb-0">{{ profile.location.state }}, {{
                                            profile.location.country }}</h6>
                                    </li> -->
                                </ul>
                            </div>
                        </div>
                        <div class="card shadow-none border">
                            <div class="card-body">
                                <h4 class="fw-semibold mb-3">
                                    Photos
                                </h4>
                                <div class="row m-1">
                                    <div class="col-4" v-for="(p, index) in posts" :key="index">
                                        <img :src="p.image" class="img-fluid w-100 rounded object-fit-cover mb-4" style="height: 60px;">
                                    </div>
                                    
                        
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-8">
                        <div class="card mb-3" v-for="(p, index) in posts" :key="p.id">
                            <div class="card-body border-bottom">
                                <div class="d-flex align-items-center gap-3">
                                    <img :src="p.owner.picture" alt="" class="rounded-circle" width="40" height="40">
                                    <h6 class="fw-semibold mb-0 fs-6">{{ p.owner.firstName }} {{ p.owner.lastName }}</h6>
                                    <span class="fs-custom-sm">
                                        <span class="p-1 bg-light rounded-circle d-inline-block text-secondary"></span>
                                         {{ p.publishDate }}
                                    </span>
                                </div>
                                <p class="text-dark my-3">
                                    {{ p.text }} <span v-for="t in p.tags" class="badge cst-bg-primary mx-1">#{{ t }}</span>
                                </p>
                                <img :src="p.image" alt="" class="img-fluid rounded-4 w-100 object-fit-cover" style="height: 360px;">
                                <div class="d-flex align-items-center my-3">
                                    <div class="d-flex align-items-center gap-2">
                                      <a class="text-white d-flex align-items-center justify-content-center cst-bg-primary p-2 fs-6 rounded-circle" href="javascript:void(0)" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Like">
                                        <i class='bx bx-like'></i>
                                      </a>
                                      <span class="text-dark fw-semibold">67</span>
                                    </div>
                                    <div class="d-flex align-items-center gap-2 ms-4">
                                      <a class="text-white d-flex align-items-center justify-content-center cst-bg-info p-2 fs-6 rounded-circle" href="javascript:void(0)" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Comment">
                                        <i class='bx bx-comment-dots'></i>
                                      </a>
                                      <span class="text-dark fw-semibold">
                                        <span v-if="isLoading">Loading...</span>
                                        <span v-else-if="!isLoading && p.comments && p.comments.length">{{ p.comments.length }}</span>
                                        <span v-else>0</span>
                                      </span>
                                    </div>
                                    <a class="text-dark ms-auto d-flex align-items-center justify-content-center bg-transparent p-2 fs-5 rounded-circle" href="javascript:void(0)" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Share">
                                        <i class='bx bxs-share'></i>
                                    </a>
                                </div>
                                <!-- Comment Section -->
                                <div class="position-relative">
                                    <div v-if="p.isLoading" class="d-flex justify-content-center align-items-center">
                                        <div class="spinner-border text-secondary" role="status">
                                            <span class="visually-hidden">Loading...</span>
                                        </div>
                                    </div>
                                    <div v-else-if="!p.isLoading && p.comments && p.comments.length" v-for="(c, index) in p.comments" :key="index" class="p-4 rounded-2 bg-light mb-3">
                                        <div class="d-flex align-items-center gap-3">
                                            <img :src="c.owner.picture" alt="" class="rounded-circle" width="33" height="33">
                                            <h6 class="fw-semibold mb-0 fs-6">{{ c.owner.firstName }} {{ c.owner.lastName }}</h6>
                                            <span class="fs-custom-sm">
                                                <i class='bx bxs-circle text-secondary' ></i> {{ c.publishDate }}
                                            </span>
                                        </div>
                                        <p class="my-3">
                                            {{ c.message }}
                                        </p>
                                    </div>
                                    
                                </div>
                                <!-- End Comment Section -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- <pre>{{ profile }}</pre>
        <pre>{{ posts }}</pre> -->
    </div>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted, onBeforeMount } from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';

const store = useStore()

const route = useRoute()
console.log(route.params.id)
const profile = computed(() => store.getters.getPersonProfile)
const posts = computed(() => store.getters.getPersonPosts)
onBeforeMount(() => {
    store.commit('clearProfile')
}),

    onMounted(async () => {
        await store.dispatch('viewProfile', route.params.id)
        await store.dispatch('fetchPersonPosts', route.params.id)
        await store.dispatch('injectPostComments')
    })
</script>

<style scoped>
a {
    text-decoration: none;
}

.cst-bg-primary {
    background-color: #5972FB;
}

.cst-bg-info {
    background-color: #49B2FC;
}

.fs-2 {
    font-size: .75rem !important;
}

.fs-custom-sm {
    font-size: 12px !important;
    margin-bottom: 10px;
}

.shadow-none {
    box-shadow: none !important;
}
.list-unstyled {
    padding-left: 0;
    list-style: none;
}

.linear-gradient {
    background-image: linear-gradient(#4F9D87, #EAA326);
}

.mt-n3 {
    margin-top: -1rem !important;
}

.mt-n5 {
    margin-top: -3rem !important;
}

.card-img {
    height: 160px;
    width: auto;
}</style>
