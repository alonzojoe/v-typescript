<template>
    <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary border-bottom-shadow fixed-top bg-dark" data-bs-theme="dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">V-Typescript</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                    <router-link :to="{name: 'persons'}" class="nav-link active" aria-current="page">Persons</router-link>
                    </li>
                    <li class="nav-item">
                    <router-link :to="{name: 'posts'}" class="nav-link">NewsFeed</router-link>
                    </li>
                    <!-- <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Dropdown
                    </a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><hr class="dropdown-divider"></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link disabled" aria-disabled="true">Disabled</a>
                    </li> -->
                </ul>

                </div>
            </div>
        </nav>
    </div>
</template>

<script lang="ts" setup>
import { watch, ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';


</script>

<style scoped>
.border-bottom-shadow {
    border-bottom: .1rem solid rgba(0, 0, 0, 0.2) !important;
}
</style>
