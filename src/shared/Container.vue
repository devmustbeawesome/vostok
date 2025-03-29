<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="container">
    <slot />
  </div>
</template>
<style>
.container {
  width: 100%;
}
@media (min-width: 575.98px) {
  .container {
    max-width: 540px;
    margin: auto;
    padding: 0;
  }
}

@media (min-width: 767.98px) {
  .container {
    max-width: 720px;
  }
}

@media (min-width: 991.98px) {
  .container {
    max-width: 960px;
  }
}

@media (min-width: 1199.98px) {
  .container {
    max-width: 1140px;
  }
}
</style>
