<script setup>
import { useQuery } from '@urql/vue'

const statusData = ref(null)

try {
  const getStatus = useQuery({
    query:
    `
      query GetStatus {
        getStatus {
          message
          data {
            users
            threads
            tags
            releases
            producers
            chars
            posts
            vn
            traits
          }
        }
      }
    `,
  })
  const { data } = await getStatus
  statusData.value = { error: false, data: data.value.getStatus.data }
}
catch {
  statusData.value = { error: true, data: null }
}

useHead({
  title: 'Yuriko | Home',
})
</script>

<template>
  <div id="bg__container" class="flex h-full xl:mt-58 mt-42">
    <div class="m-auto">
      <div class="flex flex-col gap-12 justify-center items-center">
        <h1 class="md:text-9xl text-8xl tracking-wide font-medium select-none hover:text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transition-all ease-in-out duration-750">
          Yuriko
        </h1>
        <h2 class="-mt-8 md:text-2xl text-lg md:tracking-wider font-light select-none">
          Alternative frontend for VNDB website
        </h2>
        <div v-if="!statusData.error" class="grid grid-cols-3 grid-flow-row place-items-center mt-8 gap-8 select-none">
          <p class="flex w-full flex-col justify-center items-center text-gray-400 hover:text-black transition-all">
            <span class="md:text-xl text-md mb-1">Visual novels</span>
            <span>{{ statusData.data.vn }}</span>
          </p>
          <p class="flex w-full flex-col justify-center items-center text-gray-400 hover:text-black transition-all">
            <span class="md:text-xl text-md mb-1">Releases</span>
            <span>{{ statusData.data.releases }}</span>
          </p>
          <p class="flex w-full flex-col justify-center items-center text-gray-400 hover:text-black transition-all">
            <span class="md:text-xl text-md mb-1">Producers</span>
            <span>{{ statusData.data.producers }}</span>
          </p>
          <p class="flex w-full flex-col justify-center items-center text-gray-400 hover:text-black transition-all">
            <span class="md:text-xl text-md mb-1">Charecters</span>
            <span>{{ statusData.data.chars }}</span>
          </p>
          <p class="flex w-full flex-col justify-center items-center text-gray-400 hover:text-black transition-all">
            <span class="md:text-xl text-md mb-1">Traits</span>
            <span>{{ statusData.data.traits }}</span>
          </p>
          <p class="flex w-full flex-col justify-center items-center text-gray-400 hover:text-black transition-all">
            <span class="md:text-xl text-md mb-1">Tags</span>
            <span>{{ statusData.data.tags }}</span>
          </p>
        </div>
        <div v-else>
          <p class="mt-12 text-xl text-red-500 animate-pulse select-none transition-opacity duration-1000">
            API ERROR
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
