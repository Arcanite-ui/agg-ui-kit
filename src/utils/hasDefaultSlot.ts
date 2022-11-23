import { computed, useSlots } from "vue"

export const hasDefaultSlot = () => {
	const slots = useSlots()

	return computed(() => {
		const defaultSlot = slots?.default

		if (!defaultSlot) {
			return false
		}

		const defaultSlotContent = defaultSlot()
		const defaultSlotChild = defaultSlotContent[0]

		if (!defaultSlotChild) {
			return false
		}

		return !!defaultSlotChild.children?.toString().trim()
	})
}
