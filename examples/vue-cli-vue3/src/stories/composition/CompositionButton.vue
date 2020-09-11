<template>
  <button type="button" :class="classes" @click="onClick" :style="style">
    {{ label }}
  </button>
</template>

<script lang="ts">
import "../button.css";
import { defineComponent, computed } from "vue";
export default defineComponent({
  name: "composition-button",

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
  },
  setup(props, context) {
    const classes = computed(() => {
      return {
        "storybook-button": true,
        "storybook-button--primary": props.primary,
        "storybook-button--secondary": !props.primary,
        [`storybook-button--${props.size}`]: true
      };
    });

    const style = computed(() => {
      return {
        backgroundColor: props.backgroundColor
      };
    });

    const onClick = function() {
      context.emit("on-click");
    };

    return {
      classes,
      style,
      onClick
    };
  }
});
</script>
