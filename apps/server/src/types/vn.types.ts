import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class vnDbStatus {
  @Field()
  users: number;

  @Field()
  threads: number;

  @Field()
  tags: number;

  @Field()
  releases: number;

  @Field()
  producers: number;

  @Field()
  chars: number;

  @Field()
  posts: number;

  @Field()
  vn: number;

  @Field()
  traits: number;
}

@ObjectType()
export class vnDbStatusResponse {
  @Field()
  message: string;

  @Field(() => vnDbStatus)
  data: vnDbStatus;
}

@ObjectType()
class vnInfoAnime {
  @Field()
    id: number

  @Field({ nullable: true })
    ann_id?: number
  
  @Field({ nullable: true })
    nfo_id?: string

  @Field({ nullable: true })
    title_romaji?: string

  @Field({ nullable: true })
    title_kanji?: string

  @Field({ nullable: true })
    year?: number
  
  @Field({ nullable: true })
    type?: string
}

@ObjectType()
class vnInfoLinks {
  @Field({ nullable: true })
    wikipedia?: string

  @Field({ nullable: true })
    encubed?: string

  @Field({ nullable: true })
    renai?: string

  @Field({ nullable: true })
    wikidata?: string
}

@ObjectType()
class vnInfoImageFlagging {
  @Field()
    votecount: number

  @Field({ nullable: true })
    sexual_avg?: number

  @Field({ nullable: true })
    violence_avg?: number
}

@ObjectType()
class vnInfoScreens {
  @Field()
    image: string

  @Field()
    rid: number

  @Field()
    nsfw: boolean

  @Field(() => vnInfoImageFlagging)
    flagging: vnInfoImageFlagging

  @Field()
    height: number

  @Field()
    width: number
}

@ObjectType()
class vnInfoRelations {
  @Field()
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
  @Field()
    sid: number

  @Field()
    aid: number

  @Field()
    name: string

  @Field({ nullable: true })
    orignal?: string

  @Field()
    role: string

  @Field({ nullable: true })
    note?: string
}

@ObjectType()
export class vnInfo {
  @Field()
  id: number;

  @Field()
  title: string;

  @Field({ nullable: true })
  original?: string;

  @Field({ nullable: true })
  released?: string;

  @Field(() => [String])
    languages: string[]

  @Field(() => [String])
    orig_lang: string[]

  @Field(() => [String])
    platforms: string[]

  @Field({ nullable: true })
    aliases?: string;

  @Field({ nullable: true })
    length?: number;

  @Field({ nullable: true })
    description?: string;

  @Field(() => vnInfoLinks)
    links: vnInfoLinks

  @Field({ nullable: true })
    image?: string;

  @Field()
    image_nsfw: boolean;

  @Field(() => vnInfoImageFlagging,{ nullable: true })
    image_flagging?: vnInfoImageFlagging

  @Field(() => [vnInfoAnime])
    anime: vnInfoAnime[]

  @Field(() => [vnInfoRelations])
    relations: vnInfoRelations[]

  // @Field(() => [vnInfoTags])
  //   tags: vnInfoTags[]

  @Field()
  popularity: number;

  @Field()
  rating: number;

  @Field()
  votecount: number;

  @Field(() => [vnInfoScreens])
    screens: vnInfoScreens[]

  @Field(() => [vnInfoStaff])
    staff: vnInfoStaff[]
}

@ObjectType()
export class vnInfoResponse {
  @Field()
  message: string;

  @Field(() => vnInfo)
  data?: vnInfo;
}
