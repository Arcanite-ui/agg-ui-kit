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
defineProps<{
  disabled?: boolean
  success?: boolean
  danger?: boolean
}>()
</script>

<style lang="scss" scoped src="./AButton.styles.scss"/>

