<script setup>
const router = useRouter()

const vnInputId = ref(null)

function submitInput() {
  const id = vnInputId.value

  if (id)
    router.push(`/vn/${id}`)
}
</script>

<template>
  <div class="flex h-full w-96 mx-auto mt-8 py-4 bg-gray-50 shadow-xl">
    <div class="flex h-full w-full flex-col gap-6">
      <h1 class="text-3xl text-center">
        Search VNs
      </h1>
      <div class="flex flex-col justify-center items-center gap-6">
        <input v-model="vnInputId" class="w-3/4" type="number" placeholder="Enter id">
        <button type="button" class="px-8 py-2 bg-indigo-500 hover:bg-indigo-800 rounded-lg" @click="submitInput">
          <p class="text-white">
            Search
          </p>
        </button>
      </div>
    </div>
  </div>
</template>
