<script setup>
const route = useRoute()

const vnId = route.params.id
</script>

<template>
  <div>
    <h1 class="p-8 text-xl">
      You are on VN: {{ vnId }}
    </h1>
  </div>
</template>
