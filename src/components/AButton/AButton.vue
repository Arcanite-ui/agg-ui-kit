<template>
	<button class="btn" :class="{ disabled, ghost, [size]: true, [appearance]: true }" :disabled="disabled">
		<span v-if="$slots.icon" class="icon__container">
			<slot name="icon" />
		</span>
		<span v-if="isDefaultSlotExists"><slot /></span>
	</button>
</template>

<script lang="ts" setup>
import { hasDefaultSlot } from "@/utils/hasDefaultSlot"

type ButtonSize = "xs" | "sm" | "md" | "lg"
type ButtonAppearance = "primary" | "secondary" | "tertiary" | "danger" | "success"

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

const isDefaultSlotExists = hasDefaultSlot()
</script>

<style lang="scss" scoped src="./AButton.styles.scss" />
