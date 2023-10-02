<template>
    <Navbar/>
    <div class="d-flex">
        <div class="col col-4">
            <EntryList/>

        </div>
        <div class="col col-8 daybook-routerview">
            <router-view/>
        </div>
    </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
export default {
    components: {
        Navbar: defineAsyncComponent(() => import('../components/Navbar.vue')),
        EntryList: defineAsyncComponent(() => import('../components/EntryList.vue'))
    }
}
</script>