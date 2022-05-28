import { Field, InterfaceType, ObjectType } from "type-graphql";

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
export class vnInfo {
  @Field()
  id: number;

  @Field()
  title: string;

  @Field({ nullable: true })
  original?: string;

  @Field({ nullable: true })
  released?: string;

  // @Field()
  //   languages: string[]

  // @Field()
  //   orig_lang: string[]

  // @Field()
  //   platforms: string[]

  @Field({ nullable: true })
  aliases?: string;

  @Field()
  length?: number;

  @Field()
  description?: string;

  // @Field()
  //   links: object

  @Field({ nullable: true })
  image?: string;

  @Field()
  image_nsfw: boolean;

  // @Field()
  //   image_flagging?: object

  // @Field()
  //   anime: object[]

  // @Field()
  //   relations: object[]

  // @Field()
  //   tags: [][]

  @Field()
  popularity: number;

  @Field()
  rating: number;

  @Field()
  votecount: number;

  // @Field()
  //   screens: object[]

  // @Field()
  //   staff: object[]
}

@ObjectType()
export class vnInfoResponse {
  @Field()
  message: string;

  @Field(() => vnInfo)
  data?: vnInfo;
}
