<script setup>
import { useQuery } from '@urql/vue'

const route = useRoute()
const router = useRouter()

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
    try {
      const vnDataTmp = data.value.getVNById.data
      vnData.value = vnDataTmp
    }
    catch (err) {
      router.push('/')
    }
  }
})
</script>

<template>
  <transition name="fade">
    <div v-if="fetching">
      <h1 class="mt-16 p-8 text-4xl text-center">
        Loading
      </h1>
    </div>
    <div v-else>
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
        <!--  -->
      </div>
    </div>
  </transition>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity .5s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
