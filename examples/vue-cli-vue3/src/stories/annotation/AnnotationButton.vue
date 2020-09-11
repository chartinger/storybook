<template>
  <button type="button" :class="classes" @click="onClick" :style="style">
    Class: {{ label }}
  </button>
</template>

<script lang="ts">
import "../button.css";
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    label: {
      type: String,
      required: true
    },
    primary: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: "medium"
    },
    backgroundColor: {
      type: String
    }
  }
})
export default class HelloWorld extends Vue {
  label!: string;
  primary!: boolean;
  size!: string;
  backgroundColor!: string;

  get classes(): {} {
    return {
      "storybook-button": true,
      "storybook-button--primary": this.primary,
      "storybook-button--secondary": !this.primary,
      [`storybook-button--${this.size}`]: true
    };
  }

  get style(): {} {
    return {
      backgroundColor: this.backgroundColor
    };
  }

  onClick(): void {
    this.$emit("on-click");
  }
}
</script>
