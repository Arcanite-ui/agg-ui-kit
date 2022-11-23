import vue from "@vitejs/plugin-vue"
import { visualizer } from "rollup-plugin-visualizer"
import { defineConfig } from "vite"
import dts from "vite-plugin-dts"
import eslintPlugin from "vite-plugin-eslint"
import svgLoader from "vite-svg-loader"
import { fileURLToPath, URL } from "node:url"
import path from "path"

export default defineConfig({
	build: {
		lib: {
			entry: path.resolve(__dirname, "src/index.ts"),
			name: "ui",
			fileName: (format) => `ui.${format}.js`,
		},
		rollupOptions: {
			external: ["vue"],
			output: {
				globals: {
					vue: path.resolve("./node_modules/vue"),
				},
			},
			plugins: [visualizer()],
		},
	},
	plugins: [
		vue(),
		dts(),
		svgLoader({
			defaultImport: "url",
		}),
		eslintPlugin({
			include: ["src/**/*.ts", "src/**/*.vue", "src/*.ts", "src/*.vue"],
		}),
	],
	resolve: {
		alias: {
			"@": fileURLToPath(new URL("./src", import.meta.url)),
		},
	},
})
