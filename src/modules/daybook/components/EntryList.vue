<template>
    <div class="entry-list__container">
      <div class="px-2 pt-2">
            <input type="text" class="form-control form-control-lg" placeholder="Buscar Entrada">
      </div>
      <div class="entry-scrollarea">
      
           <Entry v-for="(item, index) in 100" :key="index"/>
      </div>
    </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';
export default {
    components:{
        Entry: defineAsyncComponent(() => import('./Entry.vue'))
    },
    mounted(){
        
    }
}
</script>