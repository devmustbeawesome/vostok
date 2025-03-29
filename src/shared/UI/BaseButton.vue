<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <button class="base-button">
    <slot>button</slot>
  </button>
</template>
<style>
.base-button {
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid var(--color-border);
  border-radius: 0.5rem;
  cursor: pointer;
  background-color: var(--color-background-mute);
  color: var(--color-text);
}

.base-button:hover {
  border-color: var(--color-border-hover);
}
</style>
