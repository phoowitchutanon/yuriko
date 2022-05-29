<script setup>
import { useQuery } from '@urql/vue'

const route = useRoute()

const vnId = parseInt(route.params.id)
const vnData = ref(null)

const { fetching, data } = useQuery({
  query:
  `
    query GetVNById($vnId: Float!) {
      getVNById(id: $vnId) {
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
          links {
            wikipedia
            encubed
            renai
            wikidata
          }
          image
          image_nsfw
          image_flagging {
            votecount
            sexual_avg
            violence_avg
          }
          anime {
            id
            ann_id
            nfo_id
            title_romaji
            title_kanji
            year
            type
          }
          relations {
            id
            relation
            title
            orignal
            official
          }
          popularity
          rating
          votecount
          screens {
            image
            rid
            nsfw
            flagging {
              votecount
              sexual_avg
              violence_avg
            }
            height
            width
          }
          staff {
            sid
            aid
            name
            orignal
            role
            note
          }
        }
      }
    }
  `,
  variables: { vnId },
})

watchEffect(() => {
  if (!fetching.value) {
    const vnDataTmp = data.value.getVNById.data
    vnData.value = vnDataTmp
    console.log(vnData)
  }
})
</script>

<template>
  <div>
    <h1 class="p-8 text-xl">
      <img :src="vnData.image" alt="">
    </h1>
  </div>
</template>
