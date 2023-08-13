<script lang="ts">
import { ref } from 'vue'
import Comments from './Comments.vue'
import { useRouter } from 'vue-router';
import { useRoute } from 'vue-router';


export default {
  props: [
    'post'
  ],
  
  components: {
    Comments,
  },

  setup(props) {
    const router = useRouter()
    const route = useRoute()

    const viewPostOnTag = (tag: string) => {
      router.push(`/bytag/${tag}`)
    }

    const showComments = ref(false)

    return {
      viewPostOnTag,
      route,
      showComments
    }

  }

}

</script>

<template>
  <div class="card" style="width: 30rem;">
    <div class="card-body">
      <div class="d-flex justify-content-start align-items-center mb-2">
        <img :src="post.owner.picture" class="cursor-pointer rounded-circle cst-img border border-primary" alt="...">
        <div>
          <router-link :to="{ name: 'profile', params: { id: post.owner.id } }" class="mx-2 fs-6 text-decoration-none">{{
            post.owner.title }}. {{ post.owner.firstName }} {{ post.owner.lastName }}</router-link>
          <p class="mx-2 fs-6 text-secondary p-0 m-0">{{ post.publishDate }}</p>
        </div>
      </div>
      <div class="row p-0 m-0">
        <div class="col-12">
          <p class="mb-1">{{ post.text }} {{ route.params.tag }}</p>
          <img :src="post.image" class="img-fluid shadow p-0 bg-body-tertiary rounded" alt="...">
        </div>
        <div class="col-12 mt-2">
          <div class="d-flex justify-content-between align-items-center">
            <div>
              <span v-for="t in post.tags" @click="viewPostOnTag(t)" class="cursor-pointer badge mx-1"
                :class="route.params.tag == t ? 'text-bg-primary' : 'text-bg-secondary'">#{{ t }}</span>
            </div>
            <span><i class='bx bxs-like text-primary'></i> {{ post.likes }} {{ post.likes > 2 ? 'likes' : 'like' }}</span>
          </div>
        </div>
      </div>
    </div>
    <h2 class="mx-4 mb-1">
      <a class="fs-6 text-comment" @click="showComments = true" href="javascript:void(0)">
        <i class='bx bxs-message-rounded-dots'></i> Comments
      </a>
    </h2>
    <Comments v-if="showComments" :postId="post.id"/>

  </div>


  <!-- <div class="card" style="width: 30rem;">
    <div class="card-body">
      <div class="d-flex justify-content-start align-items-center mb-2">
        <img src="../assets/placeholder.jpeg" class="cursor-pointer rounded-circle cst-img border border-secondary" alt="...">
        <div class="placeholder-glow" style="width: 60%;">
            <span class="mx-2 placeholder col-4"></span>
            <span class="mx-2 placeholder col-8"></span>
        </div>
        
      </div>
      <div class="row p-0 m-0 placeholder-glow">
        <div class="col-12">
            <p class="mb-1"><span class="placeholder col-8"></span></p>
            <svg class="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect></svg>
        </div>
        <div class="col-12 mt-0">
            <div class=" d-flex justify-content-between align-items-center">
                <div class="placeholder-glow" style="width: 80%">
                    <span class="placeholder col-8"></span>
                </div>
                <span class="placeholder col-1 bg-primary"></span>
            </div>
        </div>
      </div>
    </div>
  </div>  -->
</template>

<style scoped>
.cst-img {
  height: 3rem;
  width: auto;
}

.cst-img-comment {
  height: 2rem;
  width: auto;
}

.text-comment {
  text-decoration: none;
}

.cursor-pointer {
  cursor: pointer;
}
</style>
