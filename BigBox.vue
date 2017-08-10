<template>
  <div class="root" v-on:click="onClick"></div>
</template>

<script>
export default {
  name: 'big-box',
  props: ['onClick'],
}
</script>

<style scoped>
.root {
  background-color: blue;
  width: 400px;
  height: 400px;
}
</style>
