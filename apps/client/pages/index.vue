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
  statusData.value = data.value.getStatus.data
}
catch {
  alert('Error: failed to get status')
}

useHead({
  title: 'Yuriko | Home',
})
</script>

<template>
  <div class="flex h-full xl:mt-64 mt-52">
    <div class="m-auto">
      <div class="flex flex-col gap-12 justify-center items-center">
        <h1 class="md:text-9xl text-6xl tracking-wide font-medium select-none">
          Yuriko
        </h1>
        <h2 class="-mt-8 md:text-2xl text-xl tracking-wider font-light select-none">
          Alternative frontend for VNDB website
        </h2>
        <div class="grid grid-cols-3 grid-flow-row place-items-center mt-8 gap-8 text-gray-400 select-none">
          <p class="flex w-full flex-col justify-center items-center">
            <span class="md:text-xl text-md mb-1">Visual novels</span>
            <span>{{ statusData.vn }}</span>
          </p>
          <p class="flex w-full flex-col justify-center items-center">
            <span class="md:text-xl text-md mb-1">Releases</span>
            <span>{{ statusData.releases }}</span>
          </p>
          <p class="flex w-full flex-col justify-center items-center">
            <span class="md:text-xl text-md mb-1">Producers</span>
            <span>{{ statusData.vn }}</span>
          </p>
          <p class="flex w-full flex-col justify-center items-center">
            <span class="md:text-xl text-md mb-1">Charecters</span>
            <span>{{ statusData.chars }}</span>
          </p>
          <p class="flex w-full flex-col justify-center items-center">
            <span class="md:text-xl text-md mb-1">Traits</span>
            <span>{{ statusData.traits }}</span>
          </p>
          <p class="flex w-full flex-col justify-center items-center">
            <span class="md:text-xl text-md mb-1">Tags</span>
            <span>{{ statusData.tags }}</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
