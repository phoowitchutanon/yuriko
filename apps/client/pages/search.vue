<script setup>
const router = useRouter()

const vnInputId = ref(null)
const vnInputName = ref(null)

function submitInput() {
  const id = vnInputId.value
  const name = vnInputName.value
  if (id || name)
    router.push({ name: 'vn', query: { vnId: id, vnName: name } })
}
</script>

<template>
  <div>
    <div class="flex h-full w-96 mx-auto mt-8 py-4 bg-gray-50 shadow-xl">
      <div class="flex h-full w-full flex-col gap-6">
        <h1 class="text-3xl text-center">
          Search VNs
        </h1>
        <div class="flex flex-col justify-center items-center gap-6">
          <input v-model="vnInputId" class="w-3/4" type="number" placeholder="Enter id">
          <input v-model="vnInputName" class="w-3/4" type="text" placeholder="Enter name">
          <button type="button" class="px-8 py-2 bg-indigo-500 hover:bg-indigo-800 rounded-lg" @click="submitInput">
            <p class="text-white">
              Search
            </p>
          </button>
        </div>
      </div>
    </div>
    <p class="mt-16 text-md text-center">
      Note: vn searching is not completed yet, do not expected it to be as perfect as VNDB website.
    </p>
  </div>
</template>
