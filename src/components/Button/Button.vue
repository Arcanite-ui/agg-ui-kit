<template>
  <button
      class="btn"
      :class="{disabled, danger,success}"
      :disabled="disabled"
  >
    <slot/>
  </button>
</template>


<script lang="ts" setup>
interface ButtonProps {
  disabled?: boolean
  success?: boolean
  danger?: boolean
}

withDefaults(defineProps<ButtonProps>(), {
  disabled: false,
  success: false,
  danger: false
})
</script>

<style lang="scss" scoped src="./Button.styles.scss"/>

