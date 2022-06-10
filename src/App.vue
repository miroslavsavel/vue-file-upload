<template>
  <div class="section">
    <div class="container">
      <!-- here we have simple upload component -->
      <simple-upload />
    </div>
    <div class="d-flex justify-content-center">
            <div @click="selectedComponent = 'One'">RAW HEADER</div>
            <div @click="selectedComponent = 'Two'" style="color: red;">Processed Header</div>
            <div @click="selectedComponent = 'Three'">Three</div>
        </div>
        <div class="d-flex justify-content-center">
            <keep-alive>
                <component :is="selectedComponent"></component>
            </keep-alive>
        </div>
  </div>
</template>

<script>
import SimpleUpload from './SimpleUpload.vue';
import One from './components/OneComponent.vue';
import Two from './components/TwoComponent.vue';
import Three from './components/ThreeComponent.vue';

export default {
  name: 'App',
  components: {SimpleUpload, One, Two, Three},
  data() {
            return {
                selectedComponent: 'One'
            }
        }
}
</script>

<style>
</style>
