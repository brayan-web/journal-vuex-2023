<template>
  <div class="entry-view d-flex justify-content-between p-2 container">
    <div class="entry-view-title">
      <span class="entry-view-title__day">15</span>
      <span class="entry-view-title__month mx-2">Julio</span>
      <span class="entry-view-title__year mx-4">2023, Lunes</span>
    </div>
    <div class="entry-view-buttons">
      <button class="sbtn-delete mx-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-trash"
          width="30"
          height="30"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M4 7l16 0"></path>
          <path d="M10 11l0 6"></path>
          <path d="M14 11l0 6"></path>
          <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"></path>
          <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"></path>
        </svg>
      </button>

      <button class="sbtn-upload">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-upload"
          width="30"
          height="30"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2"></path>
          <path d="M7 9l5 -5l5 5"></path>
          <path d="M12 4l0 12"></path>
        </svg>
      </button>
    </div>
  </div>
  <hr>
  <div class="d-flex flex-column px-3">
    <textarea class="entry-view-textarea" placeholder="Que sucedio hoy?"></textarea>
  </div>
  <Fab :icon="icon"/>

  <img src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(15).webp" alt="entry-picture" class="img-thumbnail entry-view-img">
</template>

<script>
import {defineAsyncComponent} from 'vue'
export default {
    components: {
        Fab: defineAsyncComponent(() => import('../components/Fab.vue'))
    },
    data() {
        return {
            icon: 'icon-tabler-device-floppy'
        }
    },
}
</script>
