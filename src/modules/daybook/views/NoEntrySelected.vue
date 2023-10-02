<template>
    <div class="no-entry-container">
        <h1>No hay Nada Seleccionado</h1>
    </div>
    <Fab :icon="icon"/>
</template>

<script>
import { defineAsyncComponent } from "vue";
export default {
    components: {
        Fab:  defineAsyncComponent(() => import('../components/Fab.vue'))
    },
    data() {
        return {
            icon: 'icon-tabler-plus'
        }
    },
}
</script>