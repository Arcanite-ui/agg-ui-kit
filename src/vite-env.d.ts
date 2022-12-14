/// <reference types="vite/client" />
/// <reference types="vite-svg-loader" />

declare module "*.vue" {
	import type { DefineComponent } from "vue"
	// eslint-disable-next-line @typescript-eslint/ban-types
	const component: DefineComponent<{}, {}, never>
	export default component
}
