<script setup lang="ts">
defineOptions({
  inheritAttrs: false,
})
const props = defineProps<{ id: string; label?: string }>()
const model = defineModel()
</script>

<template>
  <div class="base-select__wrapper">
    <label v-if="props.label" :for="props.id">{{ props.label }}</label>
    <select class="base-select" v-model="model">
      <slot>
        <option value="" disabled>choose something</option>
      </slot>
    </select>
  </div>
</template>

<style>
.base-select__wrapper {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: flex-start;
  gap: 0.5rem;
}
.base-select {
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid var(--color-border);
  border-radius: 0.5rem;
  cursor: pointer;
  background-color: var(--color-background-mute);
  color: var(--color-text);
  width: 100%;
}

.base-select:hover {
  border-color: var(--color-border-hover);
}
.base-select:focus {
  border-color: var(--color-border-hover);
}
</style>
