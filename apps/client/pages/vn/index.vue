<script setup>
const route = useRoute()
const router = useRouter()

const vnId = parseInt(route.query.vnId)
const vnName = route.query.vnName

const vnData = ref(null)

try {
  if (vnId) {
    const { data } = await useAsyncData('vn', () => GqlGetVnById({ vnId }))
    if (data.value.getVnById.ok)
      vnData.value = data.value.getVnById.data
    else
      throw new Error(data.value.getVnById.error)
  }
  else if (vnName) {
    const { data } = await useAsyncData('vn', () => GqlGetVnByName({ vnName }))
    if (data.value.getVnByName.ok)
      vnData.value = data.value.getVnByName.data
    else
      throw new Error(data.value.getVnByName.error)
  }
}
catch (err) {
  console.error(err)
  router.push({ name: 'index' })
}
</script>

<template>
  <div class="flex h-screen justify-center">
    <div class="flex flex-col gap-4">
      <h1 class="text-xl">
        id: {{ vnId }}
      </h1>
      <h1 class="text-xl">
        name: {{ vnData.title }}
      </h1>
    </div>
  </div>
</template>
