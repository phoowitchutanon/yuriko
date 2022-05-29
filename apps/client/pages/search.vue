<script setup>
const router = useRouter()

const vnInput = ref(null)

function submitInput() {
  const id = vnInput.value
  if (typeof id === 'number')
    router.push(`/vn/${id}`)
}
</script>

<template>
  <div class="flex h-48 w-96 mx-auto mt-8 bg-gray-50 shadow-xl">
    <div class="flex h-full w-full flex-col mt-4 gap-6">
      <h1 class="text-3xl text-center">
        Search VNs
      </h1>
      <div class="flex flex-col justify-center items-center gap-6">
        <input v-model="vnInput" class="w-3/4" type="number" placeholder="Enter VN id's">
        <button type="button" class="px-8 py-2 bg-indigo-500 hover:bg-indigo-800 rounded-lg" @click="submitInput">
          <p class="text-white">
            Search
          </p>
        </button>
      </div>
    </div>
  </div>
</template>
