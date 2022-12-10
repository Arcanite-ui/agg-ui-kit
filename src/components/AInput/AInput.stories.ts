import { Meta, StoryFn } from "@storybook/vue3"
import AInput from "./AInput.vue"

export default {
	title: "Components/Input",
	component: AInput,
	argTypes: {
		accept: {
			description: "A RegEx that is applied for the input value",
		},
		autocomplete: {
			description: "An HTML value for 'autocomplete' attribute for the input element",
		},
		debounceTime: {
			description: "Sets delay for postponed update model value in 'ms'",
		},
		debounced: {
			description: "Sets postponed update model value. Time for debouncing might be set via 'debounce-time' prop",
		},
		disabled: {
			description: "Sets the input to the disabled state",
		},
		error: {
			description: "Sets the input to the error state",
		},
		hint: {
			description: "A message which is shown under the input",
		},
		id: {
			description: "An ID HTML name for the input element",
		},
		label: {
			description: "An input label",
		},
		name: {
			description: "A HTML name for the input element",
		},
		placeholder: {
			description: "A message that is used as a placeholder",
		},
		prefix: {
			description: "A message that is shown before the input",
		},
		"prefix-icon": {
			table: {
				type: {
					summary: null,
				},
			},
			control: {
				type: "text",
			},
			description: "Use this slot to place an icon on the prefix place",
		},
		required: {
			description: "Sets the input to be required",
		},
		size: {
			description: "Size of the input",
			control: {
				options: ["sm", "md", "lg"],
				type: "select",
			},
		},
		success: {
			description: "Sets the input to the success state",
		},
		suffix: {
			description: "A message which is shown after the input",
		},
		"suffix-icon": {
			table: {
				type: {
					summary: null,
				},
			},
			control: {
				type: "text",
			},
			description: "Use this slot to place an icon on the suffix place",
		},
		trim: {
			description: "Enables or disables whitespaces before and after in the input value",
		},
		type: {
			description: "An HTML Input type for the input element",
		},
	},
} as Meta<typeof AInput>

const Template: StoryFn<typeof AInput> = (args) => ({
	components: { AInput },
	setup() {
		return { args }
	},
	template: `
		<AInput v-bind="args">
		<template v-if="${!!args["prefix-icon"]}" #prefix-icon>
			${args["prefix-icon"]}
		</template>
		<template v-if="${!!args["suffix-icon"]}" #suffix-icon>
			${args["suffix-icon"]}
		</template>
		</AInput>
	`,
})

export const Default = Template.bind({})
Default.args = {
	label: "Default",
}

export const Small = Template.bind({})
Small.args = {
	label: "Small",
	size: "sm",
}

export const Large = Template.bind({})
Large.args = {
	label: "Large",
	size: "lg",
}

export const Mandatory = Template.bind({})
Mandatory.args = {
	label: "Mandatory",
	required: true,
}

export const Disabled = Template.bind({})
Disabled.args = {
	label: "Disabled",
	placeholder: "Something cool...",
	disabled: true,
}

export const Error = Template.bind({})
Error.args = {
	label: "Error",
	hint: "This field is required!",
	error: true,
	required: true,
}

export const Success = Template.bind({})
Success.args = {
	label: "Success",
	hint: "Sounds good!",
	success: true,
	required: true,
}

export const WithPlaceholder = Template.bind({})
WithPlaceholder.args = {
	label: "W/ Placeholder",
	placeholder: "Something cool...",
}

export const WithHint = Template.bind({})
WithHint.args = {
	label: "W/ Supporting Text",
	hint: "Supporting text goes here!",
}

export const WithPrefix = Template.bind({})
WithPrefix.args = {
	label: "W/ Prefix",
	prefix: "USD",
}

export const WithSuffix = Template.bind({})
WithSuffix.args = {
	label: "W/ Suffix",
	suffix: "%",
}

export const WithPrefixIcon = Template.bind({})
WithPrefixIcon.args = {
	label: "W/ Prefix Icon",
	"prefix-icon": `
		<svg viewBox="0 0 16 16">
			<path d="M11.7.3c-.4-.4-1-.4-1.4 0l-10 10c-.2.2-.3.4-.3.7v4c0 .6.4 1 1
			1h4c.3 0 .5-.1.7-.3l10-10c.4-.4.4-1 0-1.4l-4-4zM4.6 14H2v-2.6l6-6L10.6
			8l-6 6zM12 6.6L9.4 4 11 2.4 13.6 5 12 6.6z">
			</path>
		</svg>
	`,
}

export const WithSuffixIcon = Template.bind({})
WithSuffixIcon.args = {
	label: "W/ Suffix Icon",
	"suffix-icon": `
		<svg viewBox="0 0 16 16">
			<path d="M11.7.3c-.4-.4-1-.4-1.4 0l-10 10c-.2.2-.3.4-.3.7v4c0 .6.4 1 1
			1h4c.3 0 .5-.1.7-.3l10-10c.4-.4.4-1 0-1.4l-4-4zM4.6 14H2v-2.6l6-6L10.6
			8l-6 6zM12 6.6L9.4 4 11 2.4 13.6 5 12 6.6z">
			</path>
		</svg>
	`,
}

export const WithAcceptance = Template.bind({})
WithAcceptance.args = {
	label: "Acceptance",
	hint: "It is allowed to use only Latin letters",
	accept: "[A-Za-z0-9]",
}

export const Debounced = Template.bind({})
Debounced.args = {
	label: "Debounced",
	debounced: true,
	debounceTime: 1000,
}
