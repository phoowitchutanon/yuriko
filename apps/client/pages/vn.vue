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
  <div class="flex h-full w-full flex-col p-8">
    <div class="flex flex-row gap-8">
      <img :src="vnData.image" alt="">
      <div class="flex flex-col gap-2">
        <h1 class="text-2xl font-normal">
          {{ vnData.title }}
        </h1>
        <h2 class="text-2xl">
          {{ vnData.original }}
        </h2>
        <h1 class="text-lg font-normal">
          Aliases: {{ vnData.aliases }}
        </h1>
      </div>
    </div>
  </div>
</template>

