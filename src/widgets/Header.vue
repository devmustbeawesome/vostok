<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import Container from '@/shared/Container.vue'
import { ref } from 'vue'
const links = ref<Array<{ name: string; title: string }>>([
  { name: 'form', title: 'Form' },
  { name: 'shift', title: 'Shift' },
])
</script>

<template>
  <header class="header">
    <Container>
      <ul class="nav-list" role="navigation">
        <li v-for="(link, index) in links" :key="index">
          <RouterLink
            :to="{ name: link.name }"
            :text="link.title"
            class="nav-list__link"
            activeClass="nav-list__link--active"
          ></RouterLink>
        </li>
      </ul>
    </Container>
  </header>
</template>
<style scoped>
header {
  padding: 10px 20px;
  border-bottom: #00bd7e solid 1px;
}
.nav-list {
  list-style: none;
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: flex-start;
  align-items: center;
  padding: 0;
  gap: 1rem;
}
.nav-list__link {
  font-size: 1.5rem;
  color: var(--color-text);
  text-decoration: none;
}
.nav-list__link:hover {
  background-color: var(--color-background-mute);
  border-radius: 1rem;
}
.nav-list__link--active {
  color: var(--color-heading);
  text-decoration: underline var(--color-heading);
}
</style>
