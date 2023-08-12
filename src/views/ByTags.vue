<template>
    <div class="row">
        <div v-for="(post, index) in posts" :key="post.id" class="col-sm-12 col-md-12 col-lg-12 mb-3">
            <div class="d-flex justify-content-center">
                <CardPost :post="post"/>
            </div>
        </div>
    </div>

</template>

<script lang="ts" setup>
    import { computed, onMounted, onBeforeMount, watchEffect, watch } from 'vue';
    import { useStore } from 'vuex';
    import { useRoute } from 'vue-router';
    import CardPost from '../components/CardPost.vue';
    import store from '../store';

    const route = useRoute()
    const posts = computed(() => store.getters.getPostByTag)

    onBeforeMount(() => {
        // store.commit('setPostEmpty')
    })

    onMounted(async () => {
        await store.dispatch('fetchPostByTag', route.params.tag)
    })

    watchEffect(async ()=> {
        route.params.tag
        store.commit('setPostsByTagEmpty')
        await store.dispatch('fetchPostByTag', route.params.tag)
    })

</script>
