<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  <CompositionButton label="My Composition Button" primary="true" />
  <AnnotationButton label="My Annotiation Button" />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import HelloWorld from "./components/HelloWorld.vue";
import CompositionButton from "./stories/composition/CompositionButton.vue";
import AnnotationButton from "./stories/annotation/AnnotationButton.vue";

@Options({
  components: {
    HelloWorld,
    CompositionButton,
    AnnotationButton
  }
})
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
