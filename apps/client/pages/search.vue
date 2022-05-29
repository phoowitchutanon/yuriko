<script setup>
const router = useRouter()

const vnInputId = ref(null)
const vnInputName = ref(null)

const searching = ref(false)

function submitInput() {
  searching.value = true
  const id = vnInputId.value
  const name = vnInputName.value
  if (id || name)
    router.push({ name: 'vn', query: { vnId: id, vnName: name } })
  setTimeout(() => {
    searching.value = false
  }, 500)
}

useHead({
  title: 'Yuriko | Search',
})
</script>

<template>
  <div>
    <div class="flex h-full w-96 mx-auto mt-16 py-4 bg-gray-50 shadow-2xl rounded-xl">
      <div class="flex h-full w-full flex-col gap-6">
        <h1 class="text-3xl text-center">
          Search VNs
        </h1>
        <div class="flex flex-col justify-center items-center gap-6">
          <input v-model="vnInputId" class="w-3/4 rounded-md outline-none focus:ring-indigo-500 focus:ring-offset-0 transition-all" type="number" placeholder="Enter id">
          <p class="-my-4 text-center">
            or
          </p>
          <input v-model="vnInputName" class="w-3/4 rounded-md outline-none focus:ring-indigo-500 focus:ring-offset-0 transition-all" type="text" placeholder="Enter name">
          <button v-if="!searching" type="button" class="px-8 py-2 bg-indigo-500 hover:bg-indigo-700 text-white rounded-lg transition-all" @click="submitInput">
            Search
          </button>
          <button v-else type="button" class="flex flex-row items-center px-6 py-2 bg-indigo-700 text-white rounded-lg" disabled>
            <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            Searching
          </button>
        </div>
      </div>
    </div>
    <p class="mt-16 text-md text-center">
      Note: vn searching is not completed yet, do not expected it to be as perfect as VNDB website.
    </p>
  </div>
</template>
