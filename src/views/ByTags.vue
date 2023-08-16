<template>
    <div class="row">
        <div class="col-12">
            <div v-if="isLoadingPosts" class="d-flex justify-content-center align-items-center">
                <div class="spinner-border text-secondary" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>
        </div>
        <div v-if="!isLoadingPosts" v-for="(post, index) in posts" :key="post.id" class="col-sm-12 col-md-12 col-lg-12 mb-3">
            <div class="d-flex justify-content-center">
                <CardPost :post="post"/>
            </div>
        </div>
    </div>

</template>

<script lang="ts" setup>
    import { computed, onMounted, onBeforeMount, watchEffect, watch, ref } from 'vue';
    import { useStore } from 'vuex';
    import { useRoute } from 'vue-router';
    import CardPost from '../components/CardPost.vue';
    
    const store = useStore()

    const route = useRoute()
    const posts = computed(() => store.getters.getPostByTag)

    onBeforeMount(() => {
        // store.commit('setPostEmpty')
    })
    const isLoadingPosts = ref(false)
    onMounted(async () => {
        isLoadingPosts.value = true
        await store.dispatch('fetchPostByTag', route.params.tag)
        isLoadingPosts.value = false
    })

    watchEffect(async ()=> {
        route.params.tag
        isLoadingPosts.value = true
        store.commit('setPostsByTagEmpty')
        await store.dispatch('fetchPostByTag', route.params.tag)
        isLoadingPosts.value = false
    })

</script>
