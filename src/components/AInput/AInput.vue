<template>
	<div class="a-input" :class="{ [size]: true, error, success }">
		<div class="inner__container">
			<label v-if="label" :for="id">{{ label }} <span v-if="required" class="required">*</span></label>
			<div
				class="input__container"
				:class="{
					'with-prefix': prefix || $slots['prefix-icon'],
					'with-suffix': suffix || $slots['suffix-icon'],
					disabled,
				}"
			>
				<div v-if="prefix || $slots['prefix-icon']" class="prefix__container">
					<span v-if="prefix">{{ prefix }}</span>
					<slot v-else name="prefix-icon" />
				</div>
				<input
					:id="id"
					:type="type"
					:placeholder="placeholder"
					:name="name"
					:disabled="disabled"
					:required="required"
					:value="modelValue"
					:autocomplete="autocomplete"
					@input="handleInput"
					@keyup="handleKeyDown"
					@blur="handleBlur"
				/>
				<div v-if="suffix || $slots['suffix-icon']" class="suffix__container">
					<span v-if="suffix">{{ suffix }}</span>
					<slot v-else name="suffix-icon" />
				</div>
			</div>
		</div>
		<div v-if="hint" class="hint-message__container">
			{{ hint }}
		</div>
	</div>
</template>

<script lang="ts" setup>
import { ref, toRefs } from "vue"

type InputSize = "sm" | "md" | "lg"

interface InputProps {
	modelValue?: number | string
	label?: string
	hint?: string
	prefix?: string
	suffix?: string
	name?: string
	accept?: string
	size?: InputSize
	placeholder?: string
	id?: string
	type?: string
	disabled?: boolean
	required?: boolean
	error?: boolean
	success?: boolean
	autocomplete?: string
	trim?: boolean
	debounced?: boolean
	debounceTime?: number
}

interface InputEmits {
	(e: "update:modelValue", value: number | string): void

	(e: "blur"): void
}

const props = withDefaults(defineProps<InputProps>(), {
	label: "",
	hint: "",
	size: "md",
	placeholder: "",
	type: "text",
	disabled: false,
	required: false,
	error: false,
	success: false,
	trim: false,
	autocomplete: "off",
	debounced: false,
})

const emit = defineEmits<InputEmits>()

const { trim, accept, debounced, debounceTime } = toRefs(props)
const timeout = ref<ReturnType<typeof setTimeout>>()
const localValue = ref("")

const handleInput = (event: Event) => {
	const target = event.target as HTMLInputElement
	const value = target.value

	if (!debounced.value) {
		emitUpdateModelValue(value)
	}

	if (timeout.value) {
		clearTimeout(timeout.value)
	}

	localValue.value = value
	timeout.value = setTimeout(() => {
		emitUpdateModelValue(value)
	}, debounceTime?.value || 500)
}

const emitUpdateModelValue = (value: string) => {
	if (trim.value) {
		value = value.replace(/\s/g, "")
	}

	emit("update:modelValue", value)
}

const handleBlur = () => {
	if (timeout.value) {
		clearTimeout(timeout.value)
		emitUpdateModelValue(localValue.value)
	}

	emit("blur")
}

const handleKeyDown = (event: Event) => {
	if (!accept?.value || typeof accept.value !== "string") {
		return
	}

	const acceptRegExp = new RegExp(accept.value, "ig")
	const key = (event as KeyboardEvent).key

	const isKeyValid = acceptRegExp.test(key)
	if (isKeyValid) {
		return
	}

	const target = event.target as HTMLInputElement
	target.value = target?.value.trim()
	event.preventDefault()
}
</script>

<style lang="scss" scoped src="./AInput.styles.scss" />
