import { withSource } from "./withSource"
import "../src/assets/main.scss"

export const parameters = {
	actions: { argTypesRegex: "^on[A-Z].*" },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
}

export const decorators = [
	/**
	 * TODO: Remove after closing this issue
	 * https://github.com/storybookjs/storybook/issues/13917
	 */
	withSource,
]
