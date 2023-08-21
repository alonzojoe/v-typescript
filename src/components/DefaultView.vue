<template>
    <div>
        <NavBar class="bx-shadow" />
        <div class="container-fluid mt-navbar">
            <router-view class="mt-5" />
        </div>
    </div>
</template>

<script lang="ts" setup>
import NavBar from '../components/NavBar.vue'
</script>


<style>
.bx-shadow {
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
}

.mt-navbar {
    margin-top: 80px !important;
}
</style>

