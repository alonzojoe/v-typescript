<template>
    <div class="row">
        <div class="col-12">
            <div v-if="isLoadingPost" class="d-flex justify-content-center align-items-center">
                <div class="spinner-border text-secondary" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>
        </div>
        <div v-if="!isLoadingPost" v-for="(post, index) in posts" :key="post.id" class="col-sm-12 col-md-12 col-lg-12 mb-3">
            <div class="d-flex justify-content-center">
                <CardPost :post="post"/>
            </div>
        </div>
    </div>

</template>

<script lang="ts" setup>
    import { computed, onMounted, ref } from 'vue';
    import { useStore } from 'vuex';
    import { useRoute } from 'vue-router';
    import CardPost from '../components/CardPost.vue';
    

    const store = useStore()

    const route = useRoute()
    const posts = computed(() => store.getters.getPersonPosts)

    const isLoadingPost = ref(false)
    onMounted(async () => {
        isLoadingPost.value = true
        await store.dispatch('fetchPersonPosts', route.params.id)
        isLoadingPost.value = false
    })

</script>
