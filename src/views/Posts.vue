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
    import { computed, onMounted } from 'vue';
    import { useStore } from 'vuex';
    import CardPost from '../components/CardPost.vue';
    import store from '../store';

    const posts = computed(() => store.getters.getPersonPosts)

    onMounted(() => {
        store.dispatch('fetchPosts')
    })

</script>
