<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
    post: object
}>()

const emit = defineEmits()


</script>

<template>
  <div class="card" style="width: 30rem;">
    <div class="card-body">
      <div class="d-flex justify-content-start align-items-center mb-2">
        <img :src="post.owner.picture" class="cursor-pointer rounded-circle cst-img border border-primary" alt="...">
        <div>
            <router-link :to="{name: 'profile', params: { id: post.owner.id } }" class="mx-2 fs-6 text-decoration-none">{{ post.owner.title }}. {{ post.owner.firstName }} {{ post.owner.lastName }}</router-link>
            <p class="mx-2 fs-6 text-secondary p-0 m-0">{{post.publishDate}}</p>
        </div>
      </div>
      <div class="row p-0 m-0">
        <div class="col-12">
            <p class="mb-1">{{post.text}}</p>
            <img :src="post.image" class="img-fluid shadow p-0 bg-body-tertiary rounded" alt="...">
        </div>
        <div class="col-12 mt-2">
            <div class="d-flex justify-content-between align-items-center">
                <div>
                    <span v-for="t in post.tags" class="badge text-bg-secondary mx-1">#{{t}}</span>
                </div>
                <span><i class='bx bxs-like text-primary'></i> {{post.likes}} {{post.likes > 2 ? 'likes' : 'like'}}</span>
            </div>
        </div>
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
