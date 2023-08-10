<template>
    <div class="container-fluid">
        <div class="dflex justify-content-center">
            {{ profile }}
        </div>
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

    onMounted(()=> {
        store.dispatch('viewProfile', route.params.id)
    })
</script>
