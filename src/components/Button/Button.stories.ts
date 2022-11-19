import Button from './Button.vue';

import {Meta, StoryFn} from '@storybook/vue3';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    default: {
      table: {
        category: "Slots",
        type: {
          summary: null,
        },
      },
      description: "Use this slot to place content inside the button",
    },
  }
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = (args) => ({
  components: {Button},
  setup() {
    return {args};
  },
  template: `
    <Button v-bind="args">
      {{args.default}}
    </Button>
  `,
});

export const Primary = Template.bind({});
Primary.args = {
  default: "Button",
};
