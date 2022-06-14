<script setup>
const route = useRoute()
const router = useRouter()

const vnId = parseInt(route.query.vnId)
const vnName = route.query.vnName

const vnData = ref(null)
const vnTitle = ref('')
</script>

<template>
  <div class="flex h-screen justify-center">
    <div class="flex flex-col gap-4">
      <h1 class="text-xl">
        id: {{ vnId }}
      </h1>
      <h1 class="text-xl">
        name: {{ vnName }}
      </h1>
    </div>
  </div>
</template>
