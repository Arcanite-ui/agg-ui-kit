import { addons, makeDecorator } from "@storybook/addons"
import kebabCase from "lodash.kebabcase"
import { h, onMounted } from "vue"

export const SNIPPET_RENDERED = `storybook/docs/snippet-rendered`

function templateSourceCode(templateSource, args, argTypes, componentTag) {
	const componentArgs = {}
	const componentSlots = {}

	for (const [k, t] of Object.entries(argTypes)) {
		const val = args[k]
		if (
			typeof val !== "undefined" &&
			t.table &&
			t.table.category === "props" &&
			val !== t.defaultValue &&
			val !== t.table.defaultValue?.summary?.replace(/["']/g, "")
		) {
			componentArgs[k] = val
		}

		if (typeof val !== "undefined" && t.table && t.table.category === "slots" && val !== t.defaultValue) {
			componentSlots[k] = val
		}
	}

	const propToSource = (key, val) => {
		const type = typeof val
		switch (type) {
			case "boolean":
				return val ? key : ""
			case "string":
				return `${key}="${val}"`
			default:
				return `:${key}="${val}"`
		}
	}

	const props = Object.keys(componentArgs)
		.map((key) => " " + propToSource(kebabCase(key), args[key]))
		.join("")

	const slotToSource = (slotKey, slotValue) => {
		switch (slotKey) {
			case "default":
				return slotValue
			default:
				return `
						<template #${slotKey}>
							${slotValue}
						</template>
					`
		}
	}

	const content = Object.keys(componentSlots)
		.map((slotKey) => " " + slotToSource(kebabCase(slotKey), args[slotKey]))
		.join("")

	return `
    <${componentTag} ${props}>${content}</${componentTag}>
  `
}

export const withSource = makeDecorator({
	name: "withSource",
	wrapper: (storyFn, context) => {
		const story = storyFn(context)

		return {
			components: {
				Story: story,
			},
			setup() {
				onMounted(() => {
					try {
						const src = context.originalStoryFn(context.args, context).template
						const code = templateSourceCode(src, context.args, context.argTypes, context.component.__name)

						const channel = addons.getChannel()

						const emitFormattedTemplate = async () => {
							const prettier = await import("prettier/standalone")
							const prettierHtml = await import("prettier/parser-html")

							// emits an event  when the transformation is completed
							channel.emit(
								SNIPPET_RENDERED,
								(context || {}).id,
								prettier.format(`<template>${code}</template>`, {
									parser: "vue",
									plugins: [prettierHtml],
									htmlWhitespaceSensitivity: "ignore",
								}),
							)
						}

						setTimeout(emitFormattedTemplate, 0)
					} catch (e) {
						console.warn("Failed to render code", e)
					}
				})

				return () => h(story)
			},
		}
	},
})
