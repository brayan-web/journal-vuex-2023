<template>
  <button class="sbtn-floating">
    <svg
    v-if="icon === 'icon-tabler-plus'"
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-plus"
      width="40"
      height="40"
      viewBox="0 0 24 24"
      stroke-width="2"
      stroke="currentColor"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M12 5l0 14"></path>
      <path d="M5 12l14 0"></path>
    </svg>

    <svg
    v-if="icon === 'icon-tabler-device-floppy'"

      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-device-floppy"
      width="40"
      height="40"
      viewBox="0 0 24 24"
      stroke-width="2"
      stroke="currentColor"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path
        d="M6 4h10l4 4v10a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2"
      ></path>
      <path d="M12 14m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
      <path d="M14 4l0 4l-6 0l0 -4"></path>
    </svg>
  </button>
</template>
<script>
export default {
  props: {
    icon: {
      type: String,
      
    },
  },
  computed: {
  },
  mounted() {
    console.log(this.icon);
  },
};
</script>
