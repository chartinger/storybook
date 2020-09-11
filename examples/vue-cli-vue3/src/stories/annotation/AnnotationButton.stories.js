import AnnotationButton from "./AnnotationButton.vue";

export default {
  title: "Example/Annotation Api/Button",
  component: AnnotationButton
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: {
    AnnotationButton
  },
  template: '<annotation-button v-bind="$props" />'
});

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "Button"
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Button"
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  label: "Button"
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  label: "Button"
};
