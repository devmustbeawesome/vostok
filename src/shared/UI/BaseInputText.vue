<script setup lang="ts">
defineOptions({
  inheritAttrs: false,
})
const props = defineProps<{ id: string; label?: string }>()
</script>

<template>
  <div class="base-input-text__wrapper">
    <label v-if="props.label" :for="props.id">{{ props.label }}</label>
    <input type="text" class="base-input-text" v-bind="$attrs" />
  </div>
</template>
<style>
.base-input-text__wrapper {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: flex-start;
  gap: 0.5rem;
}
.base-input-text {
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid var(--color-border);
  border-radius: 0.5rem;
  cursor: pointer;
  background-color: var(--color-background-mute);
  color: var(--color-text);
  width: 100%;
}

.base-input-text:hover {
  border-color: var(--color-border-hover);
}
.base-input-text:focus {
  border-color: var(--color-border-hover);
}
</style>
