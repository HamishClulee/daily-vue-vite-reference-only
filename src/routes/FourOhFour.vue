<script setup>
import Button from "../components/buttons/Button.vue";
import MainLayout from "../components/layout/MainLayout.vue";
import RouterLink from "../components/router-link/RouterLink.vue";
</script>

<template>
  <MainLayout>
    <h1 class="text-3xl mb-4">404</h1>
    <Button>
      <RouterLink href="/">home</RouterLink>
    </Button>
  </MainLayout>
</template>
