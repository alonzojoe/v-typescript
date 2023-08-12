<template>
    <div class="accordion" id="accordionExample">
        <div class="accordion-item">
          <!-- <h2 class="accordion-header mx-4 mb-1">
            <a class="fs-6 text-comment" href="javascript:void(0)" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"><i class='bx bxs-message-rounded-dots'></i> Comments</a>
          </h2> -->
          <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <div class="d-flex justify-content-start align-items-center mb-2">
                <!-- <img :src="post.owner.picture" class="cursor-pointer rounded-circle cst-img-comment border border-primary" alt="..."> -->
                <div class="d-flex align-items-center border rounded mx-2">
                  <div class="row p-0 m-0">
                    <div class="col-12 p-0 m-0">
                      <div class="d-flex align-items-center">
                        <!-- <router-link :to="{name: 'profile', params: { id: post.owner.id } }" class="mx-2 fs-7 text-decoration-none">{{ post.owner.title }}. {{ post.owner.firstName }} {{ post.owner.lastName }}</router-link>
                        <p class="mx-2 fs-6 text-secondary p-0 m-0">{{post.publishDate}}</p> -->
                      </div>
                    </div>
                    <div class="col-12 p-0 m-0">
                      <p class="mx-2 fs-6 text-secondary p-0 m-0">Nice Dog</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
</template>

<script setup>

</script>

<style scoped>
.text-comment{
  text-decoration: none;
}
</style>
