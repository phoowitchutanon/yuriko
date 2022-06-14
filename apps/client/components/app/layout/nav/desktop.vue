<script setup>
import { Icon } from '@iconify/vue'
</script>

<template>
  <div class="h-12 min-w-screen bg-indigo-600">
    <div class="flex h-full w-full justify-between items-center px-4">
      <div class="flex flex-row gap-6">
        <NuxtLink to="/">
          <h1 class="text-xl text-white">
            Home
          </h1>
        </NuxtLink>
        <NuxtLink to="/search">
          <h1 class="text-xl text-white">
            Search
          </h1>
        </NuxtLink>
      </div>
      <div class="flex flex-row gap-6 text-white">
        <NuxtLink to="https://github.com/Gusb3ll/Yuriko" target="_blank">
          <Icon icon="mdi:github" :style="{ fontSize: '32px' }" />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
