<template>
    <div class="accordion" id="accordionExample">
        <div class="accordion-item">
          <!-- <h2 class="accordion-header mx-4 mb-1">
            <a class="fst-custom text-comment" href="javascript:void(0)" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"><i class='bx bxs-message-rounded-dots'></i> Comments</a>
          </h2> -->
          <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <div v-for="c in postComments" :key="c.id" class="d-flex justify-content-start align-items-center mb-2">
                <img :src="c.owner.picture" class="cursor-pointer rounded-circle cst-img-comment border border-primary" alt="...">
                <div class="d-flex align-items-center border rounded mx-2">
                  <div class="row p-0 m-0">
                    <div class="col-12 p-0 m-0">
                      <div class="d-flex align-items-center">
                        <router-link :to="{name: 'profile', params: { id: c.owner.id } }" class="mx-2 fst-custom text-decoration-none">{{ c.owner.title }}. {{ c.owner.firstName }} {{ c.owner.lastName }}</router-link>
                        <p class="mx-2 fst-custom text-secondary p-0 m-0">{{c.publishDate}}</p>
                      </div>
                    </div>
                    <div class="col-12 p-0 m-0">
                      <p class="mx-2 fst-custom text-dark p-0 m-0">{{c.message}}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div v-if="!postComments.length">
                <p class="mx-2 fst-custom text-dark p-0 m-0">No comments available</p>
              </div>
            </div>
          </div>
        </div>
      </div>
</template>

<script lang="ts">
import { onMounted, ref } from 'vue';
import { useStore } from 'vuex';

export default {
  props: [
    'postId'
  ],

  setup(props) {
      const store = useStore()
      const postComments = ref([])

      onMounted(async () => {
          await store.dispatch('fetchPostComments', props.postId)
          postComments.value = store.getters.getPostComments
      })

      return {
        postComments
      }
  }
}

</script>

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

.fst-custom{
  font-size: 12px;
}
</style>
