<template>
    <div>


        <NavBar class="bx-shadow"/>
        <div class="container mx-auto">
            <router-view class="mt-4"/>
        </div>

    </div>
</template>

<script lang="ts" setup>
import NavBar from '../components/NavBar.vue'
</script>


<style>
    .bx-shadow{
        border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    }
</style>

