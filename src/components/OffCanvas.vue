<template>
    <div>
      <!-- Toggle button for small screens -->
      <button class="btn btn-primary d-lg-none" type="button" @click="toggleOffcanvas">
        Toggle offcanvas
      </button>
  
      <!-- Offcanvas element -->
      <div
        class="offcanvas-lg offcanvas-end"
        :class="{ 'show': showOffcanvas }"
        tabindex="-1"
        id="offcanvasResponsive"
        aria-labelledby="offcanvasResponsiveLabel"
      >
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasResponsiveLabel">Responsive offcanvas</h5>
          <button
            type="button"
            class="btn-close"
            @click="toggleOffcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
          <p class="mb-0">This is content within an <code>.offcanvas-lg</code>.</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  
  export default {
    setup() {

      const showOffcanvas = ref(false);
  

      const toggleOffcanvas = () => {
        showOffcanvas.value = !showOffcanvas.value;
      };
  
      return {
        showOffcanvas,
        toggleOffcanvas,
      };
    },
  };
  </script>
  