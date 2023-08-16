<template>
    <div class="row">
        <div class="col-12">
            <div v-if="isLoadingPost" class="d-flex justify-content-center align-items-center">
                <div class="spinner-border text-secondary" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>
        </div>
        <div v-if="!isLoadingPost && posts.length" v-for="(post, index) in posts" :key="post.id" class="col-sm-12 col-md-12 col-lg-12 mb-3">
            <div class="d-flex justify-content-center">
                <CardPost :post="post" />
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { computed, onMounted, ref } from 'vue';
import { useStore } from 'vuex';
import CardPost from '../components/CardPost.vue';

const store = useStore()

const isLoadingPost = ref(false)
const posts = computed(() => store.getters.getPersonPosts)

onMounted(async () => {
    isLoadingPost.value = true
    await store.dispatch('fetchPosts')
    isLoadingPost.value = false
})

</script>
