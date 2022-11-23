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
			control: {
				type: "text",
			},
			description: "Use this slot to place content inside the button",
		},
		icon: {
			table: {
				type: {
					summary: null,
				},
			},
			control: {
				type: "text",
			},
			description: "Use this slot to place an icon inside the button",
		},
		appearance: {
			description: "Appearance of the button",
			control: {
				options: ["primary", "secondary", "tertiary", "danger"],
				type: "select",
			},
		},
		size: {
			description: "Size of the button",
			control: {
				options: ["xs", "sm", "md", "lg"],
				type: "select",
			},
		},
	},
} as Meta<typeof AButton>

const Template: StoryFn<typeof AButton> = (args) => ({
	components: { AButton },
	setup() {
		return { args }
	},
	template: `
		<AButton v-bind="args">
		{{ args.default }}
		<template v-if="${!!args["icon"]}" #icon>
			${args["icon"]}
		</template>
		</AButton>
	`,
})

export const Primary = Template.bind({})
Primary.args = {
	default: "Button",
}

export const WithIcon = Template.bind({})
WithIcon.args = {
	default: "Button",
	icon: `
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
		<path d="M432 256C432 269.3 421.3 280 408 280h-160v160c0 13.25-10.75 24.01-24 24.01S200 453.3 200
		440v-160h-160c-13.25 0-24-10.74-24-23.99C16 242.8 26.75 232 40 232h160v-160c0-13.25 10.75-23.99
		 24-23.99S248 58.75 248 72v160h160C421.3 232 432 242.8 432 256z"/>
	 </svg>
	`,
}

export const IconButton = Template.bind({})
IconButton.args = {
	icon: `
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
		<path d="M432 256C432 269.3 421.3 280 408 280h-160v160c0 13.25-10.75 24.01-24 24.01S200 453.3 200
		440v-160h-160c-13.25 0-24-10.74-24-23.99C16 242.8 26.75 232 40 232h160v-160c0-13.25 10.75-23.99
		 24-23.99S248 58.75 248 72v160h160C421.3 232 432 242.8 432 256z"/>
	 </svg>
	`,
}
