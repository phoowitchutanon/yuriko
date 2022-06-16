import { Field, ID, ObjectType } from 'type-graphql'

import { baseResponse } from './default.types'

@ObjectType()
export class vnDbStatus {
  @Field(() => Number)
    users: number

  @Field(() => Number)
    threads: number

  @Field(() => Number)
    tags: number

  @Field(() => Number)
    releases: number

  @Field(() => Number)
    producers: number

  @Field(() => Number)
    chars: number

  @Field(() => Number)
    posts: number

  @Field(() => Number)
    vn: number

  @Field(() => Number)
    traits: number
}

@ObjectType({ implements: baseResponse })
export class vnDbStatusResponse extends baseResponse {
  @Field(() => vnDbStatus, { nullable: true })
    data?: vnDbStatus
}

@ObjectType()
class vnInfoAnime {
  @Field(() => ID)
    id: number

  @Field(() => Number, { nullable: true })
    ann_id?: number

  @Field(() => String, { nullable: true })
    nfo_id?: string

  @Field(() => String, { nullable: true })
    title_romaji?: string

  @Field(() => String, { nullable: true })
    title_kanji?: string

  @Field(() => Number, { nullable: true })
    year?: number

  @Field(() => String, { nullable: true })
    type?: string
}

@ObjectType()
class vnInfoLinks {
  @Field(() => String, { nullable: true })
    wikipedia?: string

  @Field(() => String, { nullable: true })
    encubed?: string

  @Field(() => String, { nullable: true })
    renai?: string

  @Field(() => String, { nullable: true })
    wikidata?: string
}

@ObjectType()
class vnInfoImageFlagging {
  @Field(() => Number)
    votecount: number

  @Field(() => Number, { nullable: true })
    sexual_avg?: number

  @Field(() => Number, { nullable: true })
    violence_avg?: number
}

@ObjectType()
class vnInfoScreens {
  @Field(() => String)
    image: string

  @Field(() => String)
    rid: number

  @Field(() => String)
    nsfw: boolean

  @Field(() => vnInfoImageFlagging)
    flagging: vnInfoImageFlagging

  @Field(() => Number)
    height: number

  @Field(() => Number)
    width: number
}

@ObjectType()
class vnInfoRelations {
  @Field(() => ID)
    id: number

  @Field()
    relation: string

  @Field()
    title: string

  @Field({ nullable: true })
    orignal?: string

  @Field()
    official: boolean
}

// @ObjectType()
// class vnInfoTags {
//   @Field()
//     tag_id: number

//   @Field()
//     score: number

//   @Field()
//     spoiler_level: number
// }

@ObjectType()
class vnInfoStaff {
  @Field(() => Number)
    sid: number

  @Field(() => Number)
    aid: number

  @Field(() => String)
    name: string

  @Field(() => String, { nullable: true })
    orignal?: string

  @Field(() => String)
    role: string

  @Field(() => String, { nullable: true })
    note?: string
}

@ObjectType()
export class vnInfo {
  @Field(() => Number)
    id: number

  @Field(() => String)
    title: string

  @Field(() => String, { nullable: true })
    original?: string

  @Field(() => String, { nullable: true })
    released?: string

  @Field(() => [String])
    languages: string[]

  @Field(() => [String])
    orig_lang: string[]

  @Field(() => [String])
    platforms: string[]

  @Field(() => String, { nullable: true })
    aliases?: string

  @Field(() => Number, { nullable: true })
    length?: number

  @Field(() => String, { nullable: true })
    description?: string

  @Field(() => vnInfoLinks)
    links: vnInfoLinks

  @Field(() => String, { nullable: true })
    image?: string

  @Field(() => Boolean)
    image_nsfw: boolean

  @Field(() => vnInfoImageFlagging, { nullable: true })
    image_flagging?: vnInfoImageFlagging

  @Field(() => [vnInfoAnime])
    anime: vnInfoAnime[]

  @Field(() => [vnInfoRelations])
    relations: vnInfoRelations[]

  // @Field(() => [vnInfoTags])
  //   tags: vnInfoTags[]

  @Field(() => Number)
    popularity: number

  @Field(() => Number)
    rating: number

  @Field(() => Number)
    votecount: number

  @Field(() => [vnInfoScreens])
    screens: vnInfoScreens[]

  @Field(() => [vnInfoStaff])
    staff: vnInfoStaff[]
}

@ObjectType({ implements: baseResponse })
export class vnInfoResponse extends baseResponse {
  @Field(() => vnInfo)
    data?: vnInfo
}
