<template>
    <div class="container-fluid">
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
                                        <h5 class="fs-5 mb-0 fw-semibold">{{ profile.firstName }} {{ profile.lastName }}</h5>
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
                                            <button class="btn btn-primary">Follow <i class='bx bx-user-plus' ></i></button>
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
                                <p>Hello, I am {{profile.firstName}} {{profile.lastName}}
                                    lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque aspernatur.
                                </p>
                                <ul class="list-unstyled mb-0">
                                    <li class="d-flex align-items-center gap-3 mb-4">
                                        <i class='bx bx-envelope fs-5' ></i>
                                        <h6 class="fs-5 fw-semibold mb-0">{{ profile.email }}</h6>
                                    </li>
                                    <li class="d-flex align-items-center gap-3 mb-4">
                                        <i class='bx bx-phone fs-5' ></i>
                                        <h6 class="fs-5 fw-semibold mb-0">{{ profile.phone }}</h6>
                                    </li>
                                    <li class="d-flex align-items-center gap-3 mb-4">
                                        <i class='bx bx-female-sign fs-5' ></i>
                                        <h6 class="fs-5 fw-semibold mb-0">{{ profile.gender }}</h6>
                                    </li>
                                    <li class="d-flex align-items-center gap-3 mb-4">
                                        <i class='bx bxs-map fs-5' ></i>
                                        <h6 class="fs-5 fw-semibold mb-0">{{ profile.location.state }}, {{ profile.location.country }}</h6>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-8">

                    </div>
                </div>
            </div>
        </div>
        <pre>{{ profile }}</pre>
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

onBeforeMount(() => {
    store.commit('clearProfile')
}),

    onMounted(() => {
        store.dispatch('viewProfile', route.params.id)
    })
</script>

<style scoped>
a {
    text-decoration: none;
}

.list-unstyled {
    padding-left: 0;
    list-style: none;
}

.linear-gradient {
    background-image: linear-gradient(#50b2fc, #f44c66);
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
