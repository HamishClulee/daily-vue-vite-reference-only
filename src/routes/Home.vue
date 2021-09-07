<script setup>
import Icon from "../components/icon/Icon.vue";
import Button from "../components/buttons/Button.vue";
import MainLayout from "../components/layout/MainLayout.vue";
import RouterLink from "../components/router-link/RouterLink.vue";
</script>

<template>
  <MainLayout>
    <h1 class="text-3xl mb-4">Welcome to Daily</h1>
    <Button>
      <RouterLink href="/daily">get started</RouterLink>
    </Button>
  </MainLayout>
</template>
