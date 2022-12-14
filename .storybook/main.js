const path = require("path")
const toPath = (filePath) => path.join(process.cwd(), filePath)

module.exports = {
	stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
	addons: ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-interactions"],
	framework: "@storybook/vue3",
	core: {
		builder: "@storybook/builder-vite",
	},
	features: {
		storyStoreV7: true,
	},
	async viteFinal(config, { configType }) {
		if (configType === "PRODUCTION") {
			config.base = "./"
		}

		return {
			...config,
			resolve: {
				...config.resolve,
				alias: {
					...config.resolve.alias,
					"@": toPath("src"),
				},
			},
		}
	},
}
