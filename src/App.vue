<template>
  <div class="section">
    <div class="container">
      <!-- here we have simple upload component -->
      <simple-upload />
    </div>
  </div>
</template>

<script>
import SimpleUpload from './SimpleUpload.vue';

export default {
  name: 'App',
  components: {SimpleUpload}
}
</script>

<style>
</style>
