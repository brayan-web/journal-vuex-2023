<template>
  <div class="hello">
    <button @click="gotoToDayBook" class="btn btn-primary">HOLA</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
 methods: {
  gotoToDayBook(){
    this.$router.push({name: 'no-entry'})
  }
 }
}
</script>


