<template>
    <div class="card mb-3">
        <div class="card-body border-bottom">
            <div class="d-flex align-items-center gap-3">
                <router-link :to="{ name: 'profile', params: { id: post.owner.id } }"><img :src="post.owner.picture" alt="" class="rounded-circle" width="40" height="40"></router-link>
                <router-link :to="{ name: 'profile', params: { id: post.owner.id } }">  <h6 class="fw-semibold mb-0 fs-6">{{ post.owner.firstName }} {{ post.owner.lastName }}</h6></router-link>
                <span class="fs-custom-sm">
                    <span class="p-1 bg-light rounded-circle d-inline-block text-secondary"></span>
                     {{ post.publishDate }}
                </span>
            </div>
            <p class="text-dark my-3">
                {{ post.text }} <span v-for="t in post.tags" class="badge cst-bg-primary mx-1">#{{ t }}</span>
            </p>
            <img :src="post.image" alt="" class="img-fluid rounded-4 w-100 object-fit-cover" style="width:100%; height: 360px;">
            <div class="d-flex align-items-center my-3">
                <div class="d-flex align-items-center gap-2">
                  <a class="text-white d-flex align-items-center justify-content-center cst-bg-primary p-2 fs-6 rounded-circle" href="javascript:void(0)" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Like">
                    <i class='bx bx-like'></i>
                  </a>
                  <span class="text-dark fw-semibold">{{ post.likes }}</span>
                </div>
                <div class="d-flex align-items-center gap-2 ms-4">
                  <a class="text-white d-flex align-items-center justify-content-center cst-bg-info p-2 fs-6 rounded-circle" href="javascript:void(0)" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Comment">
                    <i class='bx bx-comment-dots'></i>
                  </a>
                  <span class="text-dark fw-semibold">
                    <!-- <span v-if="isLoading">Loading...</span>
                    <span v-else-if="!isLoading && post.comments && post.comments.length">{{ post.comments.length }}</span>
                    <span v-else>0</span> -->
                  </span>
                </div>
                <a class="text-dark ms-auto d-flex align-items-center justify-content-center bg-transparent p-2 fs-5 rounded-circle" href="javascript:void(0)" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Share">
                    <i class='bx bxs-share'></i>
                </a>
            </div>
            <!-- Comment Section -->
            <!-- {{ p  }}, {{ !post.isLoading && post.comments && post.comments.length > 0 }} -->
            <div class="position-relative">
                <div v-if="post.isLoading" class="d-flex justify-content-center align-items-center">
                    <div class="spinner-border text-secondary" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                </div>
                <div v-else-if="!post.isLoading && post.comments && post.comments.length > 0" v-for="(c, index) in post.comments" :key="index" class="p-4 rounded-2 bg-light mb-3">
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
                    <div class="d-flex align-items-center my-3">
                        <div class="d-flex align-items-center gap-2">
                          <a class="text-white d-flex align-items-center justify-content-center cst-bg-primary p-2 fs-6 rounded-circle" href="javascript:void(0)" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Like">
                            <i class='bx bx-like'></i>
                          </a>
                          <span class="text-dark fw-semibold">5</span>
                        </div>
                        <div class="d-flex align-items-center gap-2 ms-4">
                          <a class="text-white d-flex align-items-center justify-content-center cst-bg-info p-2 fs-6 rounded-circle" href="javascript:void(0)" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Comment">
                            <i class='bx bxs-share'></i>
                          </a>
                          <span class="text-dark fw-semibold">
                        
                            <span>0</span>
                          </span>
                        </div>
                    </div>
                </div>
                <div v-else></div>
                <div class="d-flex align-items-center gap-3 p-3">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzIugh4t8tGK9w3a52Q88li6yccJVy5o7USg&usqp=CAU" alt="" class="rounded-circle" width="33" height="33">
                    <input type="text" class="form-control py-8" placeholder="write a comment...">
                    <button class="btn btn-primary">Comment</button>
                </div>
                
            </div>
            <!-- End Comment Section -->
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props: ['post'],
    setup () {
        

        return {}
    }
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
}
</style>