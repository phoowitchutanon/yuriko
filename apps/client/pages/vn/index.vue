<script setup>
import { useQuery } from '@urql/vue'
const route = useRoute()
const router = useRouter()
const vnId = parseInt(route.query.vnId)
const vnName = route.query.vnName
const vnData = ref(null)
const vnTitle = ref('')
if (vnId) {
  try {
    const getVnById = useQuery({
      query:
      `
        query GetVnById($vnId: Float!) {
          getVnById(id: $vnId) {
            message
            data {
              id
              title
              original
              released
              languages
              orig_lang
              platforms
              aliases
              length
              description
              links { wikipedia, encubed, renai, wikidata }
              image
              image_nsfw
              image_flagging { votecount, sexual_avg, violence_avg }
              anime { id, ann_id, nfo_id, title_romaji, title_kanji, year, type }
              relations { id, relation, title, orignal, official }
              popularity
              rating
              votecount
              screens { image, rid, nsfw, flagging { votecount, sexual_avg, violence_avg }, height, width }
              staff { sid, aid, name, orignal, role, note }
            }
          }
        }
      `,
      variables: { vnId },
    })
    const { data } = await getVnById
    vnData.value = data.value.getVnById.data
    vnTitle.value = vnData.value.title
  }
  catch {
    router.push('/')
  }
}
else if (vnName) {
  try {
    const getVnByName = useQuery({
      query:
    `
      query GetVnByName($vnName: String!) {
        getVnByName(name: $vnName) {
          message
          data {
            id
            title
            original
            released
            languages
            orig_lang
            platforms
            aliases
            length
            description
            links { wikipedia, encubed, renai, wikidata }
            image
            image_nsfw
            image_flagging { votecount, sexual_avg, violence_avg }
            anime { id, ann_id, nfo_id, title_romaji, title_kanji, year, type }
            relations { id, relation, title, orignal, official }
            popularity
            rating
            votecount
            screens { image, rid, nsfw, flagging { votecount, sexual_avg, violence_avg }, height, width }
            staff { sid, aid, name, orignal, role, note }
          }
        }
      }
    `,
      variables: { vnName },
    })
    const { data } = await getVnByName
    vnData.value = data.value.getVnByName.data
    vnTitle.value = vnData.value.title
  }
  catch {
    router.push('/')
  }
}
else {
  router.push('/')
}
useHead({
  title: `Yuriko | ${vnData.value.title}`,
})
</script>

<template>
  <div class="h-full w-full xl:px-16 xl:py-8 p-8">
    <div class="flex flex-row gap-8">
      <img :src="vnData.image" class="w-[256px] h-[357px]">
      <div class="flex flex-col gap-4">
        <div class="flex flex-row gap-4 ">
          <h1 class="text-2xl">
            {{ vnData.title }}
          </h1>
          <h2 class="text-xl">
            {{ vnData.original }}
          </h2>
        </div>
        <div class="w-366">
          <hr class="min-w-366 border-t border-black">
          <div class="grid grid-cols-3 grid-flow-row mt-2 gap-y-6">
            <div class="flex flex-col gap-2">
              <h1 class="text-2xl font-medium">
                Aliases
              </h1>
              <p>
                {{ vnData.aliases }}
              </p>
            </div>
            <div class="col-span-2 row-span-3 border-1 border-black rounded-md">
              <p class="p-2">
                {{ vnData.description }}
              </p>
            </div>
            <div class="flex flex-col gap-2 mt-4">
              <h1 class="text-2xl font-medium">
                Playtime
              </h1>
              <p class="text-xl">
                {{ vnData.length }}
              </p>
            </div>
            <div class="flex flex-col gap-2 mt-4">
              <h1 class="text-2xl font-medium">
                Developer
              </h1>
              <p class="text-xl text-red-500">
                NOT IMPLEMENT YET
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="flex flex-col justify-center items-center gap-8">
      <img :src="vnData.image" class="w-[256px] h-[357px]">
      <div class="flex flex-col gap-2">
        <h1 class="text-2xl font-normal">
          {{ vnData.title }}
        </h1>
      </div>
    </div> -->
  </div>
</template>
