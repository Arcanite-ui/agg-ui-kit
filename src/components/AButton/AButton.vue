<template>
	<button class="btn" :class="{ disabled, ghost, [size]: true, [appearance]: true }" :disabled="disabled">
		<span v-if="$slots['icon']" class="icon__container">
			<slot name="icon" />
		</span>
		<span v-if="hasDefaultSlot"><slot /></span>
	</button>
</template>

<script lang="ts" setup>
import { computed, useSlots, Comment } from "vue"

type ButtonSize = "xs" | "sm" | "md" | "lg"
type ButtonAppearance = "primary" | "secondary" | "tertiary" | "danger"

interface ButtonProps {
	disabled?: boolean
	size?: ButtonSize
	appearance?: ButtonAppearance
	ghost?: boolean
}

withDefaults(defineProps<ButtonProps>(), {
	disabled: false,
	size: "md",
	ghost: false,
	appearance: "primary",
})

const slots = useSlots()

const hasDefaultSlot = computed(() => {
	return slots.default && slots.default().filter((o) => o.type !== Comment).length
})
</script>

<style lang="scss" scoped src="./AButton.styles.scss" />
