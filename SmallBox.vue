<template>
  <div class="root" v-on:click="onClick"></div>
</template>

<script>
function isInDOM(element) {
  return document.body.contains(element);
}

export default {
  name: 'small-box',
  props: ['onClick'],
  beforeDestroy() {
    console.log('This should be true (beforeDestroy)', isInDOM(this.$el));
  },
  destroyed() {
    console.log('This should be false (destroyed)', isInDOM(this.$el));
  },
  mounted() {
    console.log('This should be true (mounted)', isInDOM(this.$el));
  },
}
</script>

<style scoped>
.root {
  background-color: blue;
  width: 100px;
  height: 100px;
}
</style>
