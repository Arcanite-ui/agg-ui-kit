import { Meta, StoryFn } from "@storybook/vue3"
import AButton from "./AButton.vue"

export default {
	title: "Components/Button",
	component: AButton,
	argTypes: {
		default: {
			table: {
				type: {
					summary: null,
				},
			},
			description: "Use this slot to place content inside the button",
		},
	},
} as Meta<typeof AButton>

const Template: StoryFn<typeof AButton> = (args) => ({
	components: { AButton },
	setup() {
		return { args }
	},
	template: `
		<AButton v-bind="args">{{ args.default }}</AButton>
	`,
})

export const Primary = Template.bind({})
Primary.args = {
	default: "Button",
}
