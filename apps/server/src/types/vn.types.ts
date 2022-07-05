import { Field, Float, Int, ObjectType } from 'type-graphql'

import { baseResponse } from './default.types'

@ObjectType()
export class vnDbStatus {
  @Field(() => Int)
    users: number

  @Field(() => Int)
    threads: number

  @Field(() => Int)
    tags: number

  @Field(() => Int)
    releases: number

  @Field(() => Int)
    producers: number

  @Field(() => Int)
    chars: number

  @Field(() => Int)
    posts: number

  @Field(() => Int)
    vn: number

  @Field(() => Int)
    traits: number
}

@ObjectType({ implements: baseResponse })
export class vnDbStatusResponse extends baseResponse {
  @Field(() => vnDbStatus, { nullable: true })
    data?: vnDbStatus
}

@ObjectType()
class vnInfoAnime {
  @Field(() => Int)
    id: number

  @Field(() => Int, { nullable: true })
    ann_id?: number

  @Field(() => String, { nullable: true })
    nfo_id?: string

  @Field(() => String, { nullable: true })
    title_romaji?: string

  @Field(() => String, { nullable: true })
    title_kanji?: string

  @Field(() => Int, { nullable: true })
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
  @Field(() => Int)
    votecount: number

  @Field(() => Float, { nullable: true })
    sexual_avg?: number

  @Field(() => Float, { nullable: true })
    violence_avg?: number
}

@ObjectType()
class vnInfoScreens {
  @Field(() => String)
    image: string

  @Field(() => Int)
    rid: number

  @Field(() => Boolean)
    nsfw: boolean

  @Field(() => vnInfoImageFlagging)
    flagging: vnInfoImageFlagging

  @Field(() => Int)
    height: number

  @Field(() => Int)
    width: number
}

@ObjectType()
class vnInfoRelations {
  @Field(() => Int)
    id: number

  @Field(() => String)
    relation: string

  @Field(() => String)
    title: string

  @Field(() => String, { nullable: true })
    orignal?: string

  @Field(() => Boolean)
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
  @Field(() => Int)
    sid: number

  @Field(() => Int)
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
  @Field(() => Int)
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

  @Field(() => Int, { nullable: true })
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

  @Field(() => Float)
    popularity: number

  @Field(() => Float)
    rating: number

  @Field(() => Int)
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
